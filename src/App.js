import { useSelector } from "react-redux";
import InvoiceContainer from "./Components/invoiceContainer";
import Navbar from "./Components/navbar";

function App() {
  const themeState = useSelector((state) => state.allInvoices.theme);
  return (
    <div className="App" data-theme={themeState}>
      <Navbar />
      <InvoiceContainer />
    </div>
  );
}

export default App;
