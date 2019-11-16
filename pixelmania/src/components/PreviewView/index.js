import React from 'react';
import { Dimensions } from 'react-native';
import { View, ImagePreview } from '@shoutem/ui';
import { loadImage } from 'pixelmania/services/fileService';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

class PreviewView extends React.Component {
    state = {
        selectedFilter: '',
        currentImage: ''
    }
    async componentDidMount() {
        const { navigation } = this.props;
        const currentImage = await loadImage(navigation.getParam('fileName', ''));
        this.setState({ currentImage });
    }
    render() {
        const { currentImage } = this.state;
        return (
            <View>
                <ImagePreview
                    source={ { uri: `data:image/jpeg;base64,${currentImage}` } }
                    width={ winWidth }
                    height={ winHeight } />
            </View>
        )
    }
}

export default PreviewView;
