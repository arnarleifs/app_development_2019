import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, Icon } from '@shoutem/ui'
import logo from 'pixelmania/resources/logo.png';

const styles = StyleSheet.create({
	container: {
        flex: 1,
        padding: 20,
		backgroundColor: '#007FFF',
		alignItems: 'center',
		justifyContent: 'center'
	},
    paragraph: {
        textAlign: 'center',
        color: 'white'
    },
    button: {
        marginTop: 30
    }
});

const MainView = ({ navigation: { navigate } }) => (
    <View style={ styles.container }>
    	<Image source={ logo } />
        <Text style={ styles.paragraph }>The most powerful image manipulation application out there! Feel free to test out its powers!</Text>
        <Button style={ styles.button } onPress={ () => { navigate('Gallery') } }>
            <Text>GALLERY</Text>
        </Button>
    </View>
);

export default MainView;
