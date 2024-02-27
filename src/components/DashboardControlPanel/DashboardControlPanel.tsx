import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import {
    ButtonWithIcon,
    ButtonIcon,
    DashboardControlOption,
    DashboardIcon,
    RefreshDataButton,
    SearchInput,
    SelectDashboardGrid,
    SelectDashboardPeriod,
    UnViewIcon,
} from '@src/components';
import { CreateNewDashboard } from '@src/components/DashboardControlPanel/CreateNewDashboard/CreateNewDashboard';
import { useSelector } from 'react-redux';
import {
    selectCurrentDashBoard,
    selectDashboards,
} from '@src/store/dashboards/selectors';

export const DashboardControlPanel: React.FC = () => {
    const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

    const dashboards = useSelector(selectDashboards());

    const currentDashboard = useSelector(selectCurrentDashBoard());

    const { t } = useTranslation();

    const handleOpenSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };
    //temporary solution for preview
    React.useEffect(() => {
        setIsSettingsOpen(!isSettingsOpen);
    }, [])

    return (
        <>
            <div className={styles.root}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.panelWrap}>
                        <ButtonWithIcon
                            title={t('dashboard_control_panel.dashboard_btn')}
                            className={`${styles.btn} ${
                                isSettingsOpen ? styles.active : ''
                            }`}
                            icon={<DashboardIcon />}
                            isBoarded={true}
                            onClick={handleOpenSettings}
                        />
                        <ButtonIcon
                            title={t('dashboard_control_panel.show_btn')}
                            icon={<UnViewIcon />}
                            isBoarded={true}
                        />
                        <div className={'divider'} />
                        <SelectDashboardGrid
                            cellsX={currentDashboard.cellsX}
                            cellsY={currentDashboard.cellsY}
                        />
                        <RefreshDataButton dataStatus={'autoRefresh'} />
                        <SelectDashboardPeriod />
                    </div>
                    <SearchInput />
                </div>
            </div>
            {isSettingsOpen && (
                <div className={styles.settings}>
                    <div className={`container ${styles.settingsWrap}`}>
                        <div className={styles.dashboardSettings}>
                            {dashboards.map((item, index) => (
                                <DashboardControlOption
                                    key={index}
                                    dashboardID={item.id}
                                    dashboardTitle={item.name}
                                    isLocked={true}
                                    isViewed={true}
                                    isShared={true}
                                    isActive={currentDashboard.id === item.id}
                                />
                            ))}
                            {/*<DashboardControlOption*/}
                            {/*    dashboardTitle={'Дашборд 1'}*/}
                            {/*    isLocked={true}*/}
                            {/*    isViewed={true}*/}
                            {/*/>*/}
                            {/*<DashboardControlOption*/}
                            {/*    dashboardTitle={'Дашборд 2'}*/}
                            {/*    isLocked={true}*/}
                            {/*    isViewed={true}*/}
                            {/*    isShared={true}*/}
                            {/*/>*/}
                        </div>
                        <CreateNewDashboard />
                    </div>
                </div>
            )}
        </>
    );
};
