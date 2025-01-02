import React, { useContext, useState } from 'react';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import { FormContainer, FormSection, FormRow, ButtonRow } from './Form.style';
import InputLogin from '../../components/InputLogin/InputLogin';
import { GetDataContext } from '../../context/GetDataContext';
import Spinner from '../../components/Spinner/Spinner';

const Form = () => {
    const [formData, setFormData] = useState({
        Cidade: '', Bairro: '', Rua: ''
    });
    const [control, setControl] = useState();

    const { handleGetData } = useContext(GetDataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleCep = async () => {
        setControl(false);
        const cep = formData.Cep;
        const response = await handleGetData("GET", `https://viacep.com.br/ws/${cep}/json/`);
        if (response) {
            setFormData({ ...formData, Cidade: response.localidade, Bairro: response.bairro, Rua: response.logradouro });
            setControl(true);
        }
    }
    console.log(formData);


    return (
        <form onSubmit={handleSubmit}>

            <FormContainer>
                <h1>Formulário de primeiro atendimento</h1>
                {/* Dados pessoais */}
                <FormSection>
                    <legend>Dados Pessoais</legend>
                    <FormRow>
                        <InputLogin size='xxl' handleChange={handleChange} type="text" required name="Nome" placeholder="Nome" />
                        <InputLogin size='xxl' handleChange={handleChange} type="text" required name="Sobrenome" placeholder="Sobrenome" />
                        <InputLogin size='m' handleChange={handleChange} type="date" required name="Data de Nascimento" />
                    </FormRow>
                    <FormRow>
                        <InputLogin size='l' handleChange={handleChange} type="text" required name="Cpf" placeholder="CPF" />
                        <InputLogin size='xs' handleChange={handleChange} type="text" name="Sexo" placeholder="Sexo" />
                    </FormRow>
                </FormSection>

                {/* Contato */}
                <FormSection>
                    <legend>Contato</legend>
                    <FormRow>
                        <InputLogin size='xxl' handleChange={handleChange} type="email" required name="Email" placeholder="Email" />
                        <InputLogin size='l' handleChange={handleChange} type="tel" required name="Telefone" placeholder="Telefone" />
                        <InputLogin size='l' handleChange={handleChange} type="tel" required name="Telefone de Emergência" placeholder="Telefone de Emergência" />
                    </FormRow>
                </FormSection>

                {/* Endereço */}
                <FormSection>
                    <legend>Endereço</legend>
                    <FormRow>
                        <InputLogin size='xxl' onBlur={handleCep} handleChange={handleChange} type="text" required name="Cep" placeholder="CEP" />
                        <InputLogin size='l' handleChange={handleChange} type="text" required name="Cidade" value={formData.Cidade} placeholder="Cidade" />
                        <InputLogin size='l' handleChange={handleChange} type="text" name="Bairro" value={formData.Bairro} placeholder="Bairro" />
                        <InputLogin size='xxl' handleChange={handleChange} type="text" name="Rua" value={formData.Rua} placeholder="Rua" />
                        <InputLogin size='s' handleChange={handleChange} type="text" name="Bloco" placeholder="Bloco" />
                        <InputLogin size='s' handleChange={handleChange} type="text" name="Apt" placeholder="Apartamento" />
                    </FormRow>
                </FormSection>

                {/* Dados do responsável */}
                <FormSection>
                    <legend>Dados do Responsável</legend>
                    <FormRow>
                        <InputLogin size='xxl' type="text" name="Nome do responsável" placeholder="Nome do Responsável" />
                        <InputLogin size='l' type="text" name="Telefone do responsável" placeholder="Telefone do Responsável" />
                        <InputLogin size='xl' type="text" name="Parentesco" placeholder="Parentesco" />
                    </FormRow>
                </FormSection>

                {/* Botões */}
                <ButtonRow>
                    <BtnGlobal size="l" type='submit' btnBgColor="#1e8bcc" btnColor="#fff" text="Enviar" />
                    <BtnGlobal size="l" btnBgColor="#5ce4d4" btnColor="#fff" text="Cancelar" />
                </ButtonRow>
            </FormContainer>
        </form>

    );
};


export default Form;
