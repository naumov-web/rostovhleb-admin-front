import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { 
    effects as vacanciesEffects, 
    selectors as vacanciesSelectors 
} from 'redux/ducks/vacancies.duck';
import VacancyForm from './VacancyForm';
// HELPERS
import inputs_composer from 'utils/forms/inputs_composer';

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...vacanciesEffects
    },
    dispatch
);

const mapStateToProps = (state) => {
    const pathname = document.location.pathname;
    const props = {
        openedItem: {}
    };
    
    if (pathname.indexOf('vacancies/add') === -1) {
        const parts = pathname.split('/');
        const id = parts[parts.length - 1];
        const items = vacanciesSelectors.getVacancies(state);
        
        for(let i = 0, len = items.length; i < len; i++) {
            if (items[i].id == id) {
                props['openedItem'] = items[i];
                break;
            }
        }
    }
    return props;
};

const enhancedVacancyForm = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers({
        submitHandler: ({ history, createVacancy, updateVacancy, openedItem }) => (event) => {
            let values = inputs_composer(event.target.elements);
            event.preventDefault();
            if (openedItem.id) {
                updateVacancy(openedItem.id, values);
            }
            else {
                createVacancy(values);
            }
            history.push('/vacancies');
            return false;
        }
    }),
    withRouter
)(VacancyForm);

export default enhancedVacancyForm;
