import React from 'react';
import styles from './styles.module.sass';
import { MainMenu } from '@src/components/MainMenu/MainMenu';
import {
    DashboardControlPanel,
    Logo,
    LogOutIcon,
    QuestionIcon,
    SettingsIcon,
    SystemSettings,
} from '@src/components';
import { ButtonIcon } from '@src/components/StyleGuide/Ui/Buttons/ButtonIcon/ButtonIcon';
import { useTranslation } from 'react-i18next';
import { ModalLayout } from '@src/layouts';
import { setWidgets } from '@src/store/dashboardTemp/slice';
import { dashboardWidgets } from '@src/tempData/dashboardWidgets';
import { useAPPDispatch } from '@src/store/store';
import { useSelector } from 'react-redux';
import { selectUserToken } from '@src/store/user/selectors';
// import { getDashboards } from '@src/store/dashboards/actions';
import { selectDashboardWidgets } from '@src/store/dashboardTemp/selectors';
import { tempDashboards } from '@src/store/dashboards/slice';
import { dashboardItems } from '@src/tempData/dashboardItems';

interface IHeader {
    isMainPage?: boolean;
    markerText?: string;
}

export const Header: React.FC<IHeader> = props => {
    // ToDo temporary solution
    const token = useSelector(selectUserToken());
    const widgets = useSelector(selectDashboardWidgets());
    const dispatch = useAPPDispatch();

    React.useEffect(() => {
        // dispatch(getDashboards());
        dispatch(tempDashboards(dashboardItems));

        if (widgets.length === 0) dispatch(setWidgets(dashboardWidgets));
        // ToDo temporary solution
        localStorage.setItem('TOKEN', token);
    }, []);

    const { isMainPage, markerText } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <header className={styles.root}>
                <div className={`container ${styles.headerContent}`}>
                    <Logo textClassName={styles.logo} />
                    <div className={styles.headerMenu}>
                        <MainMenu />
                    </div>
                    <div className={styles.headerWrap}>
                        <ButtonIcon
                            icon={<QuestionIcon />}
                            title={t('header.menu.help')}
                        />
                        <ButtonIcon
                            icon={<SettingsIcon />}
                            onClick={handleOpenModal}
                            title={t('header.menu.settings')}
                        />
                        <ButtonIcon
                            icon={<LogOutIcon />}
                            title={t('header.menu.logout')}
                        />
                    </div>
                </div>
                {!isMainPage && markerText && (
                    <div className={styles.headerMarker}>{markerText}</div>
                )}
            </header>
            {isMainPage && <DashboardControlPanel />}
            {isModalOpen && (
                <ModalLayout
                    title={t('system_settings.title')}
                    setIsModalOpen={setIsModalOpen}
                >
                    <SystemSettings />
                </ModalLayout>
            )}
        </>
    );
};
