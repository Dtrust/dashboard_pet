import React from 'react';
import styles from './styles.module.sass';

/**
 * Interface for ButtonWithIcon
 * @interface IButtonWithIcon
 * @param {string} className - Optional class name for the button
 * @param {React.CSSProperties} style - Optional CSS properties for the button
 * @param {React.ReactNode} icon - Optional icon for the button
 * @param {string} title - Required title for the button
 * @param {boolean} disabled - Optional disabled status for the button
 */

interface IButtonWithIcon {
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    title: string;
    disabled?: boolean;
    isActive?: boolean;
    isBoarded?: boolean;
    onClick?: () => void;
}

export const ButtonWithIcon: React.FC<IButtonWithIcon> = props => {
    const {
        className,
        style,
        icon,
        title,
        disabled,
        isActive,
        isBoarded,
        onClick,
    } = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`${styles.root} ${isBoarded ? 'boarded' : ''} ${
                className ?? ''
            } ${isActive ? styles.active : ''}`}
            style={style ?? {}}
            title={title}
            disabled={disabled}
            onClick={handleClick}
        >
            {icon}
            <span>{title}</span>
        </button>
    );
};
