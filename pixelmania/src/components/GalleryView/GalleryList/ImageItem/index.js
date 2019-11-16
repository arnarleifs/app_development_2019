import React from 'react';
import moment from 'moment';
import { Image } from '@shoutem/ui';

const ImageItem = ({ file, name }) => (
    <Image
        styleName="medium-square"
        style={{
            alignSelf: 'center'
        }}
        source={{ uri: `data:image/jpeg;base64,${file}` }} />
);

export default ImageItem;
