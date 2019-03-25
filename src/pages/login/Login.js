// @flow
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import PageTitle from 'components/page_title';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSignInAlt } from 'react-icons/fa';

const LoginPage = ({ submitHandler, token }) => {
    if (token) {
        return <Redirect to="/products" />
    }
    return <div className="login-page">
        <PageTitle>Авторизация</PageTitle>
        <FormWrapper size="narrow">
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Имя пользователя" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Пароль" />
                </Form.Group>
                <Form.Group>
                    <Button variant="success" type="submit">
                        <FaSignInAlt /> Войти
                    </Button>
                </Form.Group>
            </Form>
        </FormWrapper>
    </div>;
};

export default LoginPage;