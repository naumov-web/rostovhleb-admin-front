import axios from 'axios';
import { API_URL } from 'utils/constants';

export const public_api = axios.create({
    baseURL: API_URL,
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
});

