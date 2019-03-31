// @flow
import * as React from 'react';
import MainMenu from 'components/main_menu';
import IndexPage from './main';
import LoginPage from './login';
import NewsListPage from './news/list';
import NewsEditPage from './news/edit';
import VacanciesListPage from './vacancies/list';
import VacanciesEditPage from './vacancies/edit';
import TranslatesListPage from './translates/list';
import TranslatesEditPage from './translates/edit';
import ProductsListPage from './products/list';
import ProductsEditPage from './products/edit';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const AppRoutes = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <React.Fragment>
                <MainMenu />
                <Route exact path="/translates" component={TranslatesListPage} />
                <Route exact path="/translates/add" component={TranslatesEditPage} />
                <Route exact path="/translates/:id" component={TranslatesEditPage} />
                <Route exact path="/products" component={ProductsListPage} />
                <Route exact path="/products/add" component={ProductsEditPage} />
                <Route exact path="/news" component={NewsListPage} />
                <Route exact path="/news/add" component={NewsEditPage} />
                <Route exact path="/vacancies" component={VacanciesListPage} />
                <Route exact path="/vacancies/add" component={VacanciesEditPage} />
                <Route exact path="/vacancies/:id" component={VacanciesEditPage} />
            </React.Fragment>
        </Switch>
    </BrowserRouter>;
};

export default AppRoutes;