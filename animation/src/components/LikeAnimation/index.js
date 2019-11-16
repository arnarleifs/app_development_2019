import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import LikeImage from '../../resources/like-float.png';

class LikeAnimation extends React.Component {
    componentDidMount() {
        const { position, opacity, scale } = this.state;
        Animated.sequence([
            Animated.parallel([
                Animated.timing(position, {
                    toValue: -100,
                    duration: 200
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500
                })
            ]),
            Animated.timing(scale, {
                toValue: 3,
                duration: 100
            }),
            Animated.timing(scale, {
                toValue: 0,
                duration: 500
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000
            })
        ]).start();
    }
    state = {
        // The initial position of the like floating icon
        position: new Animated.Value(0),
        // The initial opacity of the like floating icon
        opacity: new Animated.Value(0),
        // The initial scale of the like floating icon
        scale: new Animated.Value(1)
    }
    render() {
        const { position, opacity, scale } = this.state;
        const animationStyle = {
            transform: [
                {
                    translateY: position
                },
                {
                    scale: scale
                }
            ],
            opacity
        };
        return (
            <Animated.Image style={ [ styles.image, animationStyle ] } source={ LikeImage } />
        )
    }
};

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 100,
        height: 100
    }
});

export default LikeAnimation;
