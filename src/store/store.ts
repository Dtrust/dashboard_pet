import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import user from '@src/store/user/slice';
import dashboards from '@src/store/dashboards/slice';
//temp data
import dashboardTemp from '@src/store/dashboardTemp/slice';

export const store = configureStore({
    reducer: {
        user,
        dashboards,
        dashboardTemp,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAPPDispatch = () => useDispatch<AppDispatch>();
