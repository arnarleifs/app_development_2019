import React from 'react';
import IconButton from './IconButton';
import Import from '../Import';
import Modal from '../../Modal';

const AddModal = ({ isOpen, closeModal, updateCameraVisibility, activateSpinner, onPickImage }) => (
    <Modal
        isOpen={ isOpen }
        closeModal={ closeModal }
        title="Add an image">
        <IconButton
            name="take-a-photo"
            caption="Camera"
            onPress={ () => updateCameraVisibility(true) } />
        <Import onPickImage={ () => onPickImage() } closeModal={ closeModal } activateSpinner={ activateSpinner }>
            <IconButton
                name="photo"
                caption="Upload" />
        </Import>
    </Modal>
);

export default AddModal;
