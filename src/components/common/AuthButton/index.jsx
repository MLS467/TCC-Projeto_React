import { Link } from "react-router-dom";
import { AuthButtonContainer, AvatarCircle, LoginButton } from "./style";
import { MdLogin, MdAccountCircle } from "react-icons/md";
import useAuth from "../../../Hook/useAuth";
import { useEffect, useState } from "react";

const AuthButton = ({ title, type, path }) => {
  const { logout, user } = useAuth();
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(user ? user : "");
  }, [user]);

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
          {typeof userData.photo === "string" &&
          userData.photo.trim() !== "" ? (
            <AvatarCircle>
              {console.log(userData)}

              <img
                src={`${userData.photo}`}
                alt="avatar"
                title={userData.name}
              />
            </AvatarCircle>
          ) : (
            <MdAccountCircle
              style={{
                fontSize: 40,
                color: "#aeb6c1",
                background: "#f5f8fc",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
          )}
        </Link>
      )}
    </AuthButtonContainer>
  );
};

export default AuthButton;
