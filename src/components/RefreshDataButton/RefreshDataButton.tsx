import React from 'react';
import { Progress } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    CloudServerIcon,
    RefreshButtonModal,
    RefreshIcon,
    SettingsIcon,
} from '@src/components';
import styles from './styles.module.sass';

interface IRefreshDataButton {
    dataStatus: string;
}

export const RefreshDataButton: React.FC<IRefreshDataButton> = props => {
    const { dataStatus } = props;

    const { t } = useTranslation();

    // State for settings modal
    const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

    const handleSettingsModal = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    const renderIcon = () => {
        switch (dataStatus) {
            case 'default':
                return <RefreshIcon />;
            case 'autoRefresh':
                return (
                    <div className={`${styles.iconWrap} ${styles.progress}`}>
                        <Progress
                            type="circle"
                            percent={50}
                            size={40}
                            className={styles.progressCircle}
                            strokeColor={'#437ec3'}
                            strokeWidth={10}
                            format={percent => percent}
                        />
                    </div>
                );
            case 'server':
                return (
                    <div className={`${styles.iconWrap} ${styles.serverIcon}`}>
                        <CloudServerIcon />
                    </div>
                );
        }
    };

    return (
        <>
            <div
                className={`${styles.root} ${
                    dataStatus !== 'default' ? styles.notDefault : ''
                }`}
                title={t('dashboard_control_panel.refresh_btn')}
            >
                {renderIcon()}
                <span>{t('dashboard_control_panel.refresh_btn')}</span>
                <button
                    title={t('dashboard_control_panel.settings_btn')}
                    className={styles.settingsBtn}
                    onClick={handleSettingsModal}
                >
                    <SettingsIcon />
                </button>
            </div>
            {isSettingsOpen && (
                <RefreshButtonModal setModalOpen={setIsSettingsOpen} />
            )}
        </>
    );
};
