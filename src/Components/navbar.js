import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
const Navbar = () => {
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
