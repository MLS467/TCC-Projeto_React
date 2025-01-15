import axios from "axios";

export const UserRequest = async (email, password) => {

    try {
        const endpoint = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_LOGIN_ENDPOINT}`
        const response = await axios.post(endpoint, { email, password });

        return response.data;
    } catch (error) {
        return null;
    }
}

export const setUserLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
}

export const getUSerLocalStorage = () => {
    const user = localStorage.getItem("data");

    if (!user) return null;

    return user ? JSON.parse(user) : null;
}