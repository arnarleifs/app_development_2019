import weatherService from '../services/weatherService';
import * as constants from '../constants';

export const getCurrentDegree = () => {
    return async dispatch => {
        try {
            const currentDegree = await weatherService.getCurrentDegree();
            dispatch(getCurrentDegreeSuccess(currentDegree));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getCurrentDegreeSuccess = currentDegree => ({
    type: constants.GET_CURRENT_DEGREE,
    payload: currentDegree
});
