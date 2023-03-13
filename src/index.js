import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./Pages/sharedLayout";
import { AllInvoices } from "./Pages";
import ViewInvoice from "./Pages/viewInvoice";
import InvoiceContainer from "./Components/invoiceContainer";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SharedLayout />,
//     children: [
//       {
//         path: "invoices",
//         element: <AllInvoices />,
//       },
//       {
//         path: "invoices/:id",
//         element: <ViewInvoice />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
