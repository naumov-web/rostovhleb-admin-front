// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

const AddItemLink = ({ text, link }) => {
    return <div className="add-item">
        <Link className="btn btn-success" to={link}>
            <FaPlusCircle /> { text }
        </Link>
    </div>;
};

export default AddItemLink;