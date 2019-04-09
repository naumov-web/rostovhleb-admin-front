// @flow
import * as React from 'react';
import EditItemLink from 'components/edit_item_link';
import RemoveItemButton from 'components/remove_item_button';

const NewsTable = ({ items }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>Заголовок</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {items.map(
                (item, index) => (<tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name_ru}</td>
                    <td className="text-center">
                        <EditItemLink link={`/news/${item.id}`} />
                    </td>
                    <td className="text-center">
                        <RemoveItemButton onClickHandler={() => {
                            if (window.confirm('Вы уверены, что хотите удалить новость?')) {

                            }
                        }} />
                    </td>
                </tr>)
            )}
        </tbody>
    </table>
);

export default NewsTable;