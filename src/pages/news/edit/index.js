import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withLifecycle from '@hocs/with-lifecycle';

import { 
    actions as newsActions, 
    effects as newsEffects,
    selectors as newsSelectors 
} from 'redux/ducks/news.duck';
import NewsForm from './NewsForm';
// HELPERS
import base64Encode from 'utils/files/base64';
import inputs_composer from 'utils/forms/inputs_composer';

const getOpenedItem = state => {
    const pathname = document.location.pathname;
    var res = newsSelectors.getOpenedItem(state);

    if (pathname.indexOf('news-add') === -1) {
        const parts = pathname.split('/');
        const id = parseInt(parts[parts.length - 1]);
        const items = newsSelectors.getNews(state);
        
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
        ...newsActions,
        ...newsSelectors,
        ...newsEffects,
        dispatch
    },
    dispatch
);

const mapStateToProps = (state) => {
    
    const props = {
        openedItem: getOpenedItem(state),
        opened_item_files: newsSelectors.getOpenedItemFiles(state)
    };

    return props;
};

const enhancedNewsForm = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLifecycle({
        onDidMount({ openedItem, setOpenedItem }) {
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
                createNewsItem, 
                updateNewsItem, 
                opened_item_files 
            }) => event => {
                let values = inputs_composer(event.target.elements);
                event.preventDefault();
                if (openedItem.id) {
                    updateNewsItem(
                        openedItem.id,
                        {
                            ...values,
                            new_files,
                            files: opened_item_files
                        }
                    );
                } else {
                    createNewsItem(
                        {
                            ...values,
                            new_files
                        }
                    );
                }
                history.push('/news');
                return false;
            }
        }
    )
)(NewsForm);

export default enhancedNewsForm;
