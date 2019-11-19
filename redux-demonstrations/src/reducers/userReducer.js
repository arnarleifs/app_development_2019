import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.CHANGE_USER: return action.payload;
        default: return state;
    }
}
