import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DraggableImage from './src/components/DraggableImage';

export default class App extends React.Component {
    state = {
        images: [
            { name: 'horse', 'src': require('./src/resources/horse.jpg') },
            { name: 'cat', 'src': require('./src/resources/cat.jpg') },
            { name: 'turtle', 'src': require('./src/resources/turtle.jpg') },
            { name: 'wolf', 'src': require('./src/resources/wolf.jpg') }
        ]
    }
    render() {
        const { images } = this.state;
        return (
            <View style={styles.container}>
                { images.map(({ name, src }) => <DraggableImage key={ name } src={ src } />) }
        	</View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'lightskyblue',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
