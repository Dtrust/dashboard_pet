import React from 'react';
import {
    AccessSettingsControlPanel,
    AccessSettingsTable,
} from '@src/components';

export const AccessSettingsLayout: React.FC = props => {
    return (
        <>
            <AccessSettingsControlPanel />
            <AccessSettingsTable />
        </>
    );
};
