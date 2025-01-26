import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChildRequestContext } from "../Service/ChildRequestContext";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {

    const { api } = useContext(ChildRequestContext);

    const [data, setData] = useState([]); // estado para armazenar os dados
    const [tipo, setTipo] = useState(null); // estado para controlar o tipo de requisição


    // função para armazenar os dados
    const handleData = (data) => {
        setData(data);
    }

    // use effect para fazer a requisição dos dados
    useEffect(() => {
        (async () => {
            if (!tipo) return;
            const resultRequest = await api.get(`/${tipo}`);
            handleData(resultRequest.data);
        })();
    }, [tipo]);


    // função para controlar o tipo de requisição
    const requestControle = (tipo) => {
        setTipo(tipo);
    }

    // função para deletar um registro
    const requestDelete = async (id, type) => {

        try {
            const endopoint = `/${type}/${id}`;
            const result = await api.delete(endopoint);

            if (result.status !== 200) {
                throw new Error("Erro ao deletar registro!");
            }
            setData((prevData) => ({
                ...prevData,
                data: prevData.data.filter((item) => item.id !== id),
            }));

            toast.success("Registro deletado com sucesso!");

        } catch (error) {
            toast.error(error.message);
        }
    }

    // função para editar um registro
    const requestEdit = async (id, type) => {
        const endopoint = `/${type}/${id}`;
        alert(`editado o registro de id: ${id} do tipo ${type}`);

    }



    // atualiza o titulo da listagem
    const updateTitle = () => {
        let type;
        if (tipo === 'doctor')
            type = 'Médicos';
        else if (tipo === 'attendant')
            type = 'Atendentes';
        else if (tipo === 'nurse')
            type = 'Enfermeiros';
        else if (tipo === 'consultation')
            type = 'Consultas';
        return type;
    }


    return (
        <DashboardContext.Provider value={{ updateTitle, requestDelete, data, requestControle, tipo }}>
            {children}
        </DashboardContext.Provider>
    );
}