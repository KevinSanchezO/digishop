import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isShoppingCartOpen: false,
        isHistoryOpen:false,
    },
    reducers: {
        handleShoppingCart: (state, {payload}) => {
            state.isShoppingCartOpen = payload;
        },
        handleOpenHistory: (state, {payload}) => {
            state.isHistoryOpen = payload;
        },
    }
});

export const {
    handleShoppingCart,
    handleOpenHistory
} = uiSlice.actions