import Navbar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import AuthButton from "@/components/common/AuthButton";
import { HeaderNavWrapper, LogoWrapper, AuthButtonWrapper } from "./style";

const HeaderNav = ({
  showAuthButton = true,
  authButtonTitle = "Logout",
  authButtonType = "logout",
}) => {
  return (
    <HeaderNavWrapper>
      <Navbar>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <div />
        {showAuthButton && (
          <AuthButtonWrapper>
            <AuthButton title={authButtonTitle} type={authButtonType} />
          </AuthButtonWrapper>
        )}
      </Navbar>
    </HeaderNavWrapper>
  );
};

export default HeaderNav;
