import axios from 'axios';

const setAuthToken = token => {
    //check if token in local storage, set header with token
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headres.common['x-auth-token'];
    }
}

export default setAuthToken;