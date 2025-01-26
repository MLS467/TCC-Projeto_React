import { createContext, useEffect, useState } from "react";
import useRequest from "../../Hook/useRequest";
import { toast } from 'react-toastify';
import * as Yup from 'yup';

export const DashboardFormContext = createContext({});

export const DashboardFormProvider = ({ children }) => {

    const { api } = useRequest();

    const [idAdministrator, setIdAdministrator] = useState(null);

    let getLocationId = JSON.parse(localStorage.getItem('data'))?.id || null;

    useEffect(() => {
        if (getLocationId) {
            const id_adm = atob(getLocationId);
            setIdAdministrator(id_adm);
        }
    }, [getLocationId]);

    const [form, setForm] = useState({ "id_administrator_fk": idAdministrator }); // estado para armazenar os dados do formulário
    console.log('form-->', form);



    useEffect(() => {
        if (idAdministrator) {
            setForm((prevForm) => ({ ...prevForm, id_administrator_fk: idAdministrator }));
        }
    }, [idAdministrator]);


    // função para controlar o form.role de requisição
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // função para adicionar um registro
    const requestAdd = async (event) => {
        event.preventDefault();

        // validação do formulário 
        const schema = Yup.object().shape({
            role: Yup.string().required("O papel é obrigatório").oneOf(["doctor", "nurse", "attendant"], "O papel deve ser: doctor, nurse ou attendant"),
            name: Yup.string().required("O nome é obrigatório").min(3, "O nome deve ter no mínimo 3 caracteres").max(100, "O nome deve ter no máximo 100 caracteres"),
            age: Yup.number().required("A idade é obrigatória").min(18, "A idade deve ser maior que 18").max(100, "A idade deve ser menor ou igual a 100"),
            email: Yup.string().email("E-mail inválido").required("O e-mail é obrigatório").max(150, "O e-mail deve ter no máximo 150 caracteres"),
            phone: Yup.string().required("O telefone é obrigatório").matches(/^\d{10,11}$/, "O telefone deve conter 10 ou 11 dígitos"),
            password: Yup.string().required("A senha é obrigatória").min(8, "A senha deve ter no mínimo 8 caracteres").max(20, "A senha deve ter no máximo 20 caracteres"),
            cpf: Yup.string().required("O CPF é obrigatório").matches(/^\d{11}$/, "O CPF deve conter exatamente 11 dígitos"),
            sex: Yup.string().required("O sexo é obrigatório").oneOf(["masculino", "feminino"], "O sexo deve ser masculino ou feminino"),
            place_of_birth: Yup.string().required("O local de nascimento é obrigatório").max(100, "O local de nascimento deve ter no máximo 100 caracteres"),
            city: Yup.string().required("A cidade é obrigatória").max(100, "A cidade deve ter no máximo 100 caracteres"),
            neighborhood: Yup.string().required("O bairro é obrigatório").max(100, "O bairro deve ter no máximo 100 caracteres"),
            street: Yup.string().required("A rua é obrigatória").max(150, "A rua deve ter no máximo 150 caracteres"),
            block: Yup.string().nullable().max(10, "O bloco deve ter no máximo 10 caracteres"),
            apartment: Yup.string().nullable().max(10, "O apartamento deve ter no máximo 10 caracteres"),
            crm: Yup.string().nullable().matches(/^CRM\d+$/, "O CRM deve começar com 'CRM' seguido de números").notRequired(),
            specialty: Yup.string().nullable().max(100, "A especialidade deve ter no máximo 100 caracteres").notRequired(),
            coren: Yup.string().nullable().matches(/^\d{8}$/, "O COREN deve conter exatamente 8 dígitos").notRequired(),
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais'),
        });

        schema.validate(form, { abortEarly: false })
            .then(async (res) => {

                const endpoint = `/${form.role}`;
                const result = await api.post(endpoint, res);
                if (result.status !== 201) {
                    toast.error("Erro ao adicionar registro!");
                    return false;
                }
                toast.success("Registro adicionado com sucesso!");
            })
            .catch((err) => {
                if (err.inner) {
                    err.inner.forEach((error) => {
                        toast.error(error.message);
                    });
                } else {
                    console.error("Erro inesperado:", err);
                    toast.error("Erro inesperado durante a validação.");
                }
            });
    }


    return (
        <DashboardFormContext.Provider value={{ form, handleChange, requestAdd }}>
            {children}
        </DashboardFormContext.Provider>
    );
}