import { StatusEnum } from '@src/store/@types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
    DashBoardType,
    // ICreateDashboardData,
    IDashboardState,
} from '@src/store/dashboards/@types';
import {
    // createDashboardAsync,
    getDashboards,
    // updateDashboardAsync,
} from '@src/store/dashboards/actions';

const initialState: IDashboardState = {
    items: [],
    currentDashBoard: {},
    status: StatusEnum.DEFAULT,
};

export const dashboardsSlice = createSlice({
    name: 'dashboards',
    initialState,
    reducers: {
        setCurrentDashBoard: (
            state: IDashboardState,
            action: PayloadAction<DashBoardType>
        ) => {
            state.currentDashBoard = action.payload;
        },
        tempDashboards: (state: IDashboardState, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(getDashboards.pending, (state: IDashboardState) => {
            state.status = StatusEnum.LOADING;
        });
        builder.addCase(
            getDashboards.fulfilled,
            (state: IDashboardState, action) => {
                state.items = action.payload as DashBoardType[];
                state.status = StatusEnum.SUCCESS;
            }
        );
        builder.addCase(getDashboards.rejected, (state: IDashboardState) => {
            state.status = StatusEnum.ERROR;
        });
        // builder.addCase(updateDashboardAsync.pending, (state: IDashboardState) => {
        //     state.status = StatusEnum.LOADING;
        // })
        // builder.addCase(
        //     createDashboardAsync.pending,
        //     (state: IDashboardState) => {
        //         state.status = StatusEnum.LOADING;
        //     }
        // );
        // builder.addCase(
        //     createDashboardAsync.fulfilled,
        //     (
        //         state: IDashboardState,
        //         action: PayloadAction<ICreateDashboardData>
        //     ) => {
        //         state.status = StatusEnum.SUCCESS;
        //         state.items = [...state.items, action.payload];
        //     }
        // );
        // builder.addCase(
        //     createDashboardAsync.rejected,
        //     (state: IDashboardState) => {
        //         state.status = StatusEnum.ERROR;
        //     }
        // );
    },
});

export const { setCurrentDashBoard, tempDashboards } = dashboardsSlice.actions;

export default dashboardsSlice.reducer;
