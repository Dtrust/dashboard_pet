import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputCount, WidgetsIcon } from '@src/components';
import styles from '@src/components/SystemSettings/styles.module.sass';

export const WidgetSetting: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.item}>
            <div className={styles.itemIcon}>
                <WidgetsIcon />
            </div>
            <div className={styles.itemWrap}>
                <p className={styles.itemTitle}>
                    {t('system_settings.widgets_title')}
                </p>
                <p className={styles.itemValue}>
                    {t('system_settings.widgets_subtitle')}
                </p>
            </div>
            <InputCount value={1} maxValue={4} />
        </div>
    );
};
