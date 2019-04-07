import { createActions, handleActions } from 'redux-actions';
import { index as loadCategories } from 'utils/apis/categories';
import { 
    index as loadProducts, 
    create as createProduct,
    update as updateProduct,
    remove as removeProduct
} from 'utils/apis/products';
import { createSelector } from 'reselect';
import { push } from 'connected-react-router';

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
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCT_FAIL';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

const actions = createActions(
    ADD_NEW_FILE,
    DELETE_NEW_FILE,
    DELETE_FILE,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL
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
        [actions.getProductsSuccess]: (
            state,
            data
        ) => {
            return {
                ...state,
                products: data.payload
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
        },
        [actions.deleteFile]: (
            state,
            data
        ) => {
            const index = data.payload;
            console.log(state);
            const { openedItem } = state;
            openedItem.files.splice(index, 1);
            return {
                ...state,
                ...openedItem
            };
        }
    },
    initialState
);

const effects = {
    createProduct: product => async dispatch => {
        try {
            await createProduct(product);
            const response = await loadProducts();
            const { data } = response;
            dispatch(actions.getProductsSuccess(data));
            dispatch(push('/products'));
        } catch (e) {
            dispatch(actions.createProductFail());
        }
        return true;
    },
    updateProduct: (id, product) => async dispatch => {
        try {
            await updateProduct(id, product);
            const response = await loadProducts();
            const { data } = response;
            dispatch(actions.getProductsSuccess(data));
            dispatch(push('/products'));
        } catch (e) {
            dispatch(actions.updateProductFail());
        }
        return true;
    },
    removeProduct: id => async dispatch => {
        try {
            await removeProduct(id);
            const response = await loadProducts();
            const { data } = response;
            dispatch(actions.getProductsSuccess(data));
        } catch (e) {
            dispatch(actions.deleteProductFail());
        }
        return true;
    },
    loadProducts: () => async dispatch => {
        try {
            const response = await loadProducts();
            const { data } = response;
            dispatch(actions.getProductsSuccess(data));
        } catch (e) {
            dispatch(actions.getProductsFail());
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