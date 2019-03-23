// @flow
import * as React from 'react';
import PageTitle from 'components/page_title';
import AddItemLink from 'components/add_item_link';

const ProductsListPage = () => {
    return <div className="products-list-page">
        <PageTitle>Продукция</PageTitle>
        <AddItemLink link="/products/add" text="Добавить товар" />
    </div>;
};

export default ProductsListPage;
