import React from 'react';
import { Text, ImageBackground } from '@shoutem/ui';
import folder from 'pixelmania/resources/folder.png';

const FolderItem = ({ name }) => (
    <ImageBackground style={ { alignSelf: 'center' } } styleName="medium-square" source={ folder }>
        <Text>{ name }</Text>
    </ImageBackground>
);

export default FolderItem;
