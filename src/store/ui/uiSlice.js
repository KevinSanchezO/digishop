import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isShoppingCartOpen: false,
    },
    reducers: {
        onOpenShoppingCart: (state) => {
            state.isShoppingCartOpen = true;
        },
        onCloseShoppingCart: (state) => {
            state.isShoppingCartOpen = false;
        }
    }
});

export const {
    onOpenShoppingCart,
    onCloseShoppingCart,
} = uiSlice.actions