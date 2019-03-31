// @flow
import * as React from 'react';
import { FaTrash } from 'react-icons/fa';

const RemoveItemButton = ({ onClickHandler }) => {
    return <div className="add-item">
        <button onClick={onClickHandler} className="btn btn-danger">
            <FaTrash /> Удалить
        </button>
    </div>;
};

export default RemoveItemButton;