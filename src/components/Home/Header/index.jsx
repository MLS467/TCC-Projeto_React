import NavBar from "../../common/NavBar";
import Logo from "../../common/Logo";
import {
  HeaderContainer,
  HeaderContent,
  LinkContainer,
  UserActionContainer,
} from "./style.jsx";
import AuthButton from "../../common/AuthButton/index.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavBar>
          <Logo />

          <LinkContainer>
            <ul className="nav-links">
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#description-section">Sobre-nós</a>
              </li>
              <li>
                <a href="#footer">Contato</a>
              </li>
            </ul>
          </LinkContainer>

          <UserActionContainer className="user-actions">
            <AuthButton title="Login" type="login" path="/login" />
          </UserActionContainer>
        </NavBar>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
