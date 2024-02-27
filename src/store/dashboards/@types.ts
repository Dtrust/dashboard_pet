import type { StatusEnum } from '@src/store/@types';

export type DashboardGridLayoutType = {
    cols: number;
    rows: number;
};

export type DashBoardType = {
    id: number;
    widgetCollectionTypeID: number;
    dataSourceTypeID: number;
    name: string;
    cellsX: number;
    cellsY: number;
    isHidden: boolean;
};

export interface ICreateDashboardData {
    dataSourceTypeID: number;
    widgetCollectionTypeID: number;
    name: string;
    cellsX: number;
    cellsY: number;
}

export interface IDashboardState {
    items: DashBoardType[];
    currentDashBoard: DashBoardType | Record<any, any>;
    status: StatusEnum;
}
