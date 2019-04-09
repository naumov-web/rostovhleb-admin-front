// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';
import NewsTable from './NewsTable';

const NewsListPage = (props) => {
    const { items } = props;
    return <div className="news-list-page">
        <PageTitle>Новости</PageTitle>
        <AddItemLink link="/news-add" text="Добавить новость" />
        <div className="table-wrapper">
            <NewsTable items={items} />
        </div>
    </div>;
};

export default NewsListPage;
