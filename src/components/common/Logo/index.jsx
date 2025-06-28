import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";
import { LogoContainer } from "./style";

const Logo = () => {
  const path = "/home";

  return (
    <Link to={path}>
      <LogoContainer>
        <img src={logo} alt="Logo" />
        <span>AtendeBem</span>
      </LogoContainer>
    </Link>
  );
};

export default Logo;
