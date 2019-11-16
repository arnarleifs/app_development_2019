import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Icon, Caption } from '@shoutem/ui';

const styles = StyleSheet.create({
    icon: {
        fontSize: 40,
        marginTop: 10,
        marginBottom: 10
    }
});

const IconButton = ({ name, caption, onPress }) => (
    onPress
    ?
    <TouchableWithoutFeedback onPress={ onPress }>
        <View>
            <Icon style={ styles.icon } name={ name } />
            <Caption>{ caption }</Caption>
        </View>
    </TouchableWithoutFeedback>
    :
    <View>
        <Icon style={ styles.icon } name={ name } />
        <Caption>{ caption }</Caption>
    </View>
);

export default IconButton;
