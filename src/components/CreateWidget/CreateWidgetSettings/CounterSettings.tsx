import React from 'react';
import styles from '@src/components/CreateWidget/CreateWidgetSettings/styles.module.sass';
import { t } from 'i18next';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
// import { CreateWidgetSettingItem } from '@src/components/CreateWidget/CreateWidgetSettings/CreateWidgetSettingItem/CreateWidgetSettingItem';
import { ColorPicker, TargetPanel } from '@src/components';

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

export const CounterSettings: React.FC = props => {
    const [targetSwitch, setTargetSwitch] = React.useState<boolean>(false);
    const [isColorChange, setIsColorChange] = React.useState<boolean>(false);

    return (
        <>
            <div className={styles.settingItem}>
                <p className={styles.settingItemTitle}>
                    {t('create_widget.settings.search_label')}
                </p>
                <div className={styles.settingItemWrap}>
                    <div className={styles.settingField} style={{ flex: 1 }}>
                        <span className={styles.settingFieldLabel}>
                            {t('create_widget.settings.field_params_label')}
                        </span>
                        <SelectList
                            options={options}
                            selectedValue="courier_1"
                        />
                    </div>
                    <div className={styles.settingField} style={{ flex: 1 }}>
                        <span className={styles.settingFieldLabel}>
                            {t('create_widget.settings.field_value_label')}
                        </span>
                        <SelectList
                            options={options}
                            selectedValue="courier_1"
                        />
                    </div>
                    <div
                        className={styles.settingField}
                        style={{ flex: 'unset' }}
                    >
                        <span className={styles.settingFieldLabel} />
                        <ColorPicker />
                    </div>
                </div>
            </div>
            <TargetPanel
                isActive={targetSwitch}
                onChange={setTargetSwitch}
                isCreateCounterWidgetPage={true}
                isColorChange={isColorChange}
                onColorChange={setIsColorChange}
            />
        </>
    );
};
