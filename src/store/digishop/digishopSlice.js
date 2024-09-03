import { createSlice } from "@reduxjs/toolkit";

export const digishopSlice = createSlice({
    name: 'digishop',
    initialState: {
        isLoadingEvents: true,
        digimons:[],
        itemsCart:[],
    },
    reducers: {
        onLogoutCalendar: (state) => {
            state.isLoadingEvents = true;
            digimons = [];
            state.itemsCart = [];
        }
    }
});

export const {
    onLogoutCalendar,
} = digishopSlice.actions;