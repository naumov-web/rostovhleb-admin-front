import { account_api } from './api_instances';

const PRODUCTS_PATH = '/products';
const PRODUCTS_ITEM_PATH = '/products/{id}';

export const index = () => {
    return account_api.get(PRODUCTS_PATH);
};

export const create = data => {
    return account_api.post(PRODUCTS_PATH, data);
};

export const update = (id, data) => {
    return account_api.put(PRODUCTS_ITEM_PATH.replace('{id}', id), data);
};

export const remove = (id) => {
    return account_api.delete(PRODUCTS_ITEM_PATH.replace('{id}', id));
};