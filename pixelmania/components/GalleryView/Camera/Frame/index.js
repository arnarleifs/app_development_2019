import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Icon } from '@shoutem/ui';
import { Camera } from 'expo-camera';

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150,
        alignItems: 'center'
    },
    baseIcon: {
        fontSize: 40,
        padding: 5,
        color: 'white'
    },
    image: {
        borderRadius: 50 / 2,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'white'
    },
    change: {

    }
});

const Frame = ({ type, changeType, takePicture }) => (
    <View style={ styles.frame }>
        <Icon style={ { ...styles.baseIcon, ...styles.image } } name="take-a-photo" onPress={ takePicture } />
        <Icon style={ { ...styles.baseIcon, ...styles.change } } name="refresh" onPress={ () => {
            const newType = type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back;
            changeType(newType);
        } } />
    </View>
);

export default Frame;
