import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import renderReducer from './RenderSlice';

const store = configureStore({
    reducer: {
        render: renderReducer,
    },
});

export const renderSelector = (state: RootState) => state.render;

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
