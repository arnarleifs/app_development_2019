import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => (
    <View style={ styles.container }>
    	<Image source={ logo } style={ styles.logo } />
        <Text style={ styles.paragraph }>The most powerful image manipulation application out there! Feel free to test out its powers!</Text>
        <TouchableHighlight
            style={ styles.button }
            onPress={ () => { navigate('Gallery') } }>
            <Text style={ styles.buttonText }>Gallery</Text>
        </TouchableHighlight>
    </View>
);

export default Main;
