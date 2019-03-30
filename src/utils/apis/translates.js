import { account_api } from './api_instances';

const TRANSLATES_PATH = '/translates';
const TRANSLATE_ITEM_PATH = '/translates/{id}';

export const index = () => {
    return account_api.get(TRANSLATES_PATH);
};

export const create = data => {
    return account_api.post(TRANSLATES_PATH, data);
};

export const update = (id, data) => {
    return account_api.put(TRANSLATE_ITEM_PATH.replace('{id}', id), data);
};
