import { useSelector, useDispatch } from "react-redux";
import { InvoiceForm } from "../Components";
import { setEditInvoice } from "../Features/Invoice/invoiceSlice";

const AddInvoice = () => {
  const { isLoading, statusOptions, status, isEditing, editInvoiceID } =
    useSelector((store) => store.invoice);
  const dispatch = useDispatch();

  return <InvoiceForm/>;
};

export default AddInvoice;
