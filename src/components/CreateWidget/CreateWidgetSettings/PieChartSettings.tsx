import React from 'react';
import styles from '@src/components/CreateWidget/CreateWidgetSettings/styles.module.sass';
import { t } from 'i18next';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';

const options = [
    {
        value: 'courier_1',
        label: 'Кур’єр 1',
    },
    {
        value: 'courier_2',
        label: 'Кур’єр 2',
    },
    {
        value: 'courier_3',
        label: 'Кур’єр 3',
    },
];

export const PieChartSettings: React.FC = props => {
    return (
        <>
            <div className={styles.settingItem}>
                <p className={styles.settingItemTitle}>
                    {t('create_widget.settings.search_label')}
                </p>
                <div className={styles.settingItemWrap}>
                    <div className={styles.settingField}>
                        <span className={styles.settingFieldLabel}>
                            {t('create_widget.settings.field_legend_label')}
                        </span>
                        <SelectList
                            options={options}
                            selectedValue="courier_1"
                        />
                    </div>
                    <div className={styles.settingField}>
                        <span className={styles.settingFieldLabel}>
                            {t('create_widget.settings.field_data_label')}
                        </span>
                        <SelectList
                            options={options}
                            selectedValue="courier_1"
                        />
                    </div>
                    <div className={styles.settingField}>
                        <span className={styles.settingFieldLabel}>
                            {t('create_widget.settings.field_params_label')}
                        </span>
                        <SelectList
                            options={options}
                            selectedValue="courier_1"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
