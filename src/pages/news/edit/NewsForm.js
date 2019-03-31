// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import BackLink from 'components/back_link';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaCheck } from 'react-icons/fa';

import './style.css';

const NewsForm = () => {
    const title = 'Добавить новость';
    return <div className="news-form-page">
        <PageTitle>{ title }</PageTitle>
        <FormWrapper>
            <Form>
                <Form.Group>
                    <Button variant="success" type="submit">
                        <FaCheck /> Сохранить
                    </Button>
                    <BackLink link="/news" />
                </Form.Group>
            </Form>
        </FormWrapper>
    </div>
};

export default NewsForm;
