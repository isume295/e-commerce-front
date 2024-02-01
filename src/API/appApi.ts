import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { RootState } from '../redux/store';
import { logOut, setCredentials } from '../redux/auth/authSlice';

interface ErrorResponse {
    originalStatus?: number;
}

interface RefreshResult {
    data: {
        token: string;
    };
}

const baseQuery: BaseQueryFn = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3500/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    const errorResponse: ErrorResponse = result?.error || {};

    if (errorResponse.originalStatus === 403) {
        console.log('Sending refresh token');
        const refreshResult = (await baseQuery('/refresh', api, extraOptions)) as RefreshResult;
        console.log(refreshResult);

        if (refreshResult?.data) {
            const email = (api.getState() as RootState).auth.email;
            // Store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, email }));
            // Retry the original query with the new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
