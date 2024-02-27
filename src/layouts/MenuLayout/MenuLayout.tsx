import React from 'react';
import styles from './styles.module.sass';
import { useOutsideClick } from '@src/hooks';

interface IMenuLayout {
    children: React.ReactNode;
    className?: string;
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuLayout: React.FC<IMenuLayout> = props => {
    const { children, className, setIsMenuActive } = props;

    // Ref for list element tracks the outside click
    const menuRef = React.useRef<HTMLDivElement>(null);

    // Call custom hook for close modal list by click outside element
    useOutsideClick(menuRef, setIsMenuActive);

    return (
        <div className={`${styles.root} ${className ?? ''}`} ref={menuRef}>
            {children}
        </div>
    );
};
