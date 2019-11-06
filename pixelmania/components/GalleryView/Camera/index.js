import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera as ExpoCamera } from 'expo-camera';
import { addImage, getAllImages } from 'pixelmania/services/fileService';
import Frame from './Frame';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    camera: {
        position: 'absolute',
        width: winWidth,
        height: winHeight,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

class Camera extends React.Component {
    state = {
        hasPermission: false,
        type: ExpoCamera.Constants.Type.back
    }
    async componentDidUpdate() {
        const { showCamera } = this.props;
        const { hasPermission } = this.state;
        if (showCamera && !hasPermission) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasPermission: status === 'granted' });
        }
    }
    async takePicture() {
        if (this.camera) {
            const options = { quality: .8, base64: true };
            const data = await this.camera.takePictureAsync(options);
            await addImage(data.uri);
            this.props.closeCamera();
        }
    }
    render() {
        const { showCamera } = this.props;
        const { type } = this.state;
        return (
            showCamera
            ?
            <ExpoCamera
                ref={ ref => this.camera = ref }
                type={ type }
                autoFocus={ true }
                ratio="16:9"
                style={ styles.camera }>
                <Frame
                    changeType={ type => this.setState({ type }) }
                    takePicture={ () => this.takePicture() }
                    type={ type } />
            </ExpoCamera>
            :
            <></>
        );
    }
};

export default Camera;
