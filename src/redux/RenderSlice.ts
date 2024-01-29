import { createSlice } from '@reduxjs/toolkit';

// type Album = {
//     album: string;
//     songCount: number;
// };

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
        },
        hideItem: (state) => {
            state.showQuickView = false;
            // state.albums = action.payload;
        },
    },
});

export const { showItem, hideItem } = renderSlice.actions;
export default renderSlice.reducer;
