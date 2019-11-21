import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const ImageThumbnail = ({ file, name, onLongPress, isSelected, navigation: { navigate } }) => (
    <TouchableOpacity
        onLongPress={ () => onLongPress(name) }
        onPress={ () => navigate('Preview', { fileName: name }) }>
        {
            isSelected
            ?
            <AntDesign name="checkcircleo" style={ styles.checkmark } />
            :
            <></>
        }
        <View style={ { opacity: isSelected ? .5 : 1 } }>
            <Image
                style={ styles.image }
                resizeMode="cover"
                source={{ uri: `data:image/jpeg;base64,${file}` }} />
        </View>
    </TouchableOpacity>
);

export default withNavigation(ImageThumbnail);
