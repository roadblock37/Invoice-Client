import moment from "moment";
import { Link } from "react-router-dom";
import { viewInvoice } from "../Features/Invoice/invoiceSlice";
import { useDispatch } from "react-redux";

const Invoice = ({
  _id,
  invoiceID,
  createdAt,
  paymentDue,
  description,
  paymentTerms,
  clientName,
  clientEmail,
  status,
  senderAdress,
  clientAddress,
  items,
  total,
}) => {
  const dueDate = moment(paymentDue).format("Do MMM YYYY");
  const dispatch = useDispatch();
  return (
    <Link
      to="/view-invoice"
      onClick={() =>
        dispatch(
          viewInvoice({
            viewInvoiceID: _id,
            invoiceID,
            createdAt,
            paymentDue,
            description,
            paymentTerms,
            clientName,
            clientAddress,
            clientEmail,
            status,
            senderAdress,
            items,
            total,
          })
        )
      }>
      <article className="invoice">
        <div className="id-container">
          <h2>{`# ${invoiceID}`}</h2>
          <h5>{clientName}</h5>
        </div>
        <div className="payment-container">
          <div className="payment">
            <h5>{`Due ${dueDate}`}</h5>
            <h2>{total}</h2>
          </div>
          <h5>{status}</h5>
        </div>
      </article>
    </Link>
  );
};

export default Invoice;
