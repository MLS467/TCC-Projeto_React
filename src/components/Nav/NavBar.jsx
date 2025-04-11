import { useEffect, useState } from "react";
import { LogoContainer, NavBarStyle } from "./NavBar.Style";
import logo from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import BtnLinkDefault from "../ButtonLinkDefault/BtnLinkDefault";
import ButtonAnimation from "../ButtonAnimation/ButtonAnimation";
import ScrollLink_ from "./ScrollLink/ScrollLink";

const NavBar = () => {
  // FAZER UM CONTEXT PARA TIRAR A LÓGICA DO COMPONENTE E COLOCAR NO CONTEXT

  const [control, setControl] = useState(0);
  const location = useLocation().pathname;
  const { logout } = UseAuth();

  useEffect(() => {
    showLoginButton();
  }, [location]);

  const showLoginButton = () => {
    if (location === "/login") {
      setControl(0);
    } else if (location === "/") {
      setControl(2);
    } else {
      setControl(1);
    }
  };

  const renderButton = () => {
    if (control === 0) {
      return null;
    } else if (control === 1) {
      return <ButtonAnimation text="Logout" action={logout} />;
    } else {
      return <BtnLinkDefault text="Login" path="/login" />;
    }
  };

  return (
    <NavBarStyle>
      <LogoContainer>
        <img src={logo} alt="logo" width={"70px"} />
        <Link to="/">
          <h1>AtendeBem</h1>
        </Link>
      </LogoContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center !important",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "500px",
            height: "100%",
            margin: "0 10px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ScrollLink_ id="Container_oferece" title="O que oferecemos" />
          <ScrollLink_ id="Container_sobre" title="Sobre Nós" />
          <ScrollLink_ id="Container_teste1" title="Nossos Serviços" />
        </div>

        {renderButton()}
      </div>
    </NavBarStyle>
  );
};

export default NavBar;
