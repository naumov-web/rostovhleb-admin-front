import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withLifecycle from '@hocs/with-lifecycle';
import { 
    effects as newsEffects,
    selectors as newsSelector
} from 'redux/ducks/news.duck';

import NewsList from './NewsList';

const mapStateToProps = (state) => {
    return {
        ...state,
        items: newsSelector.getNews(state)
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        ...newsEffects
    },
    dispatch
);

const enhancedNewsList = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ loadNewsItems }) {
            loadNewsItems();
        }
    })
)(NewsList);

export default enhancedNewsList;