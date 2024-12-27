import { createContext } from "react";
import axios from 'axios';

export const GetDataContext = createContext({});

export const GetDataProvider = ({ children }) => {

    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }

    const handleGetData = async (method, url, config, headers) => {
        try {
            const result = await axios({ method, url, ...config, headers });
            return await result.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GetDataContext.Provider value={{ handleGetData }}>
            {children}
        </GetDataContext.Provider>
    );
}