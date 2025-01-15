import { createContext } from "react";
import axios from 'axios';

export const ChildRequestContext = createContext({});

export const ChildRequestProvider = ({ children }) => {
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'accept': 'application/json',
    // }

    const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL
    })


    return (
        <ChildRequestContext.Provider value={{ api }}>
            {children}
        </ChildRequestContext.Provider>
    );
}