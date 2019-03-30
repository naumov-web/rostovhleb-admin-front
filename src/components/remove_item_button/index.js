// @flow
import * as React from 'react';
import { FaTrash } from 'react-icons/fa';

const RemoveItemLink = () => {
    return <div className="add-item">
        <button className="btn btn-danger">
            <FaTrash /> Удалить
        </button>
    </div>;
};

export default RemoveItemLink;