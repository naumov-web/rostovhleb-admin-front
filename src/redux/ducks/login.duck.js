import { createActions, handleActions } from 'redux-actions';
import { login } from 'utils/apis/login';
import { createSelector } from 'reselect';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
const LOGIN_REQUEST_FAIL = 'LOGIN_REQUEST_FAIL';

const initialState = {
    token: null
};

const actions = createActions(
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL
);

const reducer = handleActions(
    {
        [actions.loginRequestSuccess]: (
            state,
            data
        ) => {
            let { payload: { token } } = data;
            return {
                ...state,
                token
            };
        }
    },
    initialState
);

const effects = {
    login: credentials => async dispatch => {
        try {
            const response = await login(credentials);
            const { data } = response;
            dispatch(actions.loginRequestSuccess(data));
        } catch (e) {
            actions.loginRequestFail();
        }
        return true;
    }
};

const getState = state => state.login;

const selectors = {
    getToken: createSelector(
        [getState],
        s => s.token
    )
};

export { initialState as state, reducer, actions, selectors, effects };
