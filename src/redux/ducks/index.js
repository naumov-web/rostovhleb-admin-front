import { reducer as translatesReducer } from './translates.duck';
import { reducer as vacanciesReducer } from './vacancies.duck';
import { reducer as productsReducer } from './products.duck';
import { loginReducer } from './login.duck';

export const login = loginReducer;
export const translates = translatesReducer;
export const vacancies = vacanciesReducer;
export const products = productsReducer;
