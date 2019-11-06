import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { View, Icon } from '@shoutem/ui';

const GalleryItem = ({ name, onHold, onRemove, selected, children }) => (
    <TouchableOpacity
        style={{
            backgroundColor: 'white'
        }}
        onLongPress={ () => onHold(name) }>
        {
            selected
            ?
            <Icon name="checkbox-on" style={{
                position: 'absolute',
                top: 5,
                right: 25,
                zIndex: 99
            }} onPress={ () => onRemove(name) } />
            :
            <></>
        }
        <View
            style={{
                opacity: selected ? .5 : 1
            }}>
            { children }
        </View>
    </TouchableOpacity>
);

export default withNavigation(GalleryItem);
