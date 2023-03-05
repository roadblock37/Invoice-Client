import { useSelector } from "react-redux";
import InvoiceContainer from "./Components/invoiceContainer";
import Navbar from "./Components/navbar";

function App() {
  const theme = useSelector((store) => store.allInvoices);
  return (
    <div className="App" data-theme={{ theme: theme ? "dark" : "light" }}>
      <Navbar />
      <InvoiceContainer />
    </div>
  );
}

export default App;
