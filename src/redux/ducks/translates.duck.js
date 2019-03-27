import { createActions, handleActions } from 'redux-actions';
import { 
    create as createTranslate, 
    index as loadTranslates 
} from 'utils/apis/translates';
import { createSelector } from 'reselect';

const GET_TRANSLATES_REQUEST = 'GET_TRANSLATES_REQUEST';
const GET_TRANSLATES_SUCCESS = 'GET_TRANSLATES_SUCCESS';
const GET_TRANSLATES_FAIL = 'GET_TRANSLATES_FAIL';
const CREATE_TRANSLATE_REQUEST = 'CREATE_TRANSLATE_REQUEST';
const CREATE_TRANSLATE_SUCCESS = 'CREATE_TRANSLATE_SUCCESS';
const CREATE_TRANSLATE_FAIL = 'CREATE_TRANSLATE_FAIL';

const initialState = {
    translates: []
};

const actions = createActions(
    GET_TRANSLATES_REQUEST,
    GET_TRANSLATES_SUCCESS,
    GET_TRANSLATES_FAIL,
    CREATE_TRANSLATE_REQUEST,
    CREATE_TRANSLATE_SUCCESS,
    CREATE_TRANSLATE_FAIL
);

const reducer = handleActions(
    {
        [actions.createTranslateSuccess]: (
            state
        ) => {
            return {
                ...state
            };
        },
        [actions.getTranslatesSuccess]: (
            state,
            data
        ) => {
            return {
                ...state,
                translates: data.payload
            };
        }
    },
    initialState
);

const effects = {
    loadTranslates: () => async dispatch => {
        try {
            const response = await loadTranslates();
            const { data } = response;
            dispatch(actions.getTranslatesSuccess(data));
        } catch (e) {
            dispatch(actions.getTranslatesFail(e));
        }
        return true;
    },
    createTranslate: translate => async dispatch => {
        try {
            const response = await createTranslate(translate);
            const { data } = response;
            dispatch(actions.createTranslateSuccess(data));
        } catch (e) {
            dispatch(actions.createTranslateFail());
        }
        return true;
    }
};

const getState = state => state ? state.translates : {};

const selectors = {
    getTranslates: createSelector(
        [getState],
        s => s ? s.translates : []
    )
};

export { initialState as state, reducer, actions, selectors, effects };
