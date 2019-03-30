// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

const EditItemLink = ({ link }) => {
    return <div className="add-item">
        <Link className="btn btn-primary" to={link}>
            <FaPencilAlt /> Редактировать
        </Link>
    </div>;
};

export default EditItemLink;