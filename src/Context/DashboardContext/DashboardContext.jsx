import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChildRequestContext } from "../Service/ChildRequestContext";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {

    const { api } = useContext(ChildRequestContext);

    const [data, setData] = useState([] || null); // estado para armazenar os dados
    const [tipo, setTipo] = useState(null); // estado para controlar o tipo de requisição
    const [form, setForm] = useState({ "role": "attendant", user: { name: "", age: "" } }); // estado para armazenar os dados do formulário


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


    useEffect(() => {
        requestControle(form.role);
    }, [form.role])

    // função para controlar o tipo de requisição
    const requestControle = (tipo) => {
        setTipo(tipo);
    }

    // função para controlar o tipo de requisição
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // função para deletar um registro
    const requestDelete = async (id, type) => {

        try {
            const endopoint = `/${type}/${id}`;
            const result = await api.delete(endopoint);

            if (result.status !== 200) {
                throw new Error("Erro ao deletar registro!");
            }
            let datalist = data;
            handleData(datalist.data.filter((item) => item.id !== id));
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

    // função para adicionar um registro
    const requestAdd = async (event) => {
        event.preventDefault();
        const endopoint = `/${tipo}`;

        const result = await api.post(endopoint, form);

        if (!result.status === 201) {
            toast.error("Erro ao adicionar registro!");
            return false;
        }

        toast.success("Registro adicionado com sucesso!");
        window.location.href = `/dashboard/${tipo}`;
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
        <DashboardContext.Provider value={{ updateTitle, requestDelete, data, requestControle, tipo, handleChange, form, requestAdd }}>
            {children}
        </DashboardContext.Provider>
    );
}