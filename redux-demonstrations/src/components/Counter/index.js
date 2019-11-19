import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { incrementCounter } from '../../actions/counterActions';

class Counter extends React.Component {
    state = {
        counter: 0
    }
    onIncrement() {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
        const { incrementCounter } = this.props;
        incrementCounter(1);
    }
    render() {
        const { counter } = this.state;
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>{ counter }</Text>
                <Button title="Increment" onPress={ () => this.onIncrement() } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(null, { incrementCounter })(Counter); // Returns a connected component
