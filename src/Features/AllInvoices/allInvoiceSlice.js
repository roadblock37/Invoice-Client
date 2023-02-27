import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getAllInvoicesThunk } from './allInvoicesThunk';

const initialFilterState = {
    filterState: '',
    filterOptions: ['pending', 'paid', 'draft']
};

const initialState = {
    isLoading: true,
    invoices: [],
    totalInvoices: 0,
    ...initialFilterState

}

export const getAllInvoices = createAsyncThunk('allInvoices/getInvoices', getAllInvoicesThunk);

const allInvoicesSlice = createSlice({
    name: 'allInvoices',
    initialState,
    reducers: {
        showLoading: (state) => {state.isLoading = true},
        hideLoading: (state) => {state.isLoading = false},

    },
    extraReducers: {
        [getAllInvoices.pending]: (state) => {state.isLoading = true},

        [getAllInvoices.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.invoices = payload.invoices;
            state.totalInvoices = payload.totalInvoices;
        },

        [getAllInvoices.rejected]: (state, {payload}) => {
            state.isLoading = false;
            console.log(payload);
        },
    }
});

export const {showLoading, hideLoading} = allInvoicesSlice.actions;
export default allInvoicesSlice.reducer;