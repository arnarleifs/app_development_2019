import * as constants from '../constants';

export default function(state = 0, action) {
    switch (action.type) {
        case constants.INCREMENT: return state + action.payload;
        default: return state;
    }
}
