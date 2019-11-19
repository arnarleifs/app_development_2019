import * as constants from '../constants';

export const changeUser = (name, age) => ({
    type: constants.CHANGE_USER,
    payload: { name, age }
});
