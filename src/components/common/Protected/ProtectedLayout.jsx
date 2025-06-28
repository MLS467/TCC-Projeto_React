import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth"; // Import default (correto)
import Spinner from "../../common/spinnerScreen";

const ProtectedLayout = ({ children }) => {
  const { user } = useAuth();
  const [isRedirecting, setIsRed] = useState(true);

  useEffect(() => {
    if (!user || !user?.token) {
      location.href = "/login";
    } else {
      setIsRed(false);
    }
  }, [user]);

  if (isRedirecting) {
    return (
      <Spinner
        message="Redirecionando para a página de login..."
        style={{ height: "100vh", width: "100vw" }}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedLayout;
