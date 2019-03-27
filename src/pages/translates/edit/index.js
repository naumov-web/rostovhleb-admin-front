import { effects as translatesEffects } from 'redux/ducks/translates.duck';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TranslateForm from './TranslateForm';
// HELPERS
import inputs_composer from 'utils/forms/inputs_composer';

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...translatesEffects
    },
    dispatch
);

const enhancedTranslateForm = compose(
    connect(
        null,
        mapDispatchToProps
    ),
    withHandlers({
        submitHandler: ({ createTranslate }) => (event) => {
            let values = inputs_composer(event.target.elements);
            event.preventDefault();
            createTranslate(values);
            return false;
        }
    })
)(TranslateForm);

export default enhancedTranslateForm;
