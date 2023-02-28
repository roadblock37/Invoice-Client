import Invoice from "./invoice";
import { useGetInvoicesQuery } from "../Features/API/apiSlice";

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
  }
   else if (isSuccess) {
    return console.log(typeof(invoices))
  } 
  else if (isError) {
    return <div>{error.toString()}</div>;
  }

  return (
    <section>
      {invoices.map((invoice) => {
        return <Invoice key={invoice._id} {...invoice}/>
      })}
    </section>
  );
};

export default InvoiceContainer;
