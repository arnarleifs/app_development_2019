import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const GalleryList = ({ images, selectedImages, onLongPress }) => (
    <View style={ styles.listContainer }>
        <FlatList
            numColumns={ 3 }
            data={ images }
            extraData={ selectedImages }
            renderItem={ ({ item: { file, name } }) => {
                return (
                    <ImageThumbnail
                        isSelected={ selectedImages.indexOf(name) !== -1 }
                        onLongPress={ onLongPress }
                        name={ name }
                        file={ file } />
                );
            } }
            keyExtractor={ image => image.name } />
    </View>
);

export default GalleryList;
