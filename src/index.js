import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./Pages/sharedLayout";
import { AllInvoices, ViewInvoice } from "./Pages";
import App from "./App";
import { Empty } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/invoices",
        element: <AllInvoices />,
        errorElement: <Empty />,
      },
      
      {
        path: "invoices/:id",
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
