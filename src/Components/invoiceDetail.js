import { ReactComponent as LeftArrow } from "../assets/icon-arrow-left.svg";
import moment from "moment";
import { Link, useLoaderData } from "react-router-dom";
import { useGetInvoiceByIdQuery } from "../Features/API/apiSlice";
const InvoiceDetail = () =>
  {
    
    const {fetchData} = useLoaderData();
    console.log(fetchData.data.invoice);
    const dueDate = moment(fetchData.data.invoice.paymentDue).format("Do MMM YYYY");
    const createdDate = moment(fetchData.data.invoice.createdAt).format("Do MMM YYYY");
    return (
      <section className="view-container">
        {/*button to go back to main invoice page */}
        <Link to="/">
          <button>
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
          <h4>{`# ${fetchData.data.invoice.invoiceID}`}</h4>
          <p>{fetchData.data.invoice.description}</p>
          {/* map over sending address */}
          {fetchData.data.invoice.senderAddress.map((item) => {
            const {street, city, postCode, country, _id} = item;
            return (
              <article key={_id} className="address">
                <p>{street}</p>
                <p>{city}</p>
                <p>{postCode}</p>
                <p>{country}</p>
              </article>
            );
          })}

          <p>Invoice Date</p>
          <h4>{createdDate}</h4>

          <p>Payment Due</p>
          <h4>{dueDate}</h4>

          <p>Bill to</p>
          <h4>{fetchData.data.invoice.clientName}</h4>

          {/* map over client address and return 
          street, city, postcode, country */}
          {fetchData.data.invoice.clientAddress.map((item) => {
            const {street, city, postCode, country, _id} = item;
            return (
              <article key={_id} className="address">
                <p>{street}</p>
                <p>{city}</p>
                <p>{postCode}</p>
                <p>{country}</p>
              </article>
            );

          })}
          {/* <p>{fetchData.data.invoice.clientAddress}</p> */}

          <p>Sent to</p>
          <h5>{fetchData.data.invoice.clientEmail}</h5>

          {/*container holding items added to invoice
            TODO create item container component and item component
            */}
          {/* <article className="item-container">
            <h4>item name</h4>
            <h5>item quantity</h5>
            <p>amount due $550</p>
          </article> */}
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
