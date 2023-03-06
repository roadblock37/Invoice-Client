import moment from "moment";
const Invoice = ({
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
  return (
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
  );
};

export default Invoice;
