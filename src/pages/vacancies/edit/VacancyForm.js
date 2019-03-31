// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import BackLink from 'components/back_link';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaCheck } from 'react-icons/fa';

import './style.css';

const VacancyForm = ({ submitHandler, openedItem }) => {
    const title = openedItem.id ? 'Редактировать вакансию' : 'Добавить вакансию';
    return <div className="vacancy-form-page">
        <PageTitle>{ title }</PageTitle>
        <FormWrapper>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Наименование на русском языке</Form.Label>
                    <Form.Control 
                        name="name_ru" 
                        required="required"
                        placeholder="Наименование на русском языке"
                        defaultValue={openedItem.name_ru || ''}
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование на английском языке</Form.Label>
                    <Form.Control 
                        name="name_en" 
                        placeholder="Наименование на английском языке"
                        defaultValue={openedItem.name_en || ''}
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование на китайском языке</Form.Label>
                    <Form.Control 
                        name="name_cn" 
                        placeholder="Наименование на китайском языке"
                        defaultValue={openedItem.name_cn || ''}
                        rows="7" />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Описание на русском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_ru" 
                        required="required"
                        placeholder="Описание на русском языке"
                        defaultValue={openedItem.description_ru || ''}
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание на английском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_en" 
                        placeholder="Описание на английском языке"
                        defaultValue={openedItem.description_en || ''}
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание на китайском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_en" 
                        placeholder="Описание на китайском языке"
                        defaultValue={openedItem.description_cn || ''}
                        rows="7" />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Стартовая зарплата</Form.Label>
                    <Form.Control 
                        name="salary_from" 
                        placeholder="Стартовая зарплата"
                        defaultValue={openedItem.salary_from || ''} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Конечная зарплата</Form.Label>
                    <Form.Control 
                        name="salary_to" 
                        placeholder="Конечная зарплата"
                        defaultValue={openedItem.salary_to || ''} />
                </Form.Group>
                <hr/>
                <Form.Group className="checkbox-group">
                    <Form.Label>
                        <input type="checkbox" 
                                name="is_enabled" 
                                defaultChecked={openedItem.is_enabled}
                                value="1" />
                        Включена
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Button variant="success" type="submit">
                        <FaCheck /> Сохранить
                    </Button>
                    <BackLink link="/vacancies" />
                </Form.Group>
            </Form>
        </FormWrapper>
    </div>;
}

export default VacancyForm;
