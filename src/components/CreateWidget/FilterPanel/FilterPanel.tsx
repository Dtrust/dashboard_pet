import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import { FilterIcon, Switcher } from '@src/components';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import { FilterPanelItem } from '@src/components/CreateWidget/FilterPanel/FilterPanelItem/FilterPanelItem';

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

export const FilterPanel: React.FC = props => {
    const { t } = useTranslation();

    const [filterActive, setFilterActive] = React.useState<boolean>(false);
    const [advancedMode, setAdvancedMode] = React.useState<boolean>(false);

    return (
        <div className={styles.root}>
            <div className={styles.panel}>
                <div className={styles.titleWrap}>
                    <div className={styles.icon}>
                        <FilterIcon />
                    </div>
                    <p className={styles.title}>
                        {t('create_widget.settings.filter.title')}
                    </p>
                    <Switcher value={filterActive} onChange={setFilterActive} />
                </div>
                {filterActive && (
                    <div className={styles.condition}>
                        <div className={styles.conditionWrap}>
                            <div className={`divider ${styles.divider}`} />
                            <span className={styles.conditionTitle}>
                                {t('create_widget.settings.filter.condition_1')}
                            </span>
                            <SelectList
                                className={styles.select}
                                options={options}
                                selectedValue="all"
                                isFilter={true}
                            />
                            <span className={styles.conditionTitle}>
                                {t('create_widget.settings.filter.condition_2')}
                            </span>
                        </div>
                        <div className={styles.advancedMode}>
                            <span className={styles.conditionTitle}>
                                {t(
                                    'create_widget.settings.filter.advanced_mode'
                                )}
                            </span>
                            <Switcher
                                value={advancedMode}
                                onChange={setAdvancedMode}
                            />
                        </div>
                    </div>
                )}
            </div>
            {filterActive && (
                <div className={styles.filterContent}>
                    <FilterPanelItem advancedMode={advancedMode} />
                    <FilterPanelItem advancedMode={advancedMode} />
                    <div
                        className={`${styles.filterContentRow} ${styles.group}`}
                    >
                        <p className={styles.groupTitle}>
                            {t('create_widget.settings.filter.group')}
                        </p>
                        <div className={styles.groupCondition}>
                            <span className={styles.conditionTitle}>
                                {t('create_widget.settings.filter.condition_1')}
                            </span>
                            <SelectList
                                className={`filter-group__select ${styles.select}`}
                                options={options}
                                selectedValue="all"
                                isFilter={true}
                            />
                            <span className={styles.conditionTitle}>
                                {t('create_widget.settings.filter.condition_2')}
                            </span>
                        </div>
                        <div className={styles.groupContent}>
                            <FilterPanelItem advancedMode={advancedMode} />
                            <FilterPanelItem advancedMode={advancedMode} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
