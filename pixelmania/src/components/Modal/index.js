import React from 'react';
import NativeModal from 'react-native-modal';
import { Dimensions, StyleSheet } from 'react-native';
import { View, Title, Divider } from '@shoutem/ui';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: .3,
        borderRadius: 10,
        width: winWidth - 100,
        backgroundColor: 'white',
        padding: 40
    },
    divider: {
        marginTop: 10,
        marginBottom: 10
    }
});

const Modal = ({ isOpen, closeModal, title, children }) => (
    <NativeModal
        isVisible={ isOpen }
        hasBackdrop={ true }
        onBackButtonPress={ closeModal }
        onSwipeComplete={ closeModal }
        swipeDirection={[ "up", "down" ]}
        style={ styles.modal }>
        <View style={ styles.body }>
            <Title>{ title }</Title>
            <Divider styleName="line" style={ styles.divider } />
            { children }
        </View>
    </NativeModal>
);

export default Modal;
