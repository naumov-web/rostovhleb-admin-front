import { reducer as translatesReducer } from './translates.duck';
import { reducer as vacanciesReducer } from './vacancies.duck';
import { loginReducer } from './login.duck';

export const login = loginReducer;
export const translates = translatesReducer;
export const vacancies = vacanciesReducer;
