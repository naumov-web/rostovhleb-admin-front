import { 
    effects as translatesEffects, 
    selectors as translatesSelectors 
} from 'redux/ducks/translates.duck';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import TranslateForm from './TranslateForm';
// HELPERS
import inputs_composer from 'utils/forms/inputs_composer';

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...translatesEffects
    },
    dispatch
);

const mapStateToProps = (state) => {
    const pathname = document.location.pathname;
    const props = {
        openedItem: {}
    };
    
    if (pathname.indexOf('translates/add') === -1) {
        const parts = pathname.split('/');
        const id = parts[parts.length - 1];
        const translates = translatesSelectors.getTranslates(state);
        
        for(let i = 0, len = translates.length; i < len; i++) {
            if (translates[i].id == id) {
                props['openedItem'] = translates[i];
                break;
            }
        }
    }
    return props;
};

const enhancedTranslateForm = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers({
        submitHandler: ({ history, createTranslate, updateTranslate, openedItem }) => (event) => {
            let values = inputs_composer(event.target.elements);
            event.preventDefault();
            if (openedItem.id) {
                updateTranslate(openedItem.id, values);
            }
            else {
                createTranslate(values);
            }
            history.push('/translates');
            return false;
        }
    }),
    withRouter
)(TranslateForm);

export default enhancedTranslateForm;
