import { createActions, handleActions } from 'redux-actions';
import { 
    create as createTranslate, 
    update as updateTranslate,
    index as loadTranslates 
} from 'utils/apis/translates';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';

const GET_TRANSLATES_REQUEST = 'GET_TRANSLATES_REQUEST';
const GET_TRANSLATES_SUCCESS = 'GET_TRANSLATES_SUCCESS';
const GET_TRANSLATES_FAIL = 'GET_TRANSLATES_FAIL';
const CREATE_TRANSLATE_REQUEST = 'CREATE_TRANSLATE_REQUEST';
const CREATE_TRANSLATE_SUCCESS = 'CREATE_TRANSLATE_SUCCESS';
const CREATE_TRANSLATE_FAIL = 'CREATE_TRANSLATE_FAIL';
const UPDATE_TRANSLATE_REQUEST = 'UPDATE_TRANSLATE_REQUEST';
const UPDATE_TRANSLATE_SUCCESS = 'UPDATE_TRANSLATE_SUCCESS';
const UPDATE_TRANSLATE_FAIL = 'UPDATE_TRANSLATE_FAIL';

const initialState = {
    translates: []
};

const actions = createActions(
    GET_TRANSLATES_REQUEST,
    GET_TRANSLATES_SUCCESS,
    GET_TRANSLATES_FAIL,
    CREATE_TRANSLATE_REQUEST,
    CREATE_TRANSLATE_SUCCESS,
    CREATE_TRANSLATE_FAIL,
    UPDATE_TRANSLATE_REQUEST,
    UPDATE_TRANSLATE_SUCCESS,
    UPDATE_TRANSLATE_FAIL
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
            await createTranslate(translate);
            await loadTranslates();
            dispatch(push('/translates'));
        } catch (e) {
            dispatch(actions.createTranslateFail());
        }
        return true;
    },
    updateTranslate: (id, data) => async dispatch => {
        try {
            await updateTranslate(id, data);
            await loadTranslates();
            dispatch(push('/translates'));
        } catch (e) {
            dispatch(actions.updateTranslateFail());
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
