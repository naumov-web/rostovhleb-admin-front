import { account_api } from './api_instances';

const TRANSLATES_PATH = '/translates';

export const index = () => {
    return account_api.get(TRANSLATES_PATH);
};

export const create = data => {
    return account_api.post(TRANSLATES_PATH, data);
};