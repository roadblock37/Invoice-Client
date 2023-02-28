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
  return (
  <article className="invoice">
    <h2>{invoiceID}</h2>
    <h5>{paymentDue}</h5>
    <h5>{clientName}</h5>
    <h2>{total}</h2>
    <h5>{status}</h5>

  </article>
    );
};

export default Invoice;
