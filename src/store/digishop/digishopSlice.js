import { createSlice } from "@reduxjs/toolkit";

export const digishopSlice = createSlice({
    name: 'digishop',
    initialState: {
        isLoadingEvents: true,
        digimons:[],
        itemsCart:[],
    },
    reducers: {
        onLogoutDigishop: (state) => {
            state.isLoadingEvents = true;
            digimons = [];
            state.itemsCart = [];
        }
    }
});

export const {
    onLogoutDigishop,
} = digishopSlice.actions;