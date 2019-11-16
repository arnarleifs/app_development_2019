import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import LikeImage from '../../resources/like.png';
import LikedImage from '../../resources/liked.png';
import LikeAnimation from '../LikeAnimation';

class LikeButton extends React.Component {
    state = {
        hasLike: false,
        animation: false
    }
    onButtonPress() {
        const { hasLike } = this.state;
        this.setState({ hasLike: !hasLike, animation: hasLike ? false : true });
    }
    render() {
        const { hasLike, animation } = this.state;
        const activeImage = hasLike ? LikedImage : LikeImage;
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={ .7 }
                    onPress={ () => this.onButtonPress() }>
                    <Image style={ styles.button } source={ activeImage } />
                </TouchableOpacity>
                {
                    animation
                    ?
                    <LikeAnimation />
                    :
                    <></>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100
    }
});

export default LikeButton;
