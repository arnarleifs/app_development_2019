import React from 'react';
import { View } from 'react-native';
import { Caption, GridView } from '@shoutem/ui';
import Toolbar from './Toolbar';
import GalleryList from './GalleryList';
import AddModal from './AddModal';
import CreateFolderModal from './CreateFolderModal';
import AddToFolderModal from './AddToFolderModal';
import Camera from './Camera';
import Spinner from '../Spinner';
import { getAllItems, remove } from 'pixelmania/services/fileService';

class GalleryView extends React.Component {
    state = {
        items: [],
        selectedItems: [],
        isAddModalOpen: false,
        isFolderModalOpen: false,
        isAddToFolderModalOpen: false,
        currentFolder: '', // This determines in which folder we are currently, so we can think of this as our work directory
        showCamera: false,
        showSpinner: true
    }

    async componentDidMount() {
        await this._fetchItems();
    }

    async _fetchItems(success = true) {
        this.setState({ isFolderModalOpen: false, isAddModalOpen: false });
        if (success) {
            const { currentFolder } = this.state;
            this.setState({ showSpinner: true });
            const items = await getAllItems(currentFolder);
            this.setState({ showSpinner: false, items: items.sort((a, b) => a.type !== 'folder') });
        }
    }

    onItemLongPress(name) {
        const { selectedItems } = this.state;
        if (selectedItems.indexOf(name) !== -1) { return; }
        this.setState({ selectedItems: [ ...selectedItems, name ] });
    }

    onItemSelectionRemove(name) {
        const { selectedItems } = this.state;
        if (selectedItems.indexOf(name) === -1) { return; }
        this.setState({ selectedItems: selectedItems.filter(image => image !== name) });
    }

    async deleteSelectedItems() {
        const { selectedItems, items } = this.state;
        await Promise.all(selectedItems.map(item => remove(item)));
        this.setState({ selectedItems: [], items: items.filter(item => selectedItems.indexOf(item.name) === -1) });
    }

    displayCaption() {
        const { selectedItems } = this.state;
        let itemCaption = 'items';
        if (selectedItems.length === 1) {
            itemCaption = 'item';
        }
        return <Caption style={{ marginLeft: 25 }}>{ selectedItems.length } { itemCaption } selected</Caption>;
    }

    updateCameraVisibility(visible) {
        if (visible) {
            this.setState({ showCamera: true, isAddModalOpen: false });
        } else {
            this.setState({ showCamera: false });
        }
    }

    async closeCamera() {
        this.setState({ showCamera: false });
        await this._fetchItems();
    }

    changeFolder(folderName) {
        this.setState({ currentFolder: folderName }, async () => {
            await this._fetchItems();
        });
    }

    render() {
        const { selectedItems, isAddModalOpen, isFolderModalOpen, showCamera, showSpinner, items } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Toolbar
                    hasSelectedItems={ selectedItems.length > 0 }
                    onAdd={ () => this.setState({ isAddModalOpen: true }) }
                    onCreateFolder={ () => this.setState({ isFolderModalOpen: true }) }
                    onRemove={ () => this.deleteSelectedItems() }
                    onAddToFolder={ () => this.setState({ isAddToFolderModalOpen: true }) } />
                {
                    showSpinner
                    ?
                    <Spinner />
                    :
                    <>
                        {
                            selectedItems.length === 0
                            ?
                            <></>
                            :
                            this.displayCaption()
                        }
                        <GalleryList
                            items={ items }
                            selectedItems={ selectedItems }
                            onHold={ name => this.onItemLongPress(name) }
                            onFolderClick={ folderName => this.changeFolder(folderName) }
                            onRemove={ name => this.onItemSelectionRemove(name) } />
                    </>
                }
                <AddModal
                    isOpen={ isAddModalOpen }
                    closeModal={ () => this.setState({ isAddModalOpen: false }) }
                    updateCameraVisibility={ visible => this.updateCameraVisibility(visible) }
                    activateSpinner={ () => this.setState({ showSpinner: true }) }
                    onPickImage={ success => this._fetchItems(success) } />
                <CreateFolderModal
                    isOpen={ isFolderModalOpen }
                    closeModal={ refetch => {
                        this.setState({ isFolderModalOpen: false });
                        if (refetch) {
                            this._fetchItems();
                        }
                    } } />
                <AddToFolderModal />
                <Camera
                    showCamera={ showCamera }
                    closeCamera={ () => this.closeCamera() } />
            </View>
        );
    }
}

export default GalleryView;
