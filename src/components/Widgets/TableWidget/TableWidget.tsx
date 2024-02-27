import React from 'react';
import { WidgetLayout } from '@src/layouts';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { type IWidget } from '../@types';
import DataTable, { createTheme } from 'react-data-table-component';
import { emptyWidgets } from '@src/components/CreateWidget/CreateWidgetPreview/consts';

interface ITableData {
    time: string;
    courier: string;
    on_time: string;
    key: string;
}

const emptyTableData: ITableData[] = [
    {
        time: '',
        courier: '',
        on_time: '',
        key: '',
    },
];

export const TableWidget: React.FC<IWidget> = props => {
    const {
        id,
        isCreatePage,
        title,
        type,
        data = emptyTableData,
        setIsMainGridDraggable,
    } = props;

    const { t } = useTranslation();

    const options = [
        {
            value: 'today',
            label: 'Сьогодні',
        },
        {
            value: 'yesterday',
            label: 'Вчора',
        },
    ];
    const columns = [
        {
            name: (
                <div className={styles.text_table}>
                    {t('widgets.table.filled')}
                </div>
            ),
            selector: (row: { time: string }) => row.time,
            cell: (row: { time: string }) => (
                <div className={styles.table_row}>
                    <div className={styles.text_time}>{row.time}</div>
                </div>
            ),
        },
        {
            name: (
                <div className={styles.text_table}>
                    {t('widgets.table.courier')}
                </div>
            ),
            selector: (row: { courier: string }) => row.courier,
            cell: (row: { courier: string }) => (
                <div className={styles.table_row}>
                    <div className={styles.text_courier}>{row.courier}</div>
                </div>
            ),
        },
        {
            name: (
                <div className={styles.text_table}>
                    {t('widgets.table.delivered')}
                </div>
            ),
            selector: (row: { on_time: string }) => row.on_time,
            cell: (row: { on_time: string }) => (
                <div className={styles.table_row}>
                    <div
                        style={{
                            backgroundColor:
                                row.on_time === t('widgets.table.on_time') ||
                                row.on_time === 'Вчасно'
                                    ? 'green'
                                    : 'red',
                            width: 8,
                            height: 8,
                            borderRadius: '100%',
                            marginRight: 6,
                        }}
                    />
                    <div className={styles.text_on_time}>{row.on_time}</div>
                </div>
            ),
        },
    ];

    /*    const data = [
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 1',
            on_time: t('widgets.table.on_time'),
            key: '1',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 2',
            on_time: t('widgets.table.not_in_time'),
            key: '2',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 3',
            on_time: t('widgets.table.on_time'),
            key: '3',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 4',
            on_time: t('widgets.table.not_in_time'),
            key: '4',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 5',
            on_time: t('widgets.table.on_time'),
            key: '5',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 6',
            on_time: t('widgets.table.not_in_time'),
            key: '6',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 1',
            on_time: t('widgets.table.on_time'),
            key: '1',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 2',
            on_time: t('widgets.table.not_in_time'),
            key: '2',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 3',
            on_time: t('widgets.table.on_time'),
            key: '3',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 4',
            on_time: t('widgets.table.not_in_time'),
            key: '4',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 5',
            on_time: t('widgets.table.on_time'),
            key: '5',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 6',
            on_time: t('widgets.table.not_in_time'),
            key: '6',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 1',
            on_time: t('widgets.table.on_time'),
            key: '1',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 2',
            on_time: t('widgets.table.not_in_time'),
            key: '2',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 3',
            on_time: t('widgets.table.on_time'),
            key: '3',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 4',
            on_time: t('widgets.table.not_in_time'),
            key: '4',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 5',
            on_time: t('widgets.table.on_time'),
            key: '5',
        },
        {
            time: '11.03.2022 12:45',
            courier: t('widgets.table.courier') + ' 6',
            on_time: t('widgets.table.not_in_time'),
            key: '6',
        },
    ];
 */
    createTheme('solarized', {
        background: {
            default: 'var(--color--bg--table)',
        },
        divider: {
            default: 'var(--color--stroke)',
        },
    });

    console.log('DataTable', data);

    return (
        <WidgetLayout
            widgetID={id}
            optionsPeriod={options}
            selectedPeriod={'today'}
            time={'12:45'}
            isCreatePage={isCreatePage ?? false}
            setIsMainGridDraggable={setIsMainGridDraggable}
            emptyWidget={{ ...emptyWidgets[type], title }}
        >
            <div className={styles.root}>
                <DataTable
                    columns={columns}
                    data={data as ITableData[]}
                    fixedHeader
                    dense
                    className={styles.table}
                    theme="solarized"
                />
            </div>
        </WidgetLayout>
    );
};
