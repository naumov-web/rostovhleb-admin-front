// @flow
import * as React from 'react';
import EditItemLink from 'components/edit_item_link';

const TranslatesTable = ({ items }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Системное наименование</th>
                <th>Текст на русском языке</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {items.map(
                (item, index) => {
                    return <tr key={index}>
                        <td>
                            {item.system_name}
                        </td>
                        <td>
                            {item.name_ru}
                        </td>
                        <td className="text-center">
                            <EditItemLink link={`/translates/${item.id}`} />
                        </td>
                    </tr>
                }
            )}
        </tbody>
    </table>
);

export default TranslatesTable;