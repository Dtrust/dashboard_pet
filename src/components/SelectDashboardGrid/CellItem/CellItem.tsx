import React from 'react';
import styles from './styles.module.sass';

interface ICell {
    active: boolean;
    highlighted: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
}

export const CellItem: React.FC<ICell> = props => {
    const { active, highlighted, onClick, onMouseEnter } = props;

    return (
        <div
            className={`${styles.root} ${active ? styles.active : ''} ${
                highlighted ? styles.highlighted : ''
            }`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        />
    );
};
