import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { useDispatch, useSelector} from "react-redux";
import {toggleLight, toggleDark} from "../Features/AllInvoices/allInvoiceSlice";

const Navbar = () => {
  const themeState = useSelector((state) => state.allInvoices.theme);
    
  const dispatch = useDispatch();

  const handleClick = () => {
    if (themeState === 'light'){
        dispatch(toggleDark())
        console.log(themeState)
    }
    else {
        dispatch(toggleLight());
        console.log(themeState);
    }
}

  return (
    <span className="navbar">
      <Logo />
      <div className="toggle-container">
        <button className="themeToggle" onClick={()=>
        handleClick()}>
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
