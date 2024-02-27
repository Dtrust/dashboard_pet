import React from 'react';
import styles from './styles.module.sass';

interface IInput {
    className?: string;
    value: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<IInput> = props => {
    const { className, value, setInputValue } = props;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <input
            className={`${styles.root} ${className ?? ''}`}
            value={value}
            onChange={handleOnChange}
        />
    );
};
