import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../Hook/useAuth";
import { toast } from "sonner";
import * as Yup from "yup";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const { Authenticate, user } = useAuth();

  const handleSubmit = async () => {
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
          console.log(data);
          const require = await Authenticate(res.email, res.password);
          if (!require) throw new Error("Email ou senha inválidos");
        } catch (err) {
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
    <LoginContext.Provider value={{ handleChange, handleSubmit, data, user }}>
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
