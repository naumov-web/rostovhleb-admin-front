// @flow
import * as React from 'react';
import EditItemLink from 'components/edit_item_link';
import RemoveItemButton from 'components/remove_item_button';

const VacanciesTable = ({ items, removeVacancy }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>Наименование</th>
                <th>Включена</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {items.map(
                (item, index) => (<tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name_ru}</td>
                    <td>
                        <input type="checkbox" onChange={() => null} checked={item.is_enabled} />
                    </td>
                    <td>
                        <EditItemLink link={`/vacancies/${item.id}`} />
                    </td>
                    <td>
                        <RemoveItemButton onClickHandler={() => removeVacancy(item.id)} />
                    </td>
                </tr>)
            )}
        </tbody>
    </table>
);

export default VacanciesTable;
