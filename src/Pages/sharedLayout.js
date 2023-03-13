import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { Navbar } from "../Components";

const SharedLayout = () => {
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
