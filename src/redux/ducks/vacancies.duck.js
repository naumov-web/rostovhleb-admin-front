import { createActions, handleActions } from 'redux-actions';
import { 
    create as createVacancy, 
    update as updateVacancy,
    index as loadVacancies,
    remove as removeVacancy
} from 'utils/apis/vacancies';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';

const initialState = {
    vacancies: []
};

const GET_VACANCIES_REQUEST = 'GET_VACANCIES_REQUEST';
const GET_VACANCIES_SUCCESS = 'GET_VACANCIES_SUCCESS';
const GET_VACANCIES_FAIL = 'GET_VACANCIES_FAIL';
const CREATE_VACANCY_REQUEST = 'CREATE_VACANCY_REQUEST';
const CREATE_VACANCY_SUCCESS = 'CREATE_VACANCY_SUCCESS';
const CREATE_VACANCY_FAIL = 'CREATE_VACANCY_FAIL';
const UPDATE_VACANCY_REQUEST = 'CREATE_VACANCY_REQUEST';
const UPDATE_VACANCY_SUCCESS = 'UPDATE_VACANCY_SUCCESS';
const UPDATE_VACANCY_FAIL = 'UPDATE_VACANCY_FAIL';
const REMOVE_VACANCY_REQUEST = 'REMOVE_VACANCY_REQUEST';
const REMOVE_VACANCY_SUCCESS = 'REMOVE_VACANCY_SUCCESS';
const REMOVE_VACANCY_FAIL = 'REMOVE_VACANCY_FAIL';

const actions = createActions(
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS,
    GET_VACANCIES_FAIL,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    CREATE_VACANCY_FAIL,
    UPDATE_VACANCY_REQUEST,
    UPDATE_VACANCY_SUCCESS,
    UPDATE_VACANCY_FAIL,
    REMOVE_VACANCY_REQUEST,
    REMOVE_VACANCY_SUCCESS,
    REMOVE_VACANCY_FAIL
);

const reducer = handleActions(
    {
        [actions.createVacancySuccess]: (
            state
        ) => {
            return {
                ...state
            };
        },
        [actions.getVacanciesSuccess]: (
            state,
            data
        ) => {
            return {
                ...state,
                vacancies: data.payload
            };
        }
    },
    initialState
);

const effects = {
    loadVacancies: () => async dispatch => {
        try {
            const response = await loadVacancies();
            const { data } = response;
            dispatch(actions.getVacanciesSuccess(data));
        } catch (e) {
            dispatch(actions.getVacanciesFail(e));
        }
        return true;
    },
    createVacancy: vacancy => async dispatch => {
        try {
            await createVacancy(vacancy);
            const response = await loadVacancies();
            const { data } = response;
            dispatch(actions.getVacanciesSuccess(data));
            dispatch(push('/vacancies'));
        } catch (e) {
            dispatch(actions.createVacancyFail());
        }
        return true;
    },
    removeVacancy: id => async dispatch => {
        try {
            await removeVacancy(id);
            const response = await loadVacancies();
            const { data } = response;
            dispatch(actions.getVacanciesSuccess(data));
        } catch (e) {
            dispatch(actions.removeVacancyFail());
        }
        return true;
    }
};

const getState = state => state ? state.vacancies : {};

const selectors = {
    getVacancies: createSelector(
        [getState],
        s => s ? s.vacancies : []
    )
};

export { initialState as state, reducer, actions, selectors, effects };
