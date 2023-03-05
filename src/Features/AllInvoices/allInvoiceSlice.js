import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllInvoicesThunk } from "./allInvoicesThunk";

const initialFilterState = {
  filterState: "",
  filterOptions: ["pending", "paid", "draft"],
};

const initialState = {
  isLoading: true,
  invoices: [],
  totalInvoices: 0,
  theme: true,
  ...initialFilterState,
};

// export const getAllInvoices = createAsyncThunk('allInvoices/getInvoices', getAllInvoicesThunk);

const allInvoicesSlice = createSlice({
  name: "allInvoices",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    toggleTheme: (state) => {
      return {
        ...state,
        theme: !state.theme,
      };
      //   console.log("toggleTheme fired!");
      //   console.log(state.theme);
    },
  },
});

export const { showLoading, hideLoading, toggleTheme } =
  allInvoicesSlice.actions;
export default allInvoicesSlice.reducer;
