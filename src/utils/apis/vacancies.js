import { account_api } from './api_instances';

const VACANCIES_PATH = '/vacancies';
const VACANCIES_ITEM_PATH = '/vacancies/{id}';
const VACANCY_ENABLE_PATH = '/vacancies/{id}/enable';
const VACANCY_DISABLE_PATH = '/vacancies/{id}/disable';

export const index = () => {
    return account_api.get(VACANCIES_PATH);
};

export const create = data => {
    return account_api.post(VACANCIES_PATH, data);
};

export const update = (id, data) => {
    return account_api.put(VACANCIES_ITEM_PATH.replace('{id}', id), data);
};

export const remove = (id) => {
    return account_api.delete(VACANCIES_ITEM_PATH.replace('{id}', id));
};

export const enable = (id, data) => {
    return account_api.put(VACANCY_ENABLE_PATH.replace('{id}', id), {is_enabled: true});
};

export const disable = (id, data) => {
    return account_api.put(VACANCY_DISABLE_PATH.replace('{id}', id), {is_enabled: false});
};
