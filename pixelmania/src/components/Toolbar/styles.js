import { StyleSheet } from 'react-native';
import { darkerBlue } from '../../styles/colors';

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: darkerBlue
    },
    toolbarAction: {
        flex: 1,
        alignItems: 'center'
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
});
