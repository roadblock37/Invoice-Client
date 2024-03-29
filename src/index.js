import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./Pages/sharedLayout";
import { AllInvoices, ViewInvoice } from "./Pages";
import { apiSlice } from "./Features/API/apiSlice";
import customFetch from "./Utils/axios";
import { InvoiceForm } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        loader: async () => {
          const dataFetch = store.dispatch(
            apiSlice.endpoints.getInvoices.initiate()
          );
          try {
            const response = await dataFetch.unwrap();
            return response;
          } catch (error) {
            // possibly add redirect if needed later
            console.log(error);
          } finally {
            dataFetch.unsubscribe();
          }
        },
        // action: ,
        element: <AllInvoices />,
      },

      {
        path: "invoices/:id",
        loader: async ({ params }) => {
          try {
            const fetchData = await customFetch(`/invoices/${params.id}`);
            return { fetchData };
          } catch (error) {
            console.log(error);
          }
        },
        element: <ViewInvoice />,
      },
      {
        path: "invoices/:id/edit",
        loader: async ({ params }) => {
          try {
            const fetchData = await customFetch(`/invoices/${params.id}`);
            return { fetchData };
          } catch (error) {
            console.log(error);
          }
        },
        element: <InvoiceForm />,

      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
