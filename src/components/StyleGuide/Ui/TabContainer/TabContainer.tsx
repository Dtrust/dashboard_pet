import React from 'react';
import styles from './styles.module.sass';

interface ITabContainer {
    className?: string;
    children: React.ReactNode;
}

export const TabContainer: React.FC<ITabContainer> = props => {
    const { className, children } = props;

    return (
        <div className={`${styles.root} ${className ?? ''}`}>{children}</div>
    );
};
