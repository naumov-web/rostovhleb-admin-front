import { public_api } from './api_instances';

export const login = ({ email, password }) => {
    return public_api.post('/login', {
        email,
        password
    });
};