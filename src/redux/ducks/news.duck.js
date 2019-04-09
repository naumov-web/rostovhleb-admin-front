import { createActions, handleActions } from 'redux-actions';
import { 
    index as loadNewsItems, 
    create as createNewsItem,
    update as updateNewsItem,
    remove as removeNewsItem
} from 'utils/apis/news';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';

const initialState = {
    news: [],
    opened_item_files: [],
    openedItem: {
        new_files: []
    }
};

const ADD_NEW_FILE = 'ADD_NEW_FILE';
const DELETE_NEW_FILE = 'DELETE_NEW_FILE';
const DELETE_FILE = 'DELETE_FILE';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
const GET_NEWS_FAIL = 'GET_NEWS_FAIL';
const SET_OPENED_ITEM = 'SET_OPENED_ITEM';
const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
const CREATE_NEWS_FAIL = 'CREATE_NEWS_FAIL';
const UPDATE_NEWS_SUCCESS = 'UPDATE_NEWS_SUCCESS';
const UPDATE_NEWS_FAIL = 'UPDATE_NEWS_FAIL';

const actions = createActions(
    ADD_NEW_FILE,
    DELETE_NEW_FILE,
    DELETE_FILE,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL,
    SET_OPENED_ITEM,
    CREATE_NEWS_SUCCESS,
    CREATE_NEWS_FAIL,
    UPDATE_NEWS_SUCCESS,
    UPDATE_NEWS_FAIL
);

const reducer = handleActions(
    {
        [actions.getNewsSuccess]: (
            state,
            data
        ) => {
            return {
                ...state,
                news: data.payload
            };
        },
        [actions.addNewFile]: (
            state,
            data
        ) => {
            const { openedItem } = state;
            openedItem.new_files.push(data.payload);
            return {
                ...state,
                openedItem
            };
        },
        [actions.deleteFile]: (
            state,
            data
        ) => {
            const index = data.payload;
            const { opened_item_files } = state;
            const res = [];
            for(let i = 0, len = opened_item_files.length; i < len; i++)
            {
                if (i === index) {
                    continue;
                }
                res.push(opened_item_files[i]);
            }
            return {
                ...state,
                opened_item_files: res
            };
        },
        [actions.deleteNewFile]: (
            state,
            data
        ) => {
            const index = data.payload;
            const { openedItem } = state;
            openedItem.new_files.splice(index, 1);
            return {
                ...state,
                ...openedItem
            };
        }
    },
    initialState
);

const effects = {
    createNewsItem: item => async dispatch => {
        try {
            await createNewsItem(item);
            const response = await loadNewsItems();
            const { data } = response;
            dispatch(actions.getNewsSuccess(data));
            dispatch(push('/news'));
        } catch (e) {
            dispatch(actions.createNewsFail());
        }
        return true;
    },
    updateNewsItem: (id, item) => async dispatch => {
        try {
            await updateNewsItem(id, item);
            const response = await loadNewsItems();
            const { data } = response;
            dispatch(actions.getNewsSuccess(data));
            dispatch(push('/news'));
        } catch (e) {
            dispatch(actions.updateNewsFail());
        }
        return true;
    },
    loadNewsItems: () => async dispatch => {
        try {
            const response = await loadNewsItems();
            const { data } = response;
            dispatch(actions.getNewsSuccess(data));
        } catch (e) {
            dispatch(actions.getNewsFail());
        }
        return true;
    }
};

const getState = state => state ? state.news : {};

const selectors = {
    getNews: createSelector(
        [getState],
        s => s ? s.news : []
    ),
    getOpenedItem: createSelector(
        [getState],
        s => s.openedItem
    ),
    getOpenedItemFiles: createSelector(
        [getState],
        s => s.opened_item_files
    )
};

export { initialState as state, reducer, actions, selectors, effects };