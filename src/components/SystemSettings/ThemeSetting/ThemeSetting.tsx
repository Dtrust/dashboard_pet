import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArrowRoundedIcon,
    DarkThemeIcon,
    LightThemeIcon,
} from '@src/components';
import type { Theme } from '@src/hooks/useTheme/types';
import { useTheme } from '@src/hooks';
import styles from '@src/components/SystemSettings/styles.module.sass';

export const ThemeSetting: React.FC = () => {
    const { t } = useTranslation();

    const themes = [
        { value: 'light', title: t('system_settings.theme_light') },
        { value: 'dark', title: t('system_settings.theme_dark') },
    ];

    const [activeSubMenu, setActiveSubMenu] = React.useState<boolean>(false);

    const storageTheme = localStorage.getItem('data-theme') as Theme;

    const [theme, handleChangeTheme] = useTheme(storageTheme ?? 'light');

    const renderOptionIcon = (value: Theme) => {
        switch (value) {
            case 'light':
                return <LightThemeIcon />;
            case 'dark':
                return <DarkThemeIcon />;
        }
    };

    return (
        <div
            className={styles.item}
            onMouseEnter={() => setActiveSubMenu(!activeSubMenu)}
            onMouseLeave={() => setActiveSubMenu(!activeSubMenu)}
        >
            <div className={styles.itemIcon}>
                {theme === 'light' ? <LightThemeIcon /> : <DarkThemeIcon />}
            </div>
            <div className={styles.itemWrap}>
                <p className={styles.itemTitle}>
                    {t('system_settings.theme_title')}
                </p>
                <p className={styles.itemValue}>
                    {theme === 'light'
                        ? t('system_settings.theme_light')
                        : t('system_settings.theme_dark')}
                </p>
            </div>
            <div className={styles.itemArrow}>
                <ArrowRoundedIcon />
            </div>
            {activeSubMenu && (
                <ul className={styles.itemInclude}>
                    {themes.map((obj, index) => (
                        <li
                            key={index}
                            className={
                                storageTheme === obj.value ? styles.active : ''
                            }
                            onClick={() =>
                                handleChangeTheme(obj.value as Theme)
                            }
                        >
                            {renderOptionIcon(obj.value as Theme)}
                            <p>{obj.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
