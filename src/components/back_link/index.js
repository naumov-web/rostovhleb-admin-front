// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const BackLink = ({ link }) => {
    return <Link to={link} className="btn btn-light">
        <FaAngleLeft /> Назад
    </Link>;
};

export default BackLink;
