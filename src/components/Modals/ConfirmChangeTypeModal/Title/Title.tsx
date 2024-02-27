import React from 'react';
import { t } from 'i18next';
import styles from './styles.module.sass';

export const Title = () => (
    <div className={styles.modalTitle}>
        <span>{t('create_widget.confirmModal.title')}</span>
        <p className={styles.widgetType}>{t('create_widget.confirmModal.danger')}</p>
    </div>
);
