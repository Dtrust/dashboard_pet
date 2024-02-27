import React from 'react';
import type { Theme, useThemeReturn, HandleChangeThemeType } from './types';

export const useTheme = (initialTheme: Theme): useThemeReturn => {
    const [theme, setTheme] = React.useState<Theme>(initialTheme);

    const handleChangeTheme: HandleChangeThemeType = value => {
        setTheme(value);
        console.log('currentTheme', value);
        localStorage.setItem('data-theme', value);
    };

    React.useEffect(() => {
        const storageTheme = localStorage.getItem('data-theme');
        document.body.setAttribute('data-theme', storageTheme ?? theme);
    }, [theme]);

    return [theme, handleChangeTheme];
};
