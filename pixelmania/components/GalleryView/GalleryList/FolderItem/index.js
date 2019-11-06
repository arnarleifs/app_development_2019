import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Text, ImageBackground } from '@shoutem/ui';
import folder from 'pixelmania/resources/folder.png';

const FolderItem = ({ name, onFolderClick }) => (
    <TouchableWithoutFeedback onPress={ () => onFolderClick(name) }>
        <View>
            <ImageBackground style={ { alignSelf: 'center' } } styleName="medium-square" source={ folder }>
                <Text>{ name }</Text>
            </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
);

export default FolderItem;
