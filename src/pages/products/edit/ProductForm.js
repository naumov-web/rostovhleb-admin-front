// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import BackLink from 'components/back_link';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaCheck } from 'react-icons/fa';

const ProductForm = () => {
    const title = 'Добавить товар';
    return <div className="product-form-page">
        <PageTitle>{ title }</PageTitle>
        <FormWrapper>
            <Form>
                <Form.Group>
                    <Form.Label>Наименование товара на русском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Наименование товара на русском языке" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование товара на английском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Наименование товара на английском языке" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование товара на китайском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Наименование товара на китайском языке" 
                    />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Описание товара на русском языке</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Button variant="success" type="submit">
                        <FaCheck /> Сохранить
                    </Button>
                    <BackLink link="/products" />
                </Form.Group>
            </Form>
        </FormWrapper>
    </div>;
};

export default ProductForm;