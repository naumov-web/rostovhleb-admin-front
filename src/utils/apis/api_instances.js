import axios from 'axios';
import { API_URL } from 'utils/constants';
import { store } from 'redux/store';

const baseConfig = {
    baseURL: API_URL,
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
};

export const public_api = axios.create(baseConfig);

export const account_api = axios.create(baseConfig);

account_api.interceptors.request.use(config => {
    const state = store.getState();
    const { login: loginState} = state;
    let { token } = loginState;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
