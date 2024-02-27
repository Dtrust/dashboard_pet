import { StatusEnum } from '@src/store/@types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
    IDashboardStateTemp,
    WidgetItemType,
} from '@src/store/dashboardTemp/@types';

const initialState: IDashboardStateTemp = {
    users: [],
    gridLayout: {
        cols: 3,
        rows: 2,
    },
    widgets: [],
    status: StatusEnum.DEFAULT,
    isDragging: false,
};

export const dashboardSlice = createSlice({
    name: 'dashboardTemp',
    initialState,
    reducers: {
        setUsers: (
            state: IDashboardStateTemp,
            action: PayloadAction<IDashboardStateTemp['users']>
        ) => {
            state.users = action.payload;
        },
        setShareByID: (
            state: IDashboardStateTemp,
            action: PayloadAction<number>
        ) => {
            const user = state.users.find(item => item.id === action.payload);
            if (user) {
                user.isShared = !user.isShared;
            }
        },
        setGridLayout: (
            state: IDashboardStateTemp,
            action: PayloadAction<IDashboardStateTemp['gridLayout']>
        ) => {
            state.gridLayout = action.payload;
        },
        setStatus: (
            state: IDashboardStateTemp,
            action: PayloadAction<StatusEnum>
        ) => {
            state.status = action.payload;
        },
        setWidgets: (
            state: IDashboardStateTemp,
            action: PayloadAction<IDashboardStateTemp['widgets']>
        ) => {
            state.widgets = action.payload;
        },
        changeWidgetTitle: (
            state: IDashboardStateTemp,
            action: PayloadAction<{ id: number; title: string }>
        ) => {
            const widget = state.widgets.find(
                item => item.id === action.payload.id
            );
            if (widget) {
                widget.title = action.payload.title;
            }
        },
        setWidgetData: (
            state: IDashboardStateTemp,
            action: PayloadAction<{ id: number; data: WidgetItemType['data'] }>
        ) => {
            const widget = state.widgets.find(
                item => item.id === action.payload.id
            );
            if (widget) {
                widget.data = action.payload.data;
            }
        },
        addWidget: (
            state: IDashboardStateTemp,
            action: PayloadAction<WidgetItemType>
        ) => {
            state.widgets.push(action.payload);
        },
        setIsDragging: (
            state: IDashboardStateTemp,
            action: PayloadAction<boolean>
        ) => {
            state.isDragging = action.payload;
        }
    },
});

export const {
    setUsers,
    setShareByID,
    setGridLayout,
    setWidgets,
    changeWidgetTitle,
    setWidgetData,
    addWidget,
    setIsDragging
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
