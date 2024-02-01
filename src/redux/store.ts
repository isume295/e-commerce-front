import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import renderReducer from './RenderSlice';
import authReducer from './auth/authSlice';
import { apiSlice } from '../API/appApi';

const store = configureStore({
    reducer: {
        render: renderReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
});

export const renderSelector = (state: RootState) => state.render;

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
