import React from 'react';
import styles from './styles.module.sass';

interface IButtonIcon {
    className?: string;
    style?: React.CSSProperties;
    icon: React.ReactNode;
    title: string;
    disabled?: boolean;
    isBoarded?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const ButtonIcon: React.FC<IButtonIcon> = props => {
    const { className, style, icon, title, disabled, isBoarded, onClick } =
        props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`${styles.root} ${isBoarded ? 'boarded' : ''} ${
                className ?? ''
            }`}
            style={style}
            title={title}
            disabled={disabled ?? false}
            onClick={handleClick}
        >
            {icon}
        </button>
    );
};
