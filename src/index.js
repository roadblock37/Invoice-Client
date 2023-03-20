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
        element: <AllInvoices />,
      },

      {
        path: "invoices/:id",
        // loader: async (params) => {
        //   const getInvoice = store.dispatch(
        //     apiSlice.endpoints.getInvoiceById.initiate()
        //   );
        //   try {
        //     const response = await getInvoice.unwrap();
        //     console.log(response);
        //     return response;
        //   } catch (error) {
        //     console.log(error);
        //   } finally {
        //     getInvoice.unsubscribe();
        //   }
        // },
        element: <ViewInvoice />,
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
