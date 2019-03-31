// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';

const NewsListPage = (props) => {
    return <div className="news-list-page">
        <PageTitle>Новости</PageTitle>
        <AddItemLink link="/news/add" text="Добавить новость" />
        <div className="table-wrapper"></div>
    </div>;
};

export default NewsListPage;
