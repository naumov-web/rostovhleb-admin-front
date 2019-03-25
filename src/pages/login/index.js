import { 
    effects as loginEffects, 
    selectors as loginSelectors 
} from 'redux/ducks/login.duck';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// COMPONENTS
import Login from './Login';
// HELPERS
import inputs_composer from 'utils/forms/inputs_composer';

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...loginEffects
    },
    dispatch
);

const mapStateToPros = (state) => {
    return {
        ...state,
        token: loginSelectors.getToken(state)
    };
};

const enhancedLogin = compose(
    connect(
        mapStateToPros,
        mapDispatchToProps
    ),
    withHandlers({
        submitHandler: ({ login }) => (event) => {
            let values = inputs_composer(event.target.elements);
            event.preventDefault();
            login(values);
            return false;
        }
    })
)(Login);

export default enhancedLogin;
