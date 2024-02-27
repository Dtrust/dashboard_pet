import React from 'react';

export interface IOptionsModal {
    dashboardTitle: string;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isShared?: boolean;
}
