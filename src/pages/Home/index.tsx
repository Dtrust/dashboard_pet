import React from 'react';
import { Header } from '@src/components';
import { GridLayout } from '@src/layouts';

export const Home: React.FC = () => {
    return (
        <>
            <Header isMainPage={true} />
            <GridLayout />
        </>
    );
};
