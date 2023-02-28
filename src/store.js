import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import allInvoiceSlice from "./Features/AllInvoices/allInvoiceSlice";
import { apiSlice } from "./Features/API/apiSlice";

export const store = configureStore({
    // TODO add additional slices for single invoice
    reducer: {
        allInvoices: allInvoiceSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})