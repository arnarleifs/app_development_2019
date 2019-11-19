import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const Header = props => {
    return (
        <View style={ styles.header }>
            <Text>{ props.counter }</Text>
            <View>
                <Text>{ props.user.name }</Text>
                <Text>{ props.user.age }</Text>
            </View>
            <View>
                <Text>The current degree is: { props.currentDegree }</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 60,
        paddingLeft: 40,
        width: '100%',
        backgroundColor: 'lightgray'
    }
});

const mapStateToProps = ({ counter, user, weather }) => ({ counter, user, currentDegree: weather });

export default connect(mapStateToProps)(Header);
