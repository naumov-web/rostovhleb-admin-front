import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withLifecycle from '@hocs/with-lifecycle';
import { 
    effects as productsEffects,
    selectors as productsSelector
} from 'redux/ducks/products.duck';

import ProductsList from './ProductsList';

const mapStateToProps = (state) => {
    return {
        ...state,
        items: productsSelector.getProducts(state)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...productsEffects
    },
    dispatch
);

const enhancedProductsList = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ loadProducts }) {
            loadProducts();
        }
    })
)(ProductsList);

export default enhancedProductsList;
