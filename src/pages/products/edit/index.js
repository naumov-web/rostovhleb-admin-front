import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withLifecycle from '@hocs/with-lifecycle';

import { 
    actions as productsActions, 
    effects as productsEffects,
    selectors as productsSelectors 
} from 'redux/ducks/products.duck';
import ProductForm from './ProductForm';
// HELPERS
import base64Encode from 'utils/files/base64';
import inputs_composer from 'utils/forms/inputs_composer';

const getOpenedItem = state => {
    const pathname = document.location.pathname;
    var res = productsSelectors.getOpenedItem(state);

    if (pathname.indexOf('products-add') === -1) {
        const parts = pathname.split('/');
        const id = parseInt(parts[parts.length - 1]);
        const items = productsSelectors.getProducts(state);
        
        for(let i = 0, len = items.length; i < len; i++) {
            if (items[i].id === id) {
                res = items[i];
                break;
            }
        }
    }
    return res;
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...productsActions,
        ...productsSelectors,
        ...productsEffects,
        dispatch
    },
    dispatch
);

const mapStateToProps = (state) => {
    
    const props = {
        openedItem: getOpenedItem(state),
        opened_item_files: productsSelectors.getOpenedItemFiles(state),
        categories: productsSelectors.getCategories(state)
    };

    return props;
};

const enhancedProductForm = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ loadCategories, openedItem, setOpenedItem, dispatch }) {
            loadCategories();
            setOpenedItem(openedItem);
        }
    }),
    withStateHandlers(
        {
            new_files: [],
        },
        {
            addStateNewFile: ({ new_files }) => content => {
                const files = new_files.concat([content]);
                return {
                    new_files: files
                };
            },
            deleteStateNewFile: ({ new_files }) => index => {
                const files = new_files;
                files.splice(index, 1);
                return {
                    new_files: files
                };
            },
            deleteStateFile: ({ openedItem }) => index => {
                const files = openedItem.files;
                files.splice(index, 1);
                return {
                    openedItem
                };
            }
        }
    ),
    withHandlers(
        {
            onChangeFile: ({ addStateNewFile, addNewFile }) => async event => {
                const file = event.target.files[0];
                if (file) {
                    const promise = base64Encode(file);
                    const base64 = await promise;
                    const new_file = {
                        'content': base64,
                        'name': file.name,
                        'mime': file.type
                    };
                    addNewFile(new_file);
                    addStateNewFile(new_file);
                }
                return true;
            },
            removeNewFile: ({ deleteStateNewFile, deleteNewFile }) => index => {
                deleteNewFile(index);
                deleteStateNewFile(index);
            },
            removeFile: ({ openedItem, deleteFile }) => index => {
                const files = [];
                for(let i = 0, len = openedItem.files.length; i < len; i++) {
                    if (i === index) {
                        continue;
                    }
                    files.push(openedItem.files[i]);
                }
                deleteFile(index);
            },
            onSubmit: ({ 
                history, 
                openedItem, 
                new_files, 
                createProduct, 
                updateProduct, 
                opened_item_files 
            }) => event => {
                let values = inputs_composer(event.target.elements);
                event.preventDefault();
                if (openedItem.id) {
                    updateProduct(
                        openedItem.id,
                        {
                            ...values,
                            new_files,
                            files: opened_item_files
                        }
                    );
                } else {
                    createProduct(
                        {
                            ...values,
                            new_files
                        }
                    );
                }
                history.push('/products');
                return false;
            }
        }
    )
)(ProductForm);

export default enhancedProductForm;