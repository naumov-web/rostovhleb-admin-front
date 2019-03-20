// @flow
import * as React from 'react';

import './style.css';

const PageTitle = ({ children }) => {
    return <h3 className="page-title">
        { children }
    </h3>;
};

export default PageTitle;