// @flow
import * as React from 'react';
import classnames from 'classnames';

import './style.css';

const Form = ({ children, size }) => {
    const cn = classnames({
        'form-wrapper': true,
        'form-narrow': size === 'narrow'
    });
    return <div className={cn}>
        { children }
    </div>
}

export default Form;
