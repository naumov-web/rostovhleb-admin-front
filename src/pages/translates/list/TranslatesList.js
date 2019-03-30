// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';
import TranslatesTable from './TranslatesTable';

const TranslatesListPage = ({ items }) => {
    return <div className="translates-list-page">
        <PageTitle>Переводы</PageTitle>
        <AddItemLink link="/translates/add" text="Добавить перевод" />
        <div className="table-wrapper">
            <TranslatesTable items={items} />
        </div>
    </div>;
};

export default TranslatesListPage;