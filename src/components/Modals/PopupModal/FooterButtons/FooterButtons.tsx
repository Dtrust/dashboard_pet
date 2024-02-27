import React from 'react';
import { t } from 'i18next';
import styles from './styles.module.sass';
import {
    ButtonWithIcon,
    CancelIcon,
} from '@src/components/StyleGuide';

interface IFooterButtonsProps {
    onCancel?: () => void;
}

export const FooterButtons: React.FC<IFooterButtonsProps> = ({
    onCancel,
}) => [
    <ButtonWithIcon
        onClick={onCancel}
        key="cancel"
        className={`${styles.btn} ${styles.cancelBtn}`}
        title={t('widgets.popup.close')}
        icon={<CancelIcon width={22} height={22} />}
    />
];
