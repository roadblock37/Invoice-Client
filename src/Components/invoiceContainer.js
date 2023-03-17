import Invoice from "./invoice";
import { Link, useLoaderData } from "react-router-dom";
import Empty from "./empty";
import { store } from "../store";
import { apiSlice, useGetInvoicesQuery } from "../Features/API/apiSlice";



// export async function loader() {
//   const dataFetch = store.dispatch(apiSlice.endpoints.getInvoices.initiate());
//       try {
//         const response = await dataFetch.unwrap();
//         return response;
//       } catch (error) {
//         // possibly add redirect if needed later
//         console.log(error);
//       }
//       finally {
//         dataFetch.unsubscribe();
//       }
// }

const InvoiceContainer = () => {
  // TODO use loader for fetching data
  const data = useLoaderData();

  return (
    <section className="invoice-container">
       {data.allInvoices.map((invoice) => {
         return (
           <div key={invoice._id}>
           <Link to={`/invoices/${invoice._id}`}>
           <Invoice  {...invoice} />
           </Link>
           </div>
           );
       })}
     </section>
  );

  // const {
  //   data: invoices,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetInvoicesQuery();

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // } else if (invoices.allInvoices.length === 0) {
  //   return <Empty />;
  // } else if (isError) {
  //   return <div>{error.toString()}</div>;
  // }

  // // default return all invoices
  // return (
  //   <section className="invoice-container">
  //     {invoices.allInvoices.map((invoice) => {
  //       return (
  //         <div key={invoice._id}>
  //         <Link to={`/invoices/${invoice._id}`}>
  //         <Invoice  {...invoice} />
  //         </Link>
  //         </div>
  //         );
  //     })}
  //   </section>
  // );
};

export default InvoiceContainer;
