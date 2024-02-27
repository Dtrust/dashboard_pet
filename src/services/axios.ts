import axios, { type AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Origin': '*',
    },
    baseURL: 'https://dev-api-dashboard.plainandsimplesolution.com',
});

// axiosInstance.interceptors.request.use(
//     async config => {
//         const token = await localStorage.getItem('TOKEN');
//
//         if (token && config.headers) {
//             config.headers['token'] = `${token}`;
//         }
//
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        return await Promise.reject(error);
    }
);

export default axiosInstance;
