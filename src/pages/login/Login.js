// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSignInAlt } from 'react-icons/fa';

const LoginPage = () => {
    return <div className="login-page">
        <PageTitle>Авторизация</PageTitle>
        <FormWrapper size="narrow">
            <Form>
                <Form.Group>
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control type="text" placeholder="Имя пользователя" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" />
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