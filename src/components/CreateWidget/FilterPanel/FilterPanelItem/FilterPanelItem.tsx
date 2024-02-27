import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import {
    ButtonIcon,
    GroupPlusIcon,
    Input,
    MinusIcon,
    PlusIcon,
    Switcher,
} from '@src/components';

const options = [
    {
        value: 'all',
        label: 'Усі',
    },
    {
        value: 'not_all',
        label: 'Деякі',
    },
    {
        value: 'some',
        label: 'Будь-які',
    },
];

interface IFilterPanelItem {
    advancedMode: boolean;
}

export const FilterPanelItem: React.FC<IFilterPanelItem> = props => {
    const { advancedMode } = props;

    const { t } = useTranslation();

    const [rowInputValue, setRowInputValue] = React.useState<string>('Test');
    const [rowSwitch, setRowSwitch] = React.useState<boolean>(false);

    return (
        <div className={styles.root}>
            <SelectList
                className={styles.select}
                options={options}
                selectedValue="all"
                isTransparentBg={true}
            />
            <SelectList
                className={styles.select}
                options={options}
                selectedValue="all"
                isTransparentBg={true}
            />
            <Input value={rowInputValue} setInputValue={setRowInputValue} />
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
            {advancedMode && (
                <ButtonIcon
                    className={styles.actionBtn}
                    icon={<GroupPlusIcon />}
                    title={t('create_widget.settings.filter.advanced_mode')}
                />
            )}
            <Switcher value={rowSwitch} onChange={setRowSwitch} />
        </div>
    );
};
