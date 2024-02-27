import type { WidgetItemType } from '@src/store/dashboardTemp/@types';
import React from 'react';

export interface IWidget extends WidgetItemType {
    isCreatePage?: boolean;
    setIsMainGridDraggable: React.Dispatch<React.SetStateAction<boolean>>;
}
