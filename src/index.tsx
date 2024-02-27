import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['ua', 'en'],
        fallbackLng: 'ua',
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    })
    .then(() => console.log('i18next init success'))
    .catch(err => console.log('i18next init error', err));

// Todo this is rendered before translations
const loadingTextMarkup = <div>Loading...</div>;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.Suspense fallback={loadingTextMarkup}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.Suspense>
);
