import React from 'react';
import styles from './styles.module.sass';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import { CreateWidgetSettingItem } from '@src/components/CreateWidget/CreateWidgetSettings/CreateWidgetSettingItem/CreateWidgetSettingItem';
import { t } from 'i18next';

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

export const LineChartSettings = () => (
    <>
        <div className={styles.settingItem}>
            <p className={styles.settingItemTitle}>
                {t('create_widget.settings.axis_x')}
            </p>
            <div className={styles.settingItemWrap}>
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
                        {t('create_widget.settings.field_select_label')}
                    </span>
                    <SelectList
                        options={options}
                        selectedValue="courier_1"
                    />
                </div>
                <div
                    className={`${styles.settingField} ${styles.disabled}`}
                >
                    <span className={styles.settingFieldLabel}>
                        {t('create_widget.settings.field_group_label')}
                    </span>
                    <SelectList
                        options={options}
                        selectedValue="courier_1"
                    />
                </div>
            </div>
        </div>
        <div className={styles.settingItem}>
            <p className={styles.settingItemTitle}>
                {t('create_widget.settings.axis_y')}
            </p>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <td>
                            {t('create_widget.settings.field_data_label')}
                        </td>
                        <td>
                            {t(
                                'create_widget.settings.field_function_label'
                            )}
                        </td>
                        <td>
                            {t('create_widget.settings.field_color_label')}
                        </td>
                        <td>
                            {t('create_widget.settings.field_target_label')}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <CreateWidgetSettingItem />
                    <CreateWidgetSettingItem />
                </tbody>
            </table>
        </div>
    </>
);
