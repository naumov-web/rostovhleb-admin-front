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
import base64Encode from 'utils/files/base64';

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
    return {
        openedItem: productsSelectors.getOpenedItem(state),
        categories: productsSelectors.getCategories(state)
    };
};

const enhancedProductForm = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ loadCategories }) {
            loadCategories();
        }
    }),
    withStateHandlers(
        {
            new_files: []
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
            onSubmit: () => event => {

            }
        }
    )
)(ProductForm);

export default enhancedProductForm;