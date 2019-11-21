import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import GalleryList from '../../components/GalleryList';
import AddModal from '../../components/AddModal';
import Spinner from '../../components/Spinner';
import { getAllImages, addImage, remove } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import * as colors from '../../styles/colors';
import { headings } from '../../styles';

class Gallery extends React.Component {
    static navigationOptions = {
        title: 'Gallery'
    }

    state = {
        // All images within the application directory
        images: [],
        // All selected images
        selectedImages: [],
        // A boolean flag to indicate whether the images are being loaded or not
        loadingImages: true,
        // A boolean flag to indicate whether the modal to add an image is open or not
        isAddModalOpen: false
    }

    async componentDidMount() {
        await this._fetchItems();
    }

    async _fetchItems() {
        this.setState({ loadingImages: true });
        const images = await getAllImages();
        this.setState({ loadingImages: false, images });
    }

    onImageLongPress(name) {
        const { selectedImages } = this.state;
        if (selectedImages.indexOf(name) !== -1) {
            // The image is already within the list
            this.setState({ selectedImages: selectedImages.filter(image => image !== name) });
        } else {
            // Add the new image
            this.setState({ selectedImages: [ ...selectedImages, name ] });
        }
    }

    async deleteSelectedImages() {
        const { selectedImages, images } = this.state;
        this.setState({ loadingImages: true })
        await Promise.all(selectedImages.map(image => remove(image)));
        this.setState({
            selectedImages: [],
            // Only retrieve images which were NOT part of the selected images list
            images: images.filter(image => selectedImages.indexOf(image.name) === -1),
            loadingImages: false
        });
    }

    async takePhoto() {
        const photo = await takePhoto();
        if (photo.length > 0) { await this.addImage(photo); }
    }

    async selectFromCameraRoll() {
        const photo = await selectFromCameraRoll();
        if (photo.length > 0) { await this.addImage(photo); }
    }

    async addImage(image) {
        this.setState({ loadingImages: true });

        const newImage = await addImage(image);
        const { images } = this.state;
        this.setState({ images: [ ...images, newImage ], loadingImages: false, isAddModalOpen: false });
    }

    displayCaption() {
        const { selectedImages } = this.state;
        if (selectedImages.length === 0) { return; }

        let itemCaption = 'images';
        if (selectedImages.length === 1) {
            itemCaption = 'image';
        }
        return <Text style={ [ headings.h3, { marginLeft: 20, marginTop: 10, marginBottom: 5 } ] }>{ selectedImages.length } { itemCaption } selected</Text>;
    }

    render() {
        const { selectedImages, loadingImages, images, isAddModalOpen } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Toolbar
                    hasSelectedImages={ selectedImages.length > 0 }
                    onAdd={ () => this.setState({ isAddModalOpen: true }) }
                    onRemove={ () => this.deleteSelectedImages() } />
                {
                    loadingImages
                    ?
                    <Spinner />
                    :
                    <>
                        { this.displayCaption() }
                        <GalleryList
                            images={ images }
                            selectedImages={ selectedImages }
                            onLongPress={ name => this.onImageLongPress(name) } />
                    </>
                }
                <AddModal
                    isOpen={ isAddModalOpen }
                    closeModal={ () => this.setState({ isAddModalOpen: false }) }
                    takePhoto={ () => this.takePhoto() }
                    selectFromCameraRoll={ () => this.selectFromCameraRoll() } />
            </View>
        );
    }
}

export default Gallery;
