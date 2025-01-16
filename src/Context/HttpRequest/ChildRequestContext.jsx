import { createContext } from "react";
import axios from 'axios';

export const ChildRequestContext = createContext({});

export const ChildRequestProvider = ({ children }) => {

    const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL
    });

    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return (
        <ChildRequestContext.Provider value={{ api }}>
            {children}
        </ChildRequestContext.Provider>
    );
}