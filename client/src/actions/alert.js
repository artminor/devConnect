import uuid from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
} from './types';

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            id
        }
    });

    //remove alert after 3 secs
    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), timeout);
};