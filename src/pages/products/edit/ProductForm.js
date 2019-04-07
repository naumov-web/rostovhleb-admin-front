// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import BackLink from 'components/back_link';
import FormWrapper from 'components/form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RemoveImageButton from 'components/remove_image_button';
import { FaCheck } from 'react-icons/fa';

const ProductForm = ({ 
    onSubmit, 
    onChangeFile, 
    removeNewFile, 
    removeFile, 
    openedItem, 
    new_files, 
    categories 
}) => {
    const title = openedItem.id ? 'Редактировать товар' : 'Добавить товар';
    return <div className="product-form-page">
        <PageTitle>{ title }</PageTitle>
        <FormWrapper>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Наименование товара на русском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name_ru"
                        defaultValue={openedItem.name_ru || ''}
                        required="required"
                        placeholder="Наименование товара на русском языке" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование товара на английском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name_en"
                        defaultValue={openedItem.name_en || ''}
                        placeholder="Наименование товара на английском языке" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Наименование товара на китайском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name_cn"
                        defaultValue={openedItem.name_cn || ''}
                        placeholder="Наименование товара на китайском языке" 
                    />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Подзаголовок товара на русском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="sub_name_ru"
                        defaultValue={openedItem.sub_name_ru || ''}
                        placeholder="Подзаголовок товара на русском языке" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Подзаголовок товара на английском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="sub_name_en"
                        defaultValue={openedItem.sub_name_en || ''}
                        placeholder="Подзаголовок товара на английском языке" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Подзаголовок товара на китайском языке</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="sub_name_cn"
                        defaultValue={openedItem.sub_name_cn || ''}
                        placeholder="Подзаголовок товара на китайском языке" 
                    />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Описание товара на русском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_ru" 
                        defaultValue={openedItem.description_ru || ''}
                        required="required"
                        placeholder="Описание товара на русском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание товара на английском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_en" 
                        defaultValue={openedItem.description_en || ''}
                        placeholder="Описание товара на английском языке"
                        rows="7" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание товара на китайском языке</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description_cn" 
                        defaultValue={openedItem.description_cn || ''}
                        placeholder="Описание товара на китайском языке"
                        rows="7" />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Вес (в граммах)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="weight"
                        defaultValue={openedItem.weight || ''}
                        placeholder="Вес (в граммах)" 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Срок годности (в днях)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="days_available"
                        defaultValue={openedItem.weight || ''}
                        placeholder="Срок годности (в днях)" 
                    />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Категория товара</Form.Label>
                    <Form.Control name="category_id" defaultValue={openedItem.category_id || ''} as="select">
                        {
                            categories.map(
                                (item, index) => (
                                    <option key={'category_' + index} value={item.id}>{item.name}</option>
                                )
                            )
                        }
                    </Form.Control>
                </Form.Group>
                <hr />
                <Form.Group className="checkbox-group">
                    <Form.Label>
                        <input type="checkbox" 
                                name="is_new" 
                                defaultChecked={openedItem.is_new}
                                value="1" />
                        Новинка
                    </Form.Label>
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>Фотографии товара</Form.Label>
                    <div className="photos-list">
                        {
                            openedItem.files && 
                            openedItem.files.map(
                                (item, index) => {
                                    return <div key={'new_file' + index}>
                                            <img src={item.url} alt="" />
                                            <RemoveImageButton onClickHandler={() => removeFile(index)} />
                                        </div>;
                                }
                            )
                        }
                    </div>
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
                    <BackLink link="/products" />
                </Form.Group>
            </Form>
        </FormWrapper>
    </div>;
};

export default ProductForm;