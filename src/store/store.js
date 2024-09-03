import { configureStore } from "@reduxjs/toolkit";
import { authSlice, digishopSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        shop: digishopSlice.reducer,
    },
});