import { createActions, handleActions } from 'redux-actions';
import { index as loadCategories } from 'utils/apis/categories';
import { createSelector } from 'reselect';

const initialState = {
    products: [],
    categories: [],
    openedItem: {
        new_files: []
    }
};

const ADD_NEW_FILE = 'ADD_NEW_FILE';
const DELETE_NEW_FILE = 'DELETE_NEW_FILE';
const DELETE_FILE = 'DELETE_FILE';
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';
const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCT_FAIL';

const actions = createActions(
    ADD_NEW_FILE,
    DELETE_NEW_FILE,
    DELETE_FILE,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL
);

const reducer = handleActions(
    {
        [actions.getCategoriesSuccess]: (
            state,
            data
        ) => {
            return {
                ...state,
                categories: data.payload
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
    createProduct: () => async dispatch => {
        try {

        } catch (e) {

        }
        return true;
    },
    loadCategories: () => async dispatch => {
        try {
            const response = await loadCategories();
            const { data } = response;
            dispatch(actions.getCategoriesSuccess(data));
        } catch (e) {
            dispatch(actions.getCategoriesFail(e));
        }
        return true;
    }
};

const getState = state => state ? state.products : {};

const selectors = {
    getCategories: createSelector(
        [getState],
        s => s ? s.categories : []
    ),
    getProducts: createSelector(
        [getState],
        s => s ? s.products : []
    ),
    getOpenedItem: createSelector(
        [getState],
        s => s.openedItem
    )
};

export { initialState as state, reducer, actions, selectors, effects };