import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Empty from "./Components/empty";
// import InvoiceContainer from "./Components/invoiceContainer";
// import Navbar from "./Components/navbar";
import { SharedLayout, AllInvoices, AddInvoice, ViewInvoice } from "./Pages";
function App() {
  const themeState = useSelector((state) => state.allInvoices.theme);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AllInvoices />} />
          <Route path="add-invoice" element={<AddInvoice />} />
          <Route path="view-invoice" element={<ViewInvoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
