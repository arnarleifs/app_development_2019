import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
    render() {
        const { isOpen, closeModal, takePhoto, selectFromCameraRoll } = this.props;
        return (
            <Modal
                isOpen={ isOpen }
                closeModal={ closeModal }>
                <TouchableOpacity
                    onPress={ () => takePhoto() }>
                    <Entypo style={ styles.icon } name="camera" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => selectFromCameraRoll() }>
                    <Entypo style={ styles.icon } name="image" />
                </TouchableOpacity>
            </Modal>
        );
    }
}

export default AddModal;
