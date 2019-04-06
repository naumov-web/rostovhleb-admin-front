// @flow
import * as React from 'react';
import { FaTrash } from 'react-icons/fa';

import './style.css';

const RemoveImageButton = ({ onClickHandler }) => {
    return <button onClick={onClickHandler} className="btn btn-light delete-image-button">
            <FaTrash />
        </button>;
};

export default RemoveImageButton;