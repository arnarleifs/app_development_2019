import React, { useState } from 'react';
import Modal from '../../Modal';
import { TextInput, Text, View, Button } from '@shoutem/ui';
import { createFolder } from 'pixelmania/services/fileService';

const CreateFolderModal = ({ isOpen, closeModal }) => {
    const [ folder, setFolder ] = useState('');
    return (
        <Modal
            isOpen={ isOpen }
            closeModal={ () => {
                setFolder('');
                closeModal();
            } }
            title="Create folder">
            <TextInput
                value={ folder }
                placeholder="Enter name of folder.."
                autoFocus={ true }
                onChangeText={ text => setFolder(text) } />
            <View styleName="horizontal">
                <Button onPress={ () => {
                    createFolder(folder);
                    setFolder('');
                    closeModal(true);
                } }><Text>Create</Text></Button>
                <Button onPress={ closeModal }><Text>Cancel</Text></Button>
            </View>
        </Modal>
    );
};

export default CreateFolderModal;
