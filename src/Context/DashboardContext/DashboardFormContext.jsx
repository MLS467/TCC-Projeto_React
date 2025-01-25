import { createContext } from "react";



export const DashboardFormContext = createContext({});


export const DashboardFormProvider = ({ children }) => {

    const [form, setForm] = useState({ "role": "attendant", user: { name: "", age: "" } }); // estado para armazenar os dados do formulário


    // função para controlar o tipo de requisição
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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



    return (
        <DashboardFormContext.Provider value={{}}>
            {children}
        </DashboardFormContext.Provider>
    );
}