import { useSelector } from "react-redux";
import InvoiceContainer from "./Components/invoiceContainer";


function App() {
  const {theme} = useSelector((store) => store.allInvoices)
  return (
    <div className="App" data-theme={theme}>
      <InvoiceContainer/>
    </div>
  );
}

export default App;
