
import React from 'react';
import { PanResponder, Animated, StyleSheet } from 'react-native';

class DraggableImage extends React.Component {
    constructor(props) {
        super(props);
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                // Now I have the lock and can start animating
                this.setState({ dragging: true });
                const { position } = this.state;

                // Set the offset of the previous position
                position.setOffset(position.__getValue());
                // Set the starting value to 0
                position.setValue({ x: 0, y: 0 });
                // Set scale of selected item
                this._setScale(1.1, 1000);
            },
            onPanResponderMove: this.onMove.bind(this),
            onPanResponderRelease: this.onRelease.bind(this)
        });
        this.state = {
            dragging: false,
            position: new Animated.ValueXY(),
            scale: new Animated.Value(1)
        };
    }
    _setScale(toValue, duration) {
        const { scale } = this.state;
        Animated.timing(scale, {
            toValue,
            duration
        }).start();
    }
    _moveImage(dx, dy) {
        const { position } = this.state;
        position.setValue({ x: dx, y: dy });
    }
    onMove(nativeEvent, gestureState) {
        const { dx, dy } = gestureState;
        this._moveImage(dx, dy);
    }
    onRelease(nativeEvent, gestureState) {
        const { dx, dy } = gestureState;
        this._moveImage(dx, dy);
        this._setScale(1, 500);
        this.setState({ dragging: false });
    }
    render() {
        const { position, dragging, scale } = this.state;
        const { src } = this.props;
        const animatedStyles = [
            styles.image,
            {
                zIndex: dragging ? 2 : 0,
                transform: [
                    ...position.getTranslateTransform(),
                    { scale }
                ]
            }
        ];
        return (
            <Animated.Image style={ animatedStyles } source={src} { ...this._panResponder.panHandlers } />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150
    }
});

export default DraggableImage;
