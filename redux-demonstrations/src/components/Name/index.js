import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/userActions';

class Name extends React.Component {
    state = {
        name: '',
        age: ''
    }
    onInputHandler(name, value) {
        this.setState({ [ name ]: value });
    }
    onPress() {
        const { name, age } = this.state;
        const { changeUser } = this.props;
        this.setState({ name: '', age: '' });
        changeUser(name, age);
    }
    render() {
        const { name, age } = this.state;
        return (
            <View>
                <TextInput
                    placeholder="Enter your name"
                    value={ name }
                    onChangeText={ text => this.onInputHandler('name', text) } />
                <TextInput
                    placeholder="Enter your age"
                    value={ age }
                    onChangeText={ text => this.onInputHandler('age', text) } />
                <Button title="Update user" onPress={ () => this.onPress() } />
            </View>
        );
    }
}

export default connect(null, { changeUser })(Name);
