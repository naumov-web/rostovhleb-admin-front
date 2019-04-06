import { account_api } from './api_instances';

const CATEGORIES_PATH = '/categories';

export const index = () => {
    return account_api.get(CATEGORIES_PATH);
};