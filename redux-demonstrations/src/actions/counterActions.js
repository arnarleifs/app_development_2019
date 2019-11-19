import * as constants from '../constants';

export const incrementCounter = number => ({
    type: constants.INCREMENT,
    payload: number
});
