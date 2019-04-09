// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import BackLink from 'components/back_link';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RemoveImageButton from 'components/remove_image_button';
import { FaCheck } from 'react-icons/fa';

import './style.css';

const NewsForm = ({ 
    onSubmit,
    new_files, 
    onChangeFile,
    removeNewFile 
}) => {
    const title = 'Добавить новость';
    return <div className="news-form-page">
        <PageTitle>{ title }</PageTitle>
        <FormWrapper>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Заголовок на русском языке</Form.Label>
                    <Form.Control 
                        name="name_ru" 
                        required="required"
                        placeholder="Заголовок на русском языке" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Заголовок на английском языке</Form.Label>
                    <Form.Control 
                        name="name_en" 
                        placeholder="Заголовок на английском языке" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Заголовок на китайском языке</Form.Label>
                    <Form.Control 
                        name="name_cn" 
                        placeholder="Заголовок на китайском языке" />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Содержимое на русском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_ru" 
                        required="required"
                        placeholder="Содержимое на русском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Содержимое на английском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_en" 
                        placeholder="Содержимое на английском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Содержимое на китайском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_en" 
                        placeholder="Содержимое на китайском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Фотографии новости</Form.Label>
                    <div className="photos-list">
                        {
                            new_files.map(
                                (item, index) => {
                                    return <div key={'new_file' + index}>
                                            <img src={item.content} alt="" />
                                            <RemoveImageButton onClickHandler={() => removeNewFile(index)} />
                                        </div>;
                                }
                            )
                        }
                    </div>
                    <div>
                        <input type="file" onChange={(e) => onChangeFile(e)} />
                    </div>
                </Form.Group>
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
