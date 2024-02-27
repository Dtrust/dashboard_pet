import React from 'react';
import styles from './styles.module.sass';
import { useTranslation } from 'react-i18next';
import { CreateWidgetTypes, PlusIcon } from '@src/components';

export const EmptyWidget: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            <div className={styles.plusIcon}>
                <PlusIcon />
            </div>
            <p className={styles.title}>{t('widgets.empty.add')}</p>
            <CreateWidgetTypes className={styles.row} />
        </div>
    );
};
