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
  const loaderData = useLoaderData();
  console.log(loaderData.allInvoices.length);

  if (loaderData.allInvoices.isLoading) {
    return <h1>Loading...</h1>;
  } else if (loaderData.allInvoices.length === 0) {
    return <Empty />;
  } else if (loaderData.allInvoices.isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className="invoice-container">
      {loaderData.allInvoices && loaderData.allInvoices.length
        ? loaderData.allInvoices.map((invoice) => {
            return (
              <div key={invoice._id}>
                <Link to={`/invoices/${invoice._id}`}>
                  <Invoice {...invoice} />
                </Link>
              </div>
            );
          })
        : null}
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
