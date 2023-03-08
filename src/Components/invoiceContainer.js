import Invoice from "./invoice";
import { useGetInvoicesQuery } from "../Features/API/apiSlice";
import Empty from "./empty";
import { Link } from "react-router-dom";

const InvoiceContainer = () => {
  const {
    data: invoices,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetInvoicesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (invoices.allInvoices.length === 0) {
    return <Empty />;
  } else if (isError) {
    return <div>{error.toString()}</div>;
  }

  // default return all invoices
  return (
    <section className="invoice-container">
      {invoices.allInvoices.map((invoice) => {
        return (
          <Link>
            <Invoice key={invoice._id} {...invoice} />
          </Link>
        );
      })}
    </section>
  );
};

export default InvoiceContainer;
