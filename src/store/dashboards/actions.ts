import { createAsyncThunk } from '@reduxjs/toolkit';
import { dashboardApi } from '@src/api';
import type {
    IDashboardState,
    // ICreateDashboardData,
} from '@src/store/dashboards/@types';
import type { AxiosResponse } from 'axios';

export const getDashboards = createAsyncThunk(
    'DASHBOARDS/GET_ITEMS',
    async (_, { rejectWithValue }) => {
        return (await dashboardApi
            .fetchDashboards()
            .then((res: AxiosResponse) => {
                console.log('DASHBOARDS/GET_ITEMS', res.data);
                return res.data as IDashboardState['items'];
            })
            .catch(error => {
                return rejectWithValue(error.message);
            })) as unknown;
    }
);

// export const updateDashboardAsync = createAsyncThunk(
//     'DASHBOARDS/UPDATE_DASHBOARD',
//     async (data: IDashboardState['currentDashBoard'], { rejectWithValue }) => {
//         return (await dashboardApi
//             .updateDashboard(data)
//             .then((res: AxiosResponse) => {
//                 console.log('DASHBOARDS/UPDATE_DASHBOARD', res.data);
//                 return res.data as IDashboardState['currentDashBoard'];
//             })
//             .catch(error => {
//                 return rejectWithValue(error.message);
//             })) as unknown;
//     }
// );
//
// export const createDashboardAsync = createAsyncThunk<ICreateDashboardData, any>(
//     'DASHBOARDS/CREATE_DASHBOARD',
//     async (data: ICreateDashboardData, { rejectWithValue }) => {
//         return (await dashboardApi
//             .createDashboard(data)
//             .then((res: AxiosResponse) => {
//                 console.log('DASHBOARDS/CREATE_DASHBOARD', res.data);
//                 return res.data;
//             })
//             .catch(error => {
//                 return rejectWithValue(error.message);
//             })) as unknown;
//     }
// );
