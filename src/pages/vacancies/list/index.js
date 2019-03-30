import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withLifecycle from '@hocs/with-lifecycle';
import { 
    effects as vacanciesEffects,
    selectors as vacanciesSelector
} from 'redux/ducks/vacancies.duck';

import VacanciesList from './VacanciesList';

const mapStateToProps = (state) => {
    return {
        ...state,
        items: vacanciesSelector.getVacancies(state)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...vacanciesEffects
    },
    dispatch
);

const enhancedVacanciesList = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ loadVacancies }) {
            loadVacancies();
        }
    }),
    withHandlers({
        removeVacancy(id) {

        }
    })
)(VacanciesList);

export default enhancedVacanciesList;
