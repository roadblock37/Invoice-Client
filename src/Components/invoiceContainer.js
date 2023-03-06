import Invoice from "./invoice";
import { useGetInvoicesQuery } from "../Features/API/apiSlice";
import Empty from "./empty";

const InvoiceContainer = () => {
  const {
    data: invoices,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetInvoicesQuery();

  //   let content;
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (invoices.length === 0) {
    return <Empty />;
  } else if (isError) {
    return <div>{error.toString()}</div>;
  }

  return (
    <section className="invoice-container">
      {invoices.allInvoices.map((invoice) => {
        return <Invoice key={invoice._id} {...invoice} />;
      })}
    </section>
  );
};

export default InvoiceContainer;
