import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    showQuickView: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    showQuickView: false,
    errMsg: '',
    error: false,
};
const renderSlice = createSlice({
    name: 'render',
    initialState,
    reducers: {
        showItem: (state) => {
            state.showQuickView = true;
            console.log('showItem', state.showQuickView);
        },
        hideItem: (state) => {
            state.showQuickView = false;
            // state.albums = action.payload;
        },
    },
});

export const { showItem, hideItem } = renderSlice.actions;
export default renderSlice.reducer;
