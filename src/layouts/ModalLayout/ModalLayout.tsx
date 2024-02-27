import React from 'react';
import { useTranslation } from 'react-i18next';
import { CloseIcon } from '@src/components';
import { useOutsideClick } from '@src/hooks';
import styles from './styles.module.sass';
import { createPortal } from 'react-dom';

interface IModalLayout {
    title?: string;
    titleSpan?: string;
    children: React.ReactNode;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isUseClickOutside?: boolean;
    containerClassName?: string;
    setIsMainGridDraggable?: React.Dispatch<React.SetStateAction<boolean>>; // This prop for disable draggable in main Grid Layout
}

interface IModalPortal {
    children: React.ReactNode;
}
// This component for render modal portal in body element
const ModalPortal: React.FC<IModalPortal> = props => {
    const { children } = props;
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        return null;
    }
    return createPortal(children, modalRoot);
};

export const ModalLayout: React.FC<IModalLayout> = props => {
    const { t } = useTranslation();

    const modalRef = React.useRef<HTMLDivElement>(null);

    const {
        children,
        title,
        setIsModalOpen,
        titleSpan,
        isUseClickOutside,
        containerClassName,
        setIsMainGridDraggable,
    } = props;

    const handleCloseModal = () => {
        setIsModalOpen(prev => !prev);
        // this dispatch for disable enable draggable if modal close
        if (setIsMainGridDraggable) {
            setIsMainGridDraggable(true);
            console.log('true', setIsMainGridDraggable);
        }
    };

    if (!isUseClickOutside) {
        useOutsideClick(modalRef, setIsModalOpen);
    }

    return (
        <ModalPortal>
            <div className={styles.root}>
                <div
                    className={`${styles.modalContainer} ${
                        containerClassName ?? ''
                    }`}
                    ref={modalRef}
                >
                    {title && (
                        <p className={styles.title}>
                            {title}
                            {titleSpan && <span>{` ${titleSpan}`}</span>}
                        </p>
                    )}
                    <button
                        title={t('buttons.close')}
                        className={styles.closeBtn}
                        onClick={handleCloseModal}
                    >
                        <CloseIcon />
                    </button>
                    {children}
                </div>
            </div>
        </ModalPortal>
    );
};
