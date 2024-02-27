import React from 'react';
import i18next from 'i18next';
import Cookies from 'js-cookie';
import styles from '@src/components/SystemSettings/styles.module.sass';
import { ArrowRoundedIcon, LanguageIcon } from '@src/components';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'ua', title: 'Українська' },
    { code: 'en', title: 'English' },
];

export const LangSetting: React.FC = () => {
    const { t } = useTranslation();

    const [activeSubMenu, setActiveSubMenu] = React.useState<boolean>(false);

    const langName = Cookies.get('i18next') === 'en' ? 'English' : 'Українська';

    const [currentLangName, setCurrentLangName] =
        React.useState<string>(langName);

    const handleChangeLang = (langCode: string) => {
        void i18next.changeLanguage(langCode);
        Cookies.set('i18next', langCode);
        setCurrentLangName(langCode === 'ua' ? 'Українська' : 'English');
    };

    return (
        <div
            className={styles.item}
            onMouseEnter={() => setActiveSubMenu(!activeSubMenu)}
            onMouseLeave={() => setActiveSubMenu(!activeSubMenu)}
        >
            <div className={styles.itemIcon}>
                <LanguageIcon />
            </div>
            <div className={styles.itemWrap}>
                <p className={styles.itemTitle}>
                    {t('system_settings.lang_title')}
                </p>
                <p className={styles.itemValue}>{currentLangName}</p>
            </div>
            <div className={styles.itemArrow}>
                <ArrowRoundedIcon />
            </div>
            {activeSubMenu && (
                <ul className={styles.itemInclude}>
                    {languages.map((obj, i) => (
                        <li
                            key={i}
                            onClick={() => handleChangeLang(obj.code)}
                            className={
                                Cookies.get('i18next') === obj.code
                                    ? styles.active
                                    : ''
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
