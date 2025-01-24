import { createContext, useEffect, useState } from "react";



export const DashboardContext = createContext({});



export const DashboardProvider = ({ children }) => {

    const [data, setData] = useState([] || null);
    const [controle, setControle] = useState(null);

    const user = [
        { id: 1, user: { name: "João", age: 25 }, blood_type: "A+", blood_pressure: 120, heart_rate: 80, oxygen_saturation: 98, role: "doctor" },
    ]

    const handleData = (data) => {
        setData(data);
    }

    useEffect(() => {
        if (user) {
            handleData(user);
        }
    }, []);

    const requestControle = (controle) => {
        setControle(controle);
    }

    const requestDelete = async (id, type) => {
        const endopoint = `${import.meta.env.VITE_API_BASE_URL}/${type}/${id}`;
        console.log(`deletado o registro de id: ${id} do tipo ${type}`);
        alert("Deletou algo");
    }

    const requestEdit = async (id, type) => {
        const endopoint = `${import.meta.env.VITE_API_BASE_URL}/${type}/${id}`;
        console.log(`deletado o registro de id: ${id} do tipo ${type}`);
        alert("Editou algo");
    }

    return (
        <DashboardContext.Provider value={{ requestDelete, data, requestControle, controle }}>
            {children}
        </DashboardContext.Provider>
    );
}