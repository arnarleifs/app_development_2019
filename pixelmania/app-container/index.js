import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainView from '../components/MainView';
import GalleryView from '../components/GalleryView';
import PreviewView from '../components/PreviewView';
import SettingsView from '../components/SettingsView';

export default createAppContainer(createStackNavigator({
    Main: {
        screen: MainView
    },
    Gallery: {
        screen: GalleryView
    },
    Preview: {
        screen: PreviewView
    },
    Settings: {
        screen: SettingsView
    }
}));
