import React from 'react';
import { View, GridRow, ListView } from '@shoutem/ui';
import ImageItem from './ImageItem';
import FolderItem from './FolderItem';
import GalleryItem from './GalleryItem';
import { withNavigation } from 'react-navigation';

const renderRow = (rowData, sectionId, index, selectedItems, onHold, onRemove, onFolderClick, navigate) => {
    const cells = rowData.map(item => {
        let jsxItem;
        let onPressHandler = () => {};
        if (item.type === 'image') {
            jsxItem = <ImageItem { ...item } />;
            onPressHandler = () => navigate('Preview', { fileName: item.name });
        }
        if (item.type === 'folder') {
            jsxItem = <FolderItem onFolderClick={ onFolderClick } name={ item.name } />;
            onPressHandler = () => onFolderClick(item.name);
        }
        return (
            <GalleryItem
                key={ item.name }
                name={ item.name }
                onHold={ onHold }
                onPress={ onPressHandler }
                selected={ selectedItems.indexOf(item.name) !== -1 }
                onRemove={ onRemove } >{ jsxItem }</GalleryItem>
        );
    });
    return (
        <GridRow columns={ 2 } style={{ backgroundColor: 'white' }}>{ cells }</GridRow>
    );
};

const GalleryList = ({ items, selectedItems, onHold, onRemove, onFolderClick, navigation: { navigate } }) => {
    const groupedData = GridRow.groupByRows(items, 2, () => 1);
    return (
        <View style={{ height: '90%' }}>
            <ListView data={ groupedData } renderRow={ (rowData, sectionId, index) => renderRow(rowData, sectionId, index, selectedItems, onHold, onRemove, onFolderClick, navigate) } />
        </View>
    );
};

export default withNavigation(GalleryList);
