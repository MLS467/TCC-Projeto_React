import { createContext, useEffect, useState } from "react";
import { getUSerLocalStorage, setUserLocalStorage, UserRequest } from "./Utils";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (getUSerLocalStorage()) {
            setUser(getUSerLocalStorage());
        }
    }, []);

    const Authenticate = async (email, password) => {
        const result = await UserRequest(email, password);
        if (!result) return null;

        const data = {
            'token': result?.token,
            'role': result?.user?.role,
        }
        setUser(data);
        setUserLocalStorage(data);
    }

    const logout = () => {
        setUser(null);
        setUserLocalStorage(null);
    }


    return (
        <AuthContext.Provider value={{ ...user, Authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
}