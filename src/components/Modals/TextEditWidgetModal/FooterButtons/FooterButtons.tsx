import React from 'react';
import { t } from 'i18next';
import styles from './styles.module.sass';
import {
    ButtonWithIcon,
    SaveIcon,
    CancelIcon,
} from '@src/components/StyleGuide';

interface IFooterButtonsProps {
    onSave?: () => void;
    onCancel?: () => void;
}

export const FooterButtons: React.FC<IFooterButtonsProps> = ({
    onSave,
    onCancel,
}) => [
    <ButtonWithIcon
        onClick={onSave}
        key="save"
        className={`${styles.btn} ${styles.saveBtn}`}
        title={t('buttons.save')}
        icon={<SaveIcon width={20} height={20} />}
    />,
    <ButtonWithIcon
        onClick={onCancel}
        key="cancel"
        className={`${styles.btn} ${styles.cancelBtn}`}
        title={t('buttons.cancel')}
        icon={<CancelIcon />}
    />,
];
