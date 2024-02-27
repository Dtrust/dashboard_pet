import type { RootState } from '@src/store/store';

export const selectDashboards = () => (state: RootState) =>
    state.dashboards.items;

export const selectDashboardByID = (id: number) => (state: RootState) =>
    state.dashboards.items.find(item => item.id === id);

export const selectCurrentDashBoard = () => (state: RootState) =>
    state.dashboards.currentDashBoard;

export const selectTempDashboard = () => (state: RootState) =>
    state.dashboards.items.find(item => item.id === 2)
