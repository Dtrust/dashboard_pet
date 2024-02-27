import React from 'react';
import { Header } from '@src/components';
import { useTranslation } from 'react-i18next';
import { CreateWidgetLayout } from '@src/layouts';

export const CreateWidgetPage: React.FC = props => {
    const { t } = useTranslation();

    return (
        <>
            <Header markerText={t('header.markers.create_widget')} />
            <CreateWidgetLayout />
        </>
    );
};
