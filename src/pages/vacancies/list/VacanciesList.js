// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';
import VacanciesTable from './VacanciesTable';

const VacanciesListPage = ({ items }) => {
    return <div className="vacancies-list-page">
        <PageTitle>Вакансии</PageTitle>
        <AddItemLink link="/vacancies/add" text="Добавить вакансию" />
        <div className="table-wrapper">
            <VacanciesTable items={items} />
        </div>
    </div>;
};

export default VacanciesListPage;
