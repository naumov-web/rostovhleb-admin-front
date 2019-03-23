// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';

import './style.css';

const TranslatesListPage = () => {
    return <div className="translates-list-page">
        <PageTitle>Переводы</PageTitle>
        <AddItemLink link="/translates/add" text="Добавить перевод" />
    </div>;
};

export default TranslatesListPage;