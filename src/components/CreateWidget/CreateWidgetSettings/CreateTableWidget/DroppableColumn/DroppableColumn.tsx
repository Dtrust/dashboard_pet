import React from 'react';
import styles from './styles.module.sass';
import { DraggableItem } from '@src/components/CreateWidget/CreateWidgetSettings/CreateTableWidget/DruggableItem/DraggableItem';
import { Droppable, type DroppableId } from 'react-beautiful-dnd';

interface IDroppableColumn {
    name: string;
    type: 'available' | 'inUse';
    columnID: DroppableId;
    draggableItems: any[];
}

export const DroppableColumn: React.FC<IDroppableColumn> = props => {
    const { name, columnID, draggableItems, type } = props;

    return (
        <div className={styles.root}>
            <p className={styles.tableBlockTitle}>{name}</p>
            <div
                className={`${styles.tableBlockData} ${
                    type === 'inUse' ? styles.inUse : ''
                }`}
            >
                <Droppable droppableId={columnID}>
                    {provided => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {draggableItems.map((item, index) => (
                                <DraggableItem
                                    key={item.id}
                                    id={item.id}
                                    index={index}
                                    content={item.content}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};
