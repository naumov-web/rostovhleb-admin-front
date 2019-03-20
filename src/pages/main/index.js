// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import { Link } from 'react-router-dom';

import './style.css';

const IndexPage = () => {
    return <div className="index-page">
        <PageTitle>Для доступа к административной панели необходимо авторизироваться</PageTitle>
        <div className="link-wrapper">
            <Link className="btn btn-success btn-lg" to="/login">Авторизация</Link>
        </div>
    </div>;
};

export default IndexPage;