import React from 'react';
import { Spinner as UISpinner } from '@shoutem/ui';

const styles = {
    spinner: {
        height: '100%',
        width: '100%',
        size: 'large'
    }
}

export default () => <UISpinner style={ styles.spinner } />;
