import { WidgetType } from '@src/store/dashboardTemp/@types';

type WidgetDataItem = {
    type: WidgetType;
    title: string;
};

export type WidgetDataType = WidgetDataItem[];
