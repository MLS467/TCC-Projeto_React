import axios from "axios";
import { toast } from "react-toastify";

export const UserRequest = async (email, password) => {
  try {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_API_LOGIN_ENDPOINT
    }`;
    const response = await axios.post(endpoint, { email, password });

    return response.data;
  } catch {
    return false;
  }
};

export const UserLogout = async (id, token) => {
  try {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}${
      import.meta.env.VITE_API_LOGOUT_ENDPOINT
    }/${id}`;
    const result = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!result) throw new Error("Erro ao tentar realizar o logout");

    toast.success("Logout realizado com sucesso");
  } catch (error) {
    console.error(error.message);
    toast.error("Erro ao tentar realizar o logout");
  }
};

export const setUserLocalStorage = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const getUSerLocalStorage = () => {
  const user = localStorage.getItem("data");

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch (error) {
    console.error("Erro ao tentar ler do localStorage", error);
    return null;
  }
};
