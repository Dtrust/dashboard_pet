import React from 'react';
import styles from './styles.module.sass';

interface IButtonPrimary {
    icon?: React.ReactNode;
    className?: string;
    title: string;
    type: 'primary' | 'transparent' | 'red';
    disabled?: boolean;
    onClick: () => void;
}

export const ButtonPrimary: React.FC<IButtonPrimary> = props => {
    const { onClick, icon, className, title, type, disabled } = props;

    const styleType = () => {
        switch (type) {
            case 'primary':
                return styles.primary;
            case 'transparent':
                return styles.transparent;
            case 'red':
                return styles.red;
        }
    };

    const handleClick = () => {
        onClick();
    };

    return (
        <button
            className={`${styles.root} ${styleType()} ${className ?? ''}`}
            disabled={disabled}
            title={title}
            onClick={handleClick}
        >
            {icon}
            <span>{title}</span>
        </button>
    );
};
