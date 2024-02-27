import type { RootState } from '@src/store/store';

export const selectDashboardUsers = () => (state: RootState) =>
    state.dashboardTemp.users;

export const selectAddedUsers = () => (state: RootState) =>
    state.dashboardTemp.users.filter(item => item.isShared);

export const selectNoRightsUsersLength = () => (state: RootState) =>
    state.dashboardTemp.users.filter(item => item.isShared && !item.hasRight)
        .length;

export const selectGridLayout = () => (state: RootState) =>
    state.dashboardTemp.gridLayout;

export const selectDashboardWidgets = () => (state: RootState) =>
    state.dashboardTemp.widgets;

export const selectWidgetByID = (id: number) => (state: RootState) =>
    state.dashboardTemp.widgets.find(item => item.id === id);

    export const selectIsDragging = () => (state: RootState) =>
        state.dashboardTemp.isDragging;
