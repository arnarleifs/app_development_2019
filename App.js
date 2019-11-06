import React from 'react';
import * as Font from 'expo-font';
import AppContainer from './app-container';
import moment from 'moment';
moment.locale('en');

export default class App extends React.Component {
    state = {
        isLoadingFonts: true
    }
    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf')
        });
        this.setState({ isLoadingFonts: false });
    }
    render() {
        const { isLoadingFonts } = this.state;
        return (
            isLoadingFonts
            ?
            <></>
            :
            <AppContainer />
        );
    }
}
