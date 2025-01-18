import axios from "axios";

export const UserRequest = async (email, password) => {

    try {
        const endpoint = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_LOGIN_ENDPOINT}`
        const response = await axios.post(endpoint, { email, password });

        return response.data;
    } catch (error) {
        return false;
    }
}

export const setUserLocalStorage = (data) => {
    console.log("Armazenando dados no localStorage:", data);
    localStorage.setItem("data", JSON.stringify(data));
}

export const getUSerLocalStorage = () => {
    const user = localStorage.getItem("data");

    if (!user) {
        console.log("Nenhum dado encontrado no localStorage");
        return null;
    }

    try {
        return JSON.parse(user);
    } catch (error) {
        console.error("Erro ao tentar ler do localStorage", error);
        return null;
    }
}