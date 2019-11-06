import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { addImage } from 'pixelmania/services/fileService';

// Only intended as a wrap-around component to introduce a certain functionality
class Import extends React.Component {
    state = {
        hasImportPermission: false
    }
    async getPermission() {
        const { hasImportPermission } = this.state;
        if (!hasImportPermission) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            this.setState({ hasImportPermission: status === 'granted' });
        }
    }
    async pickImage() {
        await this.getPermission();
        const { onPickImage, closeModal, activateSpinner } = this.props;

        closeModal();
        activateSpinner();

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: .8,
            base64: true,
            aspect: [16, 9]
        });

        if (!result.cancelled) { await addImage(result.uri); }

        onPickImage();
    }
    render() {
        const { children } = this.props;
        return (
            <TouchableWithoutFeedback onPress={ () => this.pickImage() }>
                <View>{ children }</View>
            </TouchableWithoutFeedback>
        );
    }
};

export default Import;
