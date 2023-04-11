import { ReactComponent as LeftArrow } from "../assets/icon-arrow-left.svg";
import moment from "moment";
import { Link, useLoaderData } from "react-router-dom";
const InvoiceDetail = () => {
  const { fetchData } = useLoaderData();
  console.log(fetchData.data.invoice);
  const dueDate = moment(fetchData.data.invoice.paymentDue).format(
    "Do MMM YYYY"
  );
  const createdDate = moment(fetchData.data.invoice.createdAt).format(
    "Do MMM YYYY"
  );
  return (
    <section className="view-container">
      {/*button to go back to main invoice page */}
      <Link to="/">
        <button className="backBtn">
          <LeftArrow /> Go back
        </button>
      </Link>

      {/*
      status container holding the invoice status
        TODO create status component
    */}
      <div className="status-container">
        <p>Status</p>
        <p>{fetchData.data.invoice.status}</p>
      </div>

      {/*container holding all invoice information */}
      <section className="invoice-info-container">
        <div className="flex-column">
          <div className="line-height">
            <h4>{`# ${fetchData.data.invoice.invoiceID}`}</h4>
            <p>{fetchData.data.invoice.description}</p>
          </div>
          {/* map over sending address */}
          {fetchData.data.invoice.senderAddress.map((item) => {
            const { street, city, postCode, country, _id } = item;
            return (
              <article key={_id} className="address line-height">
                <p>{street}</p>
                <p>{city}</p>
                <p>{postCode}</p>
                <p>{country}</p>
              </article>
            );
          })}
        </div>

        {/* section containing client address, 
        invoice creation date and payment due date */}

        <section className="client-section">
          <div className="flex-column">
            <div className="med-line-height">
              <p>Invoice Date</p>
              <h4>{createdDate}</h4>
            </div>

            <div className="med-line-height">
              <p>Payment Due</p>
              <h4>{dueDate}</h4>
            </div>
          </div>
          <div className="flex-column ">
            <div className="med-line-height">
              <p>Bill to</p>
              <h4>{fetchData.data.invoice.clientName}</h4>
            </div>

            {/* map over client address and return 
          street, city, postcode, country */}
            {fetchData.data.invoice.clientAddress.map((item) => {
              const { street, city, postCode, country, _id } = item;
              return (
                <article key={_id} className="line-height">
                  <p>{street}</p>
                  <p>{city}</p>
                  <p>{postCode}</p>
                  <p>{country}</p>
                </article>
              );
            })}
          </div>
        </section>

        <div className="med-line-height">
          <p>Sent to</p>
          <h4>{fetchData.data.invoice.clientEmail}</h4>
        </div>

        {/*container holding items added to invoice
            TODO create item container component and item component
            */}

        <section className="item-container">
          {fetchData.data.invoice.items.map((item) => {
            const { name, quantity, price, total, _id } = item;
            return (
              <article key={_id}>
                <h4>{name}</h4>
                <h5>{quantity}</h5>
                <p>{price}</p>
                <p>{total}</p>
              </article>
            );
          })}
        </section>
      </section>

      {/*container holding edit delete and change status buttons */}
      <div className="button-container">
        <button>Edit</button>
        <button>Delete</button>
        <button>Mark as Paid</button>
      </div>
    </section>
  );
};

export default InvoiceDetail;
