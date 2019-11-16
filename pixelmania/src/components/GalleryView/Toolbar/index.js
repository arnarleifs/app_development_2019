import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text } from '@shoutem/ui';

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#D4DCFF'
    }
});

const Toolbar = ({ hasSelectedItems, onAdd, onCreateFolder, onRemove, onAddToFolder }) => (
    <View styleName="horizontal" style={ styles.toolbar }>
        <Button
            styleName="full-width"
            onPress={ onAdd }><Text>Add</Text></Button>
        <Button
            styleName="full-width"
            onPress={ onCreateFolder }><Text>Create folder</Text></Button>
        <Button
            styleName={ `full-width ${ !hasSelectedItems ? 'muted' : '' }` }
            disabled={ !hasSelectedItems }
            onPress={ onRemove }><Text>Remove</Text></Button>
        <Button
            styleName={ `full-width ${ !hasSelectedItems ? 'muted' : '' }` }
            disabled={ !hasSelectedItems }
            onPress={ onAddToFolder }><Text>Add to folder</Text></Button>
    </View>
);

export default Toolbar;
