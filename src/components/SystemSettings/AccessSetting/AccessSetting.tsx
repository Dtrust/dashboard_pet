import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRoundedIcon, SettingsLinesIcon } from '@src/components';
import styles from '@src/components/SystemSettings/styles.module.sass';

interface IAccessDataType {
    title: string;
    value: string;
}

export const AccessSetting: React.FC = () => {
    const { t } = useTranslation();

    const accessData: IAccessDataType[] = [
        {
            title: t('system_settings.source_1'),
            value: 'source_1',
        },
        {
            title: t('system_settings.source_2'),
            value: 'source_2',
        },
        {
            title: t('system_settings.source_3'),
            value: 'source_3',
        },
    ];

    const [activeSubMenu, setActiveSubMenu] = React.useState<boolean>(false);

    const [currentOption, setCurrentRightSource] =
        React.useState<IAccessDataType>({
            title: t('system_settings.source_1'),
            value: 'source_1',
        });

    const handleSelectOption = (title: string, value: string) => {
        setCurrentRightSource({ title, value });
    };

    return (
        <div
            className={styles.item}
            onMouseEnter={() => setActiveSubMenu(!activeSubMenu)}
            onMouseLeave={() => setActiveSubMenu(!activeSubMenu)}
        >
            <div className={styles.itemIcon}>
                <SettingsLinesIcon />
            </div>
            <div className={styles.itemWrap}>
                <p className={styles.itemTitle}>
                    {t('system_settings.access_title')}
                </p>
                <p className={styles.itemValue}>{currentOption.title}</p>
            </div>
            <div className={styles.itemArrow}>
                <ArrowRoundedIcon />
            </div>
            {activeSubMenu && (
                <ul className={styles.itemInclude}>
                    {accessData.map((obj, index) => (
                        <li
                            key={index}
                            className={
                                currentOption.value === obj.value
                                    ? styles.active
                                    : ''
                            }
                            onClick={() =>
                                handleSelectOption(obj.title, obj.value)
                            }
                        >
                            <p>{obj.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
