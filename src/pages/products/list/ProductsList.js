// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';
import ProductsTable from './ProductsTable';

const ProductsListPage = ({ items, removeProduct }) => {
    return <div className="products-list-page">
        <PageTitle>Продукция</PageTitle>
        <AddItemLink link="/products-add" text="Добавить товар" />
        <div className="table-wrapper">
            <ProductsTable items={items} removeProduct={removeProduct} />
        </div>
    </div>;
};

export default ProductsListPage;
