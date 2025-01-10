import { createContext } from "react";
import axios from 'axios';

export const
    GetDataContext = createContext({});

export const GetDataProvider = ({ children }) => {

    const handleGetData = async (method, url, data = {}, config) => {

        const headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }

        try {
            const result = await axios({ method, url, data, headers, ...config });
            if (!result.data) {
                throw Error(result.message);
            }

            return result.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <GetDataContext.Provider value={{ handleGetData }}>
            {children}
        </GetDataContext.Provider>
    );
}