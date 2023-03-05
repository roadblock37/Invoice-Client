import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/AllInvoices/allInvoiceSlice";
const Navbar = () => {
  const { theme } = useSelector((store) => store.allInovices);
  const dispatch = useDispatch();
  return (
    <span className="navbar">
      <Logo />
      <div className="toggle-container">
        <button className="themeToggle">
          <Moon />
        </button>
        <div className="divider">
          <img
            src="./image-avatar.jpg"
            alt="avatar"
            className="avatar"
            height="32px"
            width="32px"
          />
        </div>
      </div>
    </span>
  );
};

export default Navbar;
