import React from 'react';
import { useTranslation } from 'react-i18next';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import {
    ButtonIcon,
    ColorPicker,
    MinusIcon,
    PlusIcon,
    Switcher,
    TargetPanel,
} from '@src/components';
import styles from './styles.module.sass';

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

export const CreateWidgetSettingItem: React.FC = props => {
    const { t } = useTranslation();

    const [targetSwitch, setTargetSwitch] = React.useState<boolean>(false);
    const [dataSwitch, setDataSwitch] = React.useState<boolean>(false);

    return (
        <tr className={styles.root}>
            <td style={{ width: '22%' }}>
                <div>
                    <SelectList options={options} selectedValue="courier_1" />
                </div>
            </td>
            <td style={{ width: '22%' }}>
                <div>
                    <SelectList options={options} selectedValue="courier_1" />
                </div>
            </td>
            <td>
                <div>
                    <ColorPicker />
                </div>
            </td>
            <td>
                <div>
                    <TargetPanel
                        isActive={targetSwitch}
                        onChange={setTargetSwitch}
                    />
                    <div className={styles.actionsWrap}>
                        <ButtonIcon
                            className={`${styles.actionBtn} ${styles.minusBtn}`}
                            icon={<MinusIcon />}
                            title={t('create_widget.settings.btn.minus')}
                        />
                        <ButtonIcon
                            className={styles.actionBtn}
                            icon={<PlusIcon />}
                            title={t('create_widget.settings.btn.plus')}
                        />
                    </div>
                    <Switcher value={dataSwitch} onChange={setDataSwitch} />
                </div>
            </td>
        </tr>
    );
};
