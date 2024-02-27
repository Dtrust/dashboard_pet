import React from 'react';
import { useTranslation } from 'react-i18next';
import { DragDropContext, type DropResult } from 'react-beautiful-dnd';
import styles from '@src/components/CreateWidget/CreateWidgetSettings/styles.module.sass';
import {
    type ColumnType,
    tableWidgetData,
} from '@src/components/CreateWidget/CreateWidgetSettings/CreateTableWidget/tableWidgetData';
import { DroppableColumn } from '@src/components/CreateWidget/CreateWidgetSettings/CreateTableWidget/DroppableColumn/DroppableColumn';

export const TableWidgetSettings: React.FC = props => {
    const { t } = useTranslation();

    const [tableData, setTableData] =
        React.useState<ColumnType[]>(tableWidgetData);

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const startColumn = tableData.find(
            column => column.id === source.droppableId
        );
        const finishColumn = tableData.find(
            column => column.id === destination.droppableId
        );

        if (!startColumn || !finishColumn) {
            return;
        }

        if (startColumn === finishColumn) {
            const newItems = Array.from(startColumn.items);
            const movedItem = newItems.splice(source.index, 1)[0];

            newItems.splice(destination.index, 0, movedItem);

            const updatedStartColumn = {
                ...startColumn,
                items: newItems,
            };

            const newData = tableData.map(column =>
                column.id === updatedStartColumn.id
                    ? updatedStartColumn
                    : column
            );

            setTableData(newData);
        } else {
            const startItems = Array.from(startColumn.items);
            const [movedItem] = startItems.splice(source.index, 1);

            const newStartColumn = {
                ...startColumn,
                items: startItems,
            };

            const finishItems = Array.from(finishColumn.items);
            finishItems.splice(destination.index, 0, movedItem);

            const newFinishColumn = {
                ...finishColumn,
                items: finishItems,
            };

            const newData = tableData.map(column =>
                column.id === newStartColumn.id
                    ? newStartColumn
                    : column.id === newFinishColumn.id
                    ? newFinishColumn
                    : column
            );

            setTableData(newData);
        }
    };

    return (
        <>
            <div className={styles.settingItem}>
                <p className={styles.settingItemTitle}>
                    {t('create_widget.settings.columns')}
                </p>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div
                    className={`${styles.settingItemWrap} ${styles.settingTableWrap}`}
                >
                    {tableData.map((column, index) => (
                        <DroppableColumn
                            key={index}
                            type={column.type}
                            name={column.name}
                            columnID={column.id}
                            draggableItems={column.items}
                        />
                    ))}
                </div>
            </DragDropContext>
        </>
    );
};
