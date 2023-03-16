import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout, {loader as rootLoader} from "./Pages/sharedLayout";
import { AllInvoices, ViewInvoice } from "./Pages";
import App from "./App";
import { apiSlice } from "./Features/API/apiSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <AllInvoices />,
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
