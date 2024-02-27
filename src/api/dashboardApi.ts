import axios from '@src/services/axios';
// import type {
//     DashBoardType,
//     ICreateDashboardData,
// } from '@src/store/dashboards/@types';

const token = localStorage.getItem('TOKEN') as string;

export const dashboardApi = new (class Api {
    fetchDashboards() {
        return axios({
            url: `/dashboard/widgetCollection/v1/select?token=${token}`,
            method: 'get',
        });
    }

    // createDashboard(data: ICreateDashboardData) {
    //     return axios({
    //         url: `/dashboard/widgetCollection/v1/insert?token=${token}`,
    //         method: 'post',
    //         data,
    //     });
    // }
    //
    // updateDashboard(data: DashBoardType) {
    //     return axios({
    //         url: `/dashboard/widgetCollection/v1/update?token=${token}`,
    //         method: 'post',
    //         data,
    //     });
    // }
})();
