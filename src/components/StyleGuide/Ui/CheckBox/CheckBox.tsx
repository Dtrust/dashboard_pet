import React from 'react';
import { ApplyIcon } from '@src/components';
import styles from './styles.module.sass';

interface ICheckBox {
    label: string;
    isChecked: boolean;
    onChange: () => void;
}

export const CheckBox: React.FC<ICheckBox> = props => {
    const { label, isChecked, onChange } = props;

    return (
        <label className={styles.root}>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span className={styles.icon}>
                <ApplyIcon />
            </span>
            <span className={styles.label}>{label}</span>
        </label>
    );
};
