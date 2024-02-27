import React from 'react';
import styles from './styles.module.sass';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { usersData } from '@src/components/AccessSettings/AccessSettingsTable/tempData';
import './devExtremeCustom.sass';
import { CheckBox } from '@src/components';

export const AccessSettingsTable: React.FC = props => {
    const [checked, setChecked] = React.useState<boolean>(false);

    const handleCheckBoxChange = () => {
        setChecked(prev => !prev);
        console.log('checked', checked);
    };

    const checkBoxCellTemplate = () => {
        return (
            <div className={styles.cell}>
                <CheckBox
                    label={''}
                    isChecked={checked}
                    onChange={handleCheckBoxChange}
                />
            </div>
        );
    };

    return (
        <div className={`container ${styles.root}`}>
            <div className={styles.content}>
                <DataGrid
                    id="usersData"
                    dataSource={usersData}
                    columnAutoWidth={true}
                    showRowLines={true}
                    showBorders={true}
                    keyExpr="id"
                    sorting={{ mode: 'none' }}
                    height={620}
                    className={styles.table}
                >
                    <Column
                        dataField="name"
                        caption="Користувачі"
                        width={225}
                        fixed={true}
                        cssClass={styles.fixedCell}
                    />
                    <Column caption="Заявка">
                        <Column caption="Додати замовлення">
                            <Column
                                caption="№ Замовлення"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Клієнт"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Телефон"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Адреса"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                    </Column>
                    {/*<Column caption="..." width={80} />*/}
                    <Column caption="Доставка">
                        <Column caption="Приибув до клієнта">
                            <Column
                                caption="Вчасно"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Час 1"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                        <Column caption="Видано Клієнту">
                            <Column
                                caption="Час 2"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                    </Column>
                    <Column caption="Проблема">
                        <Column caption="Опрацювати і закрити">
                            <Column
                                caption="Результат розгляду"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                    </Column>
                    <Column caption="Заявка">
                        <Column caption="Додати замовлення">
                            <Column
                                caption="№ Замовлення"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Клієнт"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Телефон"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Адреса"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                    </Column>
                    {/*<Column caption="..." width={80} />*/}
                    <Column caption="Доставка">
                        <Column caption="Приибув до клієнта">
                            <Column
                                caption="Вчасно"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                            <Column
                                caption="Час 1"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                        <Column caption="Видано Клієнту">
                            <Column
                                caption="Час 2"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                    </Column>
                    <Column caption="Проблема">
                        <Column caption="Опрацювати і закрити">
                            <Column
                                caption="Результат розгляду"
                                width={160}
                                cellRender={checkBoxCellTemplate}
                            />
                        </Column>
                    </Column>
                </DataGrid>
            </div>
        </div>
    );
};
