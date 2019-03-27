import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withLifecycle from '@hocs/with-lifecycle';
import { 
    effects as translatesEffects,
    selectors as translatesSelector
} from 'redux/ducks/translates.duck';
import TranslatesList from './TranslatesList';

const mapStateToProps = (state) => {
    return {
        ...state,
        items: translatesSelector.getTranslates(state)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...translatesEffects
    },
    dispatch
);

const enhancedTranslatesList = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ loadTranslates }) {
            loadTranslates();
        }
    })
)(TranslatesList);

export default enhancedTranslatesList;
