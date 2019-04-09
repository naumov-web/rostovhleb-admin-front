import { account_api } from './api_instances';

const NEWS_PATH = '/news';
const NEWS_ITEM_PATH = '/news/{id}';

export const index = () => {
    return account_api.get(NEWS_PATH);
};

export const create = data => {
    return account_api.post(NEWS_PATH, data);
};

export const update = (id, data) => {
    return account_api.put(NEWS_ITEM_PATH.replace('{id}', id), data);
};

export const remove = (id) => {
    return account_api.delete(NEWS_ITEM_PATH.replace('{id}', id));
};