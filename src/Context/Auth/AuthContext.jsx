import { createContext, useEffect, useState } from "react";
import { getUSerLocalStorage, setUserLocalStorage, UserRequest } from "./Utils";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = getUSerLocalStorage();
        if (storedUser) {
            console.log("Usuário encontrado e configurado:", storedUser);
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        console.log("Estado de user foi atualizado:", user);
    }, [user]);

    const handleDataState = async (data) => {
        setUserLocalStorage(data);
        setUser(data);
    }

    const Authenticate = async (email, password) => {
        const result = await UserRequest(email, password);
        if (!result) return false;

        const data = {
            'token': result?.token,
            'role': result?.user?.role,
        }

        console.log(data);
        handleDataState(data);

        return true;
    }

    const logout = () => {
        setUserLocalStorage(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={user ? { user, Authenticate, logout } : { user, Authenticate, logout }}>
            {children}
        </AuthContext.Provider >
    );
}
