import React from 'react';
import { Dimensions, View, ImageBackground } from 'react-native';
import { loadImage } from '../../services/fileService';
import styles from './styles';
import Spinner from '../../components/Spinner';

class Preview extends React.Component {
    state = {
        currentImage: '',
        loadingImage: true
    }
    async componentDidMount() {
        const { navigation } = this.props;
        const currentImage = await loadImage(navigation.getParam('fileName', ''));
        this.setState({ currentImage, loadingImage: false });
    }
    render() {
        const { currentImage, loadingImage } = this.state;
        return (
            loadingImage
            ?
            <Spinner />
            :
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground
                    resizeMode="contain"
                    source={ { uri: `data:image/jpeg;base64,${currentImage}` } }
                    style={ styles.background } />
            </View>
        )
    }
}

export default Preview;
