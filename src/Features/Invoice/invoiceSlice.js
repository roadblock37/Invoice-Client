import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  statusOptions: ["pending", "paid", "draft"],
  status: "pending",
  isEditing: false,
  editInvoiceID: "",
};

const InvoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setEditInvoice: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
});
