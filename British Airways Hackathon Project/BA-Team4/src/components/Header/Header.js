import { Link } from "react-router-dom";
import "./Header.scss";
import Menu from "../../assets/icons/Menu.svg";
import Logo from "../../assets/logo/BAlogo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="BA Logo" />
      </Link>

      <img className="header__menu" src={Menu} alt="Menu Icon" />
    </div>
  );
};

export default Header;
