import { createContext, useEffect, useState } from "react";
import { getUSerLocalStorage, setUserLocalStorage, UserLogout, UserRequest } from "./Utils";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = getUSerLocalStorage();
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
    }, [user]);

    const handleDataState = async (data) => {
        setUserLocalStorage(data);
        setUser(data);
    }

    const Authenticate = async (email, password) => {
        const result = await UserRequest(email, password);

        if (!result) return false;

        const data = {
            'id': btoa(result?.user?.id),
            'token': result?.token,
            'role': result?.user?.role,
        }

        handleDataState(data);
        return true;
    }


    const logout = async () => {
        await UserLogout(atob(user?.id), user?.token);
        setUserLocalStorage(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={user ? { user, Authenticate, logout } : { user, Authenticate, logout }}>
            {children}
        </AuthContext.Provider >
    );
}
