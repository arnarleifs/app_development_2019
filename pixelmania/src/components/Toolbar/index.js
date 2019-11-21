import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ hasSelectedImages, onAdd, onRemove }) => (
    <View styleName="horizontal" style={ styles.toolbar }>
        <TouchableHighlight
            style={ styles.toolbarAction }
            onPress={ onAdd }>
            <Text style={ styles.toolbarActionText }>Add image</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={ styles.toolbarAction }
            onPress={ onRemove }
            disabled={ !hasSelectedImages }>
            <Text style={ [ styles.toolbarActionText, !hasSelectedImages ? { color: 'rgba(155, 155, 155, .5)' } : {} ] }>Delete</Text>
        </TouchableHighlight>
    </View>
);

export default Toolbar;
