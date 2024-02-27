import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.sass';
import {
    AnalyticsIcon,
    ButtonWithIcon,
    DashboardIcon,
    MailIcon,
    TasksIcon,
} from '@src/components';

export const MainMenu: React.FC = props => {
    const { t } = useTranslation();
    return (
        <nav className={styles.root}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <ButtonWithIcon
                        title={t('header.menu.notifications')}
                        icon={<MailIcon />}
                    />
                </li>
                <li className={styles.item}>
                    <ButtonWithIcon
                        title={t('header.menu.tasks')}
                        icon={<TasksIcon />}
                    />
                </li>
                <li className={styles.item}>
                    <ButtonWithIcon
                        title={t('header.menu.analytics')}
                        icon={<AnalyticsIcon />}
                    />
                </li>
                <li className={styles.item}>
                    <ButtonWithIcon
                        title={t('header.menu.dashboard')}
                        icon={<DashboardIcon />}
                        isActive={true}
                    />
                </li>
            </ul>
        </nav>
    );
};
