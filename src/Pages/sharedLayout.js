import { Outlet, useLoaderData } from "react-router";
import { useSelector } from "react-redux";
import { InvoiceContainer, Navbar } from "../Components";
import { apiSlice, useGetInvoicesQuery } from "../Features/API/apiSlice";
import { store } from "../store";

export async function loader() {
  const dataFetch = store.dispatch(apiSlice.endpoints.getInvoices.initiate());
      try {
        const response = await dataFetch.unwrap;
        return response;
      } catch (error) {
        // possibly add redirect if needed later
        console.log(error);
      }
      finally {
        dataFetch.unsubscribe();
      }
}

const SharedLayout = () => {
   const response = useLoaderData();
  
  const themeState = useSelector((state) => state.allInvoices.theme);
  return (
    <main className="dashboard" data-theme={themeState}>
      <Navbar />
      <div className="dashboard-page">
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
