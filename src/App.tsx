import React from 'react';
import './sass/app.sass';
import { Route, Routes } from 'react-router-dom';
import { AdminAccessSettingsPage, CreateWidgetPage, Home } from '@src/pages';
import { useTheme } from '@src/hooks';
import type { Theme } from '@src/hooks/useTheme/types';
import 'devextreme/dist/css/dx.light.css';

const App: React.FC = () => {
    const storageTheme = localStorage.getItem('data-theme') as Theme;
    useTheme(storageTheme ?? 'light');
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-widget" element={<CreateWidgetPage />} />
            <Route
                path="/access-settings"
                element={<AdminAccessSettingsPage />}
            />
        </Routes>
    );
};

export default App;
