import { ReactComponent as LeftArrow } from "../assets/icon-arrow-left.svg";
import moment from "moment";
import { Link, useLoaderData } from "react-router-dom";
import { useGetInvoiceByIdQuery } from "../Features/API/apiSlice";
const InvoiceDetail = () =>
  // {
  // invoiceID,
  // createdAt,
  // paymentDue,
  // description,
  // paymentTerms,
  // clientName,
  // clientEmail,
  // status,
  // senderAdress,
  // clientAddress,
  // items,
  // total,
  // }
  {
    // const response = useLoaderData();
    const { data: invoice, isLoading, isSuccess } = useGetInvoiceByIdQuery(_id);
    const dueDate = moment(invoice.paymentDue).format("Do MMM YYYY");
    const createdDate = moment(invoice.createdAt).format("Do MMM YYYY");
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
          <p>{invoice.status}</p>
        </div>

        {/*container holding all invoice information */}
        <div className="invoice-info-container">
          <h4>{`# ${invoice.invoiceID}`}</h4>
          <p>{invoice.description}</p>
          <p>{invoice.senderAdress}</p>

          <p>Invoice Date</p>
          <h4>{createdDate}</h4>

          <p>Payment Due</p>
          <h4>{dueDate}</h4>

          <p>Bill to</p>
          <h4>{invoice.clientName}</h4>
          <p>{invoice.clientAddress}</p>

          <p>Sent to</p>
          <h5>{invoice.clientEmail}</h5>

          {/*container holding items added to invoice
            TODO create item container component and item component
            */}
          <article className="item-container">
            <h4>item name</h4>
            <h5>item quantity</h5>
            <p>amount due $550</p>
          </article>
        </div>

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
