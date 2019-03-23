// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return <div className="main-menu btn-group" role="group">
        <Link to="/products" className="btn btn-light">Продукция</Link>
        <Link to="/news" className="btn btn-light">Новости</Link>
        <Link to="/vacancies" className="btn btn-light">Вакансии</Link>
        <Link to="/translates" className="btn btn-light">Переводы</Link>
    </div>;
};

export default MainMenu;
