import React from 'react';
import styles from './styles.module.sass';
import { useNavigate } from 'react-router-dom';
import { ButtonIcon, ReturnIcon, SaveIcon, SearchInput } from '@src/components';
import { useTranslation } from 'react-i18next';
import { SelectList } from '@src/components/StyleGuide/Ui/SelectList/SelectList';
import {
    optionsClient,
    optionsScenario,
} from '@src/components/AccessSettings/AccessSettingsControlPanel/tempData';

export const AccessSettingsControlPanel: React.FC = props => {
    const { t } = useTranslation();

    // Navigation for GoBack button
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    return (
        <div className={styles.root}>
            <div className={`container ${styles.content}`}>
                <ButtonIcon
                    className={styles.backBtn}
                    icon={<ReturnIcon />}
                    title={t('buttons.back')}
                    onClick={handleBack}
                />
                <div className={`divider ${styles.divider}`} />
                <div className={styles.settingField}>
                    <span className={styles.settingFieldLabel}>
                        {t('access_settings.client_label')}
                    </span>
                    <SelectList
                        options={optionsClient}
                        selectedValue="courier_control"
                    />
                </div>
                <div className={styles.settingField}>
                    <span className={styles.settingFieldLabel}>
                        {t('access_settings.scenario_label')}
                    </span>
                    <SelectList
                        options={optionsScenario}
                        selectedValue="sc_1"
                    />
                </div>
                <div className={styles.settingField}>
                    <SearchInput />
                </div>
                <ButtonIcon
                    className={styles.saveBtn}
                    icon={<SaveIcon />}
                    title={t('buttons.save')}
                />
            </div>
        </div>
    );
};
