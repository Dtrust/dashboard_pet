import React from 'react';
import { Header } from '@src/components';
import { useTranslation } from 'react-i18next';
import { AccessSettingsLayout } from '@src/layouts';

export const AdminAccessSettingsPage: React.FC = props => {
    const { t } = useTranslation();

    return (
        <>
            <Header markerText={t('header.markers.access_settings')} />
            <AccessSettingsLayout />
        </>
    );
};
