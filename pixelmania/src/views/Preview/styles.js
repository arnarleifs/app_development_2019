import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    background: {
        backgroundColor: 'black',
        width: winWidth,
        height: winHeight
    }
});
