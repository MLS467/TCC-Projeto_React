import { Link } from "react-router-dom";
import { AuthButtonContainer, LoginButton } from "./style";
import { MdLogin, MdAccountCircle } from "react-icons/md";
import useAuth from "../../../Hook/useAuth";

const AuthButton = ({ title, type, path }) => {
  const { logout } = useAuth();

  const getIcon = () => {
    if (type === "login") return <MdLogin />;
    return <MdLogin />; // default icon
  };

  return (
    <AuthButtonContainer>
      {type === "logout" && (
        <LoginButton onClick={logout}>
          {getIcon()}
          {title}
        </LoginButton>
      )}

      {type === "login" && (
        <Link to={path} style={{ textDecoration: "none" }}>
          <LoginButton>
            {getIcon()}
            {title}
          </LoginButton>
        </Link>
      )}

      {type !== "login" && (
        <Link to="#">
          <MdAccountCircle
            style={{
              fontSize: 25,
              color: "#aeb6c1",
              background: "#f5f8fc",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        </Link>
      )}
    </AuthButtonContainer>
  );
};

export default AuthButton;
