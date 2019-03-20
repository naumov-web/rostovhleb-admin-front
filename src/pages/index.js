// @flow
import * as React from 'react';
import IndexPage from './main';
import LoginPage from './login';
import TranslatesListPage from './translates/list';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

const AppRoutes = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/translates" component={TranslatesListPage} />
            <Route exact path="/products" component={TranslatesListPage} />
            <Route exact path="/news" component={TranslatesListPage} />
            <Route exact path="/vacancies" component={TranslatesListPage} />
        </Switch>
    </BrowserRouter>;
};

export default AppRoutes;