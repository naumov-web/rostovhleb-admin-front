// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import BackLink from 'components/back_link';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaCheck } from 'react-icons/fa';

import './style.css';

const TranslateForm = ({ submitHandler, openedItem }) => {
    const title = openedItem.system_name ? 'Редактировать перевод' : 'Добавить перевод';
    return <div className="translate-form-page">
        <PageTitle>{ title }</PageTitle>
        <FormWrapper>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Системное наименование</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="system_name" 
                        required="required"
                        defaultValue={openedItem.system_name || ''}
                        placeholder="Системное наименование" />
                    <Form.Text className="text-muted">
                        Не изменяйте данное значение, это может нарушить работу сайта
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Текст на русском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="name_ru" 
                        required="required"
                        defaultValue={openedItem.name_ru || ''}
                        placeholder="Текст на русском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Текст на английском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="name_en" 
                        defaultValue={openedItem.name_en || ''}
                        placeholder="Текст на английском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Текст на китайском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="name_cn" 
                        defaultValue={openedItem.name_cn || ''}
                        placeholder="Текст на китайском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Button variant="success" type="submit">
                        <FaCheck /> Сохранить
                    </Button>
                    <BackLink link="/translates" />
                </Form.Group>
            </Form>
        </FormWrapper>
    </div>;
};

export default TranslateForm;
