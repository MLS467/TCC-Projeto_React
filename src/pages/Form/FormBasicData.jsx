import React, { useEffect, useState } from 'react';
import useRequest from "../../Hook/useRequest";
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import NewInput from './NewInput/NewInput';
import { Container, ContainerForm, Option, Select } from './NewInput/NewInput.style';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import ButtonForm from './NewInput/ButtonForm/ButtonForm';
import { ButtonFormContainer, ButtonFormDiv } from './NewInput/ButtonForm/ButtonForm.style';


const FormBasicData = () => {

    const { api } = useRequest();

    const defaultForm = {
        birth_city: "",
        birth: null,
        city: "",
        cpf: "",
        current_city: "",
        email: "",
        first_name: "",
        last_name: "",
        name: " ",
        neighborhood: "",
        phone: "",
        role: "",
        sex: "",
        street: "",
        zip_code: "",
        role: "patient",
    }

    const handlePatient = async (data) => {
        const endpointPatient = import.meta.env.VITE_API_USER_ENDPOINT;
        try {
            await api.post(endpointPatient, data);
            toast.success("Paciente cadastrado com sucesso!");
            setFormData(defaultForm);
        } catch (err) {
            toast.error("Erro ao cadastrar paciente, tente novamente!");
        }
    }


    const ClearForm = () => {
        setFormData(defaultForm);
    }

    const [formData, setFormData] = useState(defaultForm);

    useEffect(() => {
        setFormData(prevForm => ({
            ...prevForm,
            name: `${prevForm.first_name} ${prevForm.last_name}`
        }));
    }, [formData.first_name, formData.last_name]);


    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();


        const schema = Yup.object().shape({
            name: Yup.string().required("O nome é obrigatório").max(255, "O nome deve ter no máximo 255 caracteres").min(3, "O nome deve ter no mínimo 3 caracteres"),
            email: Yup.string().email("E-mail inválido").required("O e-mail é obrigatório").max(255, "O e-mail deve ter no máximo 255 caracteres"),
            phone: Yup.string().required("O telefone é obrigatório").matches(/^\d{10,15}$/, "O telefone deve ter entre 10 e 15 dígitos"),
            cpf: Yup.string().required("O CPF é obrigatório").matches(/^\d{11}$/, "O CPF deve ter 11 dígitos"),
            sex: Yup.string().required("O sexo é obrigatório").oneOf(["masculino", "feminino", "outro"], "Sexo inválido"),
            place_of_birth: Yup.string().nullable().max(255, "O local de nascimento deve ter no máximo 255 caracteres"),
            city: Yup.string().required("A cidade é obrigatória").max(255, "A cidade deve ter no máximo 255 caracteres"),
            neighborhood: Yup.string().nullable().max(255, "O bairro deve ter no máximo 255 caracteres"),
            street: Yup.string().nullable().max(255, "A rua deve ter no máximo 255 caracteres"),
            block: Yup.string().nullable().max(50, "O bloco deve ter no máximo 50 caracteres"),
            apartment: Yup.string().nullable().max(50, "O apartamento deve ter no máximo 50 caracteres"),
        });

        schema.validate(formData, { abortEarly: false })
            .then((res) => {
                handlePatient(res);
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleCep = async () => {
        const cep = formData.zip_code;
        if (cep) {
            const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response?.data) {
                setFormData({ ...formData, city: response?.data?.localidade, neighborhood: response?.data?.bairro, street: response?.data?.logradouro });
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <ContainerForm>
                <FormGlobal>
                    <h1>Formulário de primeiro atendimento</h1>
                    <FormRowGlobal>
                        <FormSectionGlobal legends="Dados Pessoais">
                            <NewInput
                                action={handleChange}
                                value={formData.first_name}
                                placeholder="Digite o nome"
                                required={true}
                                label="Nome"
                                type="text"
                                name="first_name"
                                size="xl"
                            />

                            <NewInput
                                action={handleChange}
                                value={formData.last_name}
                                placeholder="Digite o Sobrenome"
                                required={true}
                                label="Sobrenome"
                                type="text"
                                name="last_name"
                                size="xl"
                            />

                            <NewInput
                                action={handleChange}
                                value={formData.cpf}
                                placeholder="Digite o CPF"
                                required={true}
                                label="CPF"
                                type="text"
                                name="cpf"
                                size="m"
                            />
                            <NewInput
                                action={handleChange}
                                value={formData.place_of_birth}
                                placeholder="Digite a cidade natal"
                                label="Cidade Natal"
                                type="text"
                                name="birth_city"
                                size="l"
                            />

                            <NewInput
                                action={handleChange}
                                value={formData.birth}
                                label="Data de nascimento"
                                required={true}
                                type="date"
                                name="birth"
                                size="m"
                            />

                            <Container $size="m">
                                <label htmlFor="sexo">Sexo:</label>

                                <Select
                                    onChange={handleChange}
                                    id="sexo"
                                    name="sex"
                                    defaultValue="null"
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    <Option value="null" disabled={true}>
                                        Escolher sexo
                                    </Option>
                                    <Option value="masculino">Masculino</Option>
                                    <Option value="feminino">Feminino</Option>
                                </Select>
                            </Container>
                        </FormSectionGlobal>
                    </FormRowGlobal>

                    <FormRowGlobal>
                        <FormSectionGlobal legends="Contato">
                            <NewInput
                                action={handleChange}
                                value={formData.email}
                                placeholder="Digite o email"
                                label="Email"
                                type="email"
                                name="email"
                                size="l"
                            />

                            <NewInput
                                action={handleChange}
                                value={formData.phone}
                                required={true}
                                placeholder="Digite o número de celular"
                                label="Celular"
                                type="text"
                                name="phone"
                                size="l"
                            />
                        </FormSectionGlobal>
                    </FormRowGlobal>

                    <FormRowGlobal>
                        <FormSectionGlobal legends="Endereço">
                            <NewInput

                                action={handleChange}
                                value={formData.zip_code}
                                search={handleCep}
                                required={true}
                                placeholder="Digite o CEP"
                                label="CEP"
                                type="text"
                                name="zip_code"
                                size="m"
                            />
                            <NewInput
                                action={handleChange}
                                value={formData.city}
                                required={true}
                                placeholder="Digite a cidade atual"
                                label="Cidade Atual"
                                type="text"
                                name="current_city"
                                size="m"
                            />
                            <NewInput
                                action={handleChange}
                                value={formData.neighborhood}
                                required={true}
                                placeholder="Digite o bairro"
                                label="Bairro"
                                type="text"
                                name="neighborhood"
                                size="l"
                            />
                            <NewInput
                                action={handleChange}
                                value={formData.street}
                                required={true}
                                placeholder="Digite a rua"
                                label="Rua"
                                type="text"
                                name="street"
                                size="l"
                            />
                            <NewInput
                                action={handleChange}
                                value={formData.block}
                                placeholder="Digite o bloco"
                                label="Bloco"
                                type="text"
                                name="block"
                                size="s"
                            />
                            <NewInput
                                action={handleChange}
                                value={formData.apartment}
                                placeholder="Digite o apto"
                                label="Apt"
                                type="text"
                                name="apartment"
                                size="s"
                            />

                            <ButtonFormContainer >
                                <ButtonFormDiv>
                                    <ButtonForm type={'submit'} text="Enviar" />
                                    <ButtonForm action={ClearForm} type={'reset'} text="Limpar" reset={true} />
                                </ButtonFormDiv>
                            </ButtonFormContainer>

                        </FormSectionGlobal>
                    </FormRowGlobal>
                </FormGlobal>
            </ContainerForm >
        </form>
    );
};


export default FormBasicData;
