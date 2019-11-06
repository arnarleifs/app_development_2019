import React from 'react';
import moment from 'moment';
import { Image } from '@shoutem/ui';
import { TouchableWithoutFeedback, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const ImageItem = ({ file, name, navigation: { navigate } }) => (
    <TouchableWithoutFeedback
        onPress={ () => navigate('Preview', { fileName: name }) }>
        <View>
            <Image
                styleName="medium-square"
                style={{
                    alignSelf: 'center'
                }}
                source={{ uri: `data:image/jpeg;base64,${file}` }} />
        </View>
    </TouchableWithoutFeedback>
);

export default withNavigation(ImageItem);
