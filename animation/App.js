import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LikeButton from './src/components/LikeButton';

export default function App() {
	return (
        <View style={ styles.container }>
            <LikeButton />
    	</View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
