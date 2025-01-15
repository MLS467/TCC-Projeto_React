import React, { useEffect, useState } from 'react';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import InputLogin from '../../components/InputLogin/InputLogin';
import { ButtonRow } from '../../components/FormGlobal/Form.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import data from "../../Mock/Mocked.json";
import CheckBoxGlobal from '../../components/CheckBox/CheckBoxGlobal';
import SelectGlobal from '../../components/SelectGlobal/SelectGlobal';
import { useParams } from 'react-router-dom';
import UseRequest from '../../Hook/useRequest';


const FormTriage = () => {
    const { id } = useParams();

    const [form, setForm] = useState({
        blood_type: 'A+',
        user_id: atob(id),
    });

    const { api } = UseRequest();

    const handleForm = async (data) => {
        const endpoint = import.meta.env.VITE_API_PATIENT_ENDPOINT;
        const result = await api.post(endpoint, data);

        if (!result.status) {
            // (MUDAR) MUDAR PARA MODAL DE ERRO DEPOIS
            alert(result.message[0]);
        }
        // (MUDAR) MUDAR PARA MODAL DE ERRO DEPOIS
        alert(result.message);
    }

    console.log(form);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        handleForm(form);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormGlobal>
                <h1>Formulário de Triagem</h1>

                {/* Sinais Vitais */}
                <FormSectionGlobal legends="Sinais Vitais">
                    <FormRowGlobal>
                        <InputLogin name="blood_pressure" handleChange={handleChange} size="l" type="text" placeholder="Pressão arterial (mmHg)" />
                        <InputLogin name="heart_rate" handleChange={handleChange} size="xl" type="number" placeholder="Frequência cardíaca (bpm)" />
                        <InputLogin name="temperature" handleChange={handleChange} size="l" type="number" placeholder="Temperatura corporal (°C)" />
                        <InputLogin name="oxygen_saturation" handleChange={handleChange} size="l" type="number" placeholder="Saturação de oxigênio (%)" />
                    </FormRowGlobal>
                    <FormRowGlobal>
                        <InputLogin name="respiratory_rate" handleChange={handleChange} size="xl" type="number" placeholder="Frequência respiratória (rpm)" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Informações sobre a Dor */}
                <FormSectionGlobal legends="Informações sobre a Dor">
                    <FormRowGlobal>
                        <InputLogin name="chief_complaint" handleChange={handleChange} size="l" type="text" placeholder="Queixa principal" />
                        <InputLogin name="pain_type" handleChange={handleChange} size="xxl" type="text" placeholder="Tipo de dor (aguda, crônica, etc.)" />
                        <InputLogin name="pain_scale" handleChange={handleChange} size="l" type="number" placeholder="Escala de dor (0 a 10)" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Histórico Clínico */}
                <FormSectionGlobal legends="Histórico Clínico">
                    <FormRowGlobal>
                        <InputLogin name="sugery_history" handleChange={handleChange} size="m" type="text" placeholder="Histórico de cirurgias" />
                        <InputLogin name="allergy" handleChange={handleChange} size="m" type="text" placeholder="Alergias" />
                        <SelectGlobal
                            name="blood_type"
                            data={data.blood_type}
                            handleChange={handleChange}
                            value={form['blood_type'] || ''}
                            text="Tipo Sanguíneo"
                            size="250px"
                        />
                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Dados Emergenciais */}
                <FormSectionGlobal legends="Dados Emergenciais">
                    <FormRowGlobal>
                        <InputLogin name="emergency_phone" handleChange={handleChange} size="m" type="text" placeholder="Telefone de emergência" />
                        <InputLogin name="responsible_name" handleChange={handleChange} size="m" type="text" placeholder="Nome do responsável" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Outros Sintomas */}
                <FormSectionGlobal legends="Outros Sintomas">
                    <FormRowGlobal>
                        <CheckBoxGlobal name="difficulty_breathing" text="Dificuldade para respirar" handleChange={handleChange} />
                        <CheckBoxGlobal name="nausea" text="Náusea" handleChange={handleChange} />
                        <CheckBoxGlobal name="vomiting" text="Vômito" handleChange={handleChange} />
                        <CheckBoxGlobal name="bleeding" text="Hemorragias" handleChange={handleChange} />
                        <CheckBoxGlobal name="edema" text="Edema" handleChange={handleChange} />
                    </FormRowGlobal>
                </FormSectionGlobal>

                <ButtonRow>
                    <BtnGlobal size="l" type="submit" btnBgColor="#1e8bcc" btnColor="#fff" text="Enviar" />
                    <BtnGlobal size="l" btnBgColor="#5ce4d4" btnColor="#fff" text="Cancelar" />
                </ButtonRow>
            </FormGlobal>
        </form>

    );


}

export default FormTriage;
