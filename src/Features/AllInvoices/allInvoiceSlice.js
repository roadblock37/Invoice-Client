import { createSlice} from "@reduxjs/toolkit";

const initialFilterState = {
  filterState: "",
  filterOptions: ["pending", "paid", "draft"],
};

const initialState = {
  isLoading: true,
  invoices: [],
  totalInvoices: 0,
  theme: "light",
  ...initialFilterState,
};

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
    toggleDark: (state) => {
        if(state.theme === "light"){
            return {
                ...state,
                theme: 'dark'
            }
        }
    },
    toggleLight: (state) => {
        if(state.theme === "dark"){
            return {
                ...state,
                theme: 'light'
            }
        }
    }
  },
});

export const { showLoading, hideLoading, toggleLight, toggleDark } =
  allInvoicesSlice.actions;
export default allInvoicesSlice.reducer;
