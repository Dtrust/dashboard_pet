import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './styles.module.sass';

export interface IDraggableItem {
    id: string;
    index: number;
    content: string;
}

export const DraggableItem: React.FC<IDraggableItem> = props => {
    const { id, index, content } = props;

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`${styles.root} ${
                        snapshot.isDragging ? styles.dragging : ''
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {content}
                </div>
            )}
        </Draggable>
    );
};
