import React from 'react';
import { t } from 'i18next';
import styles from './styles.module.sass';

interface ITitleProps {
    title: string;
}

export const Title: React.FC<ITitleProps> = ({ title }) => (
    <div className={styles.modalTitle}>
        <span>{t('widgets.text.modal.title')}</span>
        <span className={styles.widgetTitle}> {title}</span>
    </div>
);
