import { configureStore } from "@reduxjs/toolkit";
import allInvoiceSlice from "./Features/AllInvoices/allInvoiceSlice";

export const store = configureStore({
    // TODO add additional slices for single invoice
    reducer: {
        allInvoices: allInvoiceSlice
    }
})