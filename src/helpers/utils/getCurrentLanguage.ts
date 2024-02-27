import i18next from 'i18next';

export const getCurrentLanguage = () => {
    const lang = i18next.language || window.localStorage.i18nextLng;
    if (lang === 'en') return lang;

    return 'uk';
};
