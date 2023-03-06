import { useSelector, useDispatch } from "react-redux";
import { setEditInvoice } from "../Features/Invoice/invoiceSlice";

const AddInvoice = () => {
  const { isLoading, statusOptions, status, isEditing, editInvoiceID } =
    useSelector((store) => store.invoice);
  const dispatch = useDispatch();

  return <h1>Add Invoice</h1>;
};

export default AddInvoice;
