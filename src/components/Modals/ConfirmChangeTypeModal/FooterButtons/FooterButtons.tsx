import React from 'react';
import { t } from 'i18next';
import styles from './styles.module.sass';
import {
    ButtonWithIcon,
    CancelIcon,
    ConfirmIcon,
} from '@src/components/StyleGuide';

interface IFooterButtonsProps {
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const FooterButtons: React.FC<IFooterButtonsProps> = ({
    onConfirm,
    onCancel,
}) => [
    <ButtonWithIcon
        onClick={onConfirm}
        key="confirm"
        className={`${styles.btn} ${styles.saveBtn}`}
        title={t('create_widget.confirmModal.Yes')}
        icon={<ConfirmIcon width={22} height={22} />}
    />,
    <ButtonWithIcon
        onClick={onCancel}
        key="cancel"
        className={`${styles.btn} ${styles.cancelBtn}`}
        title={t('create_widget.confirmModal.No')}
        icon={<CancelIcon width={22} height={22} />}
    />
];
