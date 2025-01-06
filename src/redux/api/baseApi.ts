import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getFromLocalStorage } from '../../utils/local-storage';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.10.15:8000/api/v1',
        prepareHeaders: (headers) => {
            const token = getFromLocalStorage('authToken');
            console.log('Auth Token:', token);
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['user'],
});

export const { reducer } = api;
export default api;
