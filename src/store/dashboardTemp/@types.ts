import type { StatusEnum } from '@src/store/@types';

export type GridLayoutType = {
    cols: number;
    rows: number;
};

export type UserItemType = {
    id: number;
    name: string;
    isShared: boolean;
    hasRight: boolean;
};

export type WidgetType =
    | 'counter'
    | 'lineChart'
    | 'pieChart'
    | 'barChart'
    | 'table'
    | 'text';

export type WidgetItemType = {
    id: number;
    type: WidgetType;
    title: string;
    access: boolean;
    data?: any[];
};

export interface IDashboardStateTemp {
    users: UserItemType[];
    gridLayout: GridLayoutType;
    status: StatusEnum;
    widgets: WidgetItemType[];
    isDragging: boolean;
}
