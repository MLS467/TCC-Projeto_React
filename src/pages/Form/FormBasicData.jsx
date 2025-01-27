import React, { useState } from 'react';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import InputLogin from '../../components/InputLogin/InputLogin';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import SelectGlobal from '../../components/SelectGlobal/SelectGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import { ButtonRow } from '../../components/FormGlobal/Form.style';
import useRequest from "../../Hook/useRequest";
import { toast } from 'react-toastify';
import * as Yup from 'yup';


const FormBasicData = () => {

    const [formData, setFormData] = useState({
        city: '',
        neighborhood: '',
        street: '',
        name: '',
        birth: '',
        cpf: '',
        role: "patient",
        sex: 'masculino',
    });

    console.log(formData);

    const { api } = useRequest();


    const handlePatient = async (data) => {
        const endpointPatient = import.meta.env.VITE_API_USER_ENDPOINT;
        try {
            await api.post(endpointPatient, data);
            toast.success("Paciente cadastrado com sucesso!");
        } catch (err) {
            toast.error("Erro ao cadastrar paciente, tente novamente!");
        }
    }

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
        const cep = formData.cep;
        if (cep) {
            const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response?.data) {
                setFormData({ ...formData, city: response?.data?.localidade, neighborhood: response?.data?.bairro, street: response?.data?.logradouro });
            }
        }
    }

    const data = [
        { 'id': 1, 'name': 'masculino' },
        { 'id': 2, 'name': 'feminino' },
        { 'id': 3, 'name': 'outro' }
    ];

    return (
        <form onSubmit={handleSubmit}>
            <FormGlobal>
                <h1>Formulário de primeiro atendimento</h1>

                {/* Dados Pessoais */}
                <FormSectionGlobal legends="Dados Pessoais">
                    <FormRowGlobal>
                        <InputLogin
                            size="xxl"
                            handleChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Nome Completo"
                        />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <span>Data Nascimento:</span>
                            <InputLogin
                                size="m"
                                handleChange={handleChange}
                                type="date"
                                required
                                name="birth"
                            />
                        </div>
                        <InputLogin
                            size="l"
                            handleChange={handleChange}
                            type="text"
                            required
                            name="cpf"
                            placeholder="CPF"
                        />
                        <InputLogin
                            size="l"
                            handleChange={handleChange}
                            type="text"
                            required
                            name="place_of_birth"
                            placeholder="Cidade Natal"
                        />
                        <SelectGlobal data={data} size="l" text="Gênero" handleChange={handleChange} name="sex" />

                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Contato */}
                <FormSectionGlobal legends="Contato">
                    <FormRowGlobal>
                        <InputLogin
                            size="xxl"
                            handleChange={handleChange}
                            type="text"
                            name="email"
                            placeholder="E-mail"
                        />
                        <InputLogin
                            size="l"
                            handleChange={handleChange}
                            type="tel"
                            name="phone"
                            placeholder="Telefone"
                        />

                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Endereço */}
                <FormSectionGlobal legends="Endereço">
                    <FormRowGlobal>
                        <InputLogin
                            size="xxl"
                            onBlur={handleCep}
                            handleChange={handleChange}
                            type="text"
                            required
                            name="cep"
                            placeholder="CEP"
                        />
                        <InputLogin
                            size="l"
                            handleChange={handleChange}
                            type="text"
                            required
                            name="city"
                            value={formData.city}
                            placeholder="Cidade"
                        />
                        <InputLogin
                            size="l"
                            handleChange={handleChange}
                            type="text"
                            name="neighborhood"
                            value={formData.neighborhood}
                            placeholder="Bairro"
                        />
                        <InputLogin
                            size="xxl"
                            handleChange={handleChange}
                            type="text"
                            name="street"
                            value={formData.street}
                            placeholder="Rua"
                        />
                        <InputLogin
                            size="xs"
                            handleChange={handleChange}
                            type="text"
                            name="block"
                            placeholder="Bloco"
                        />
                        <InputLogin
                            size="s"
                            handleChange={handleChange}
                            type="text"
                            name="apartment"
                            placeholder="Apartamento"
                        />
                    </FormRowGlobal>
                </FormSectionGlobal>



                {/* Botões */}
                <ButtonRow>
                    <BtnGlobal
                        size="l"
                        type="submit"
                        btnBgColor="#1e8bcc"
                        btnColor="#fff"
                        text="Enviar"
                    />
                    <BtnGlobal
                        size="l"
                        btnBgColor="#5ce4d4"
                        btnColor="#fff"
                        text="Cancelar"
                    />
                </ButtonRow>
            </FormGlobal>
        </form>


    );
};


export default FormBasicData;
