import { handleActions } from 'redux-actions';

export default handleActions(
    {
        'LOGIN_REQUEST_SUCCESS': (
            state,
            { payload: { token } }
        ) => (
            {
                ...state,
                token
            }
        )
    },
    {
        token: null
    }
);