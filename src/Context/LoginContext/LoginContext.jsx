import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import UseAuth from "../../Hook/UseAuth";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [spinner, setSpinner] = useState(false);
  const { Authenticate, user } = UseAuth();

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Insira um email válido")
        .required("Email é obrigatório"),
      password: Yup.string()
        .required("Senha é obrigatória")
        .min(6, "Senha deve ter no mínimo 6 caracteres"),
    });

    schema
      .validate(data, { abortEarly: false })
      .then(async (res) => {
        try {
          setSpinner(true);
          const require = await Authenticate(res?.email, res?.password);
          setSpinner(false);
          if (!require) throw new Error("Email ou senha inválidos");
        } catch (err) {
          setSpinner(false);
          toast.error(err.message || "Erro ao autenticar");
        }
      })
      .catch((err) => {
        if (err.inner) {
          err.inner.forEach((error) => {
            toast.error(error.message);
          });
        } else {
          toast.error("Email ou senha inválidos");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <LoginContext.Provider
      value={{ handleChange, handleSubmit, data, spinner, user }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
