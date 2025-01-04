import React, { useState } from 'react';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import InputLogin from '../../components/InputLogin/InputLogin';
import { ButtonRow } from '../../components/FormGlobal/Form.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import CheckBoxGlobal from '../../components/CheckBox/CheckBoxGlobal';

const FormTriage = () => {

    const [form, setForm] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado!');
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    console.log(form);
    return (
        <form onSubmit={handleSubmit}>

            <FormGlobal>
                <h1>Formulário de Triagem</h1>
                {/* Sinais Vitais */}
                <FormSectionGlobal legends="Sinais Vitais">
                    <FormRowGlobal>
                        <InputLogin name="blood_pressure" handleChange={handleChange} size="l" type="text" placeholder="Pressão arterial (mmHg)" />
                        <InputLogin name="heart_rate" handleChange={handleChange} size="xl" type="text" placeholder="Frequência cardíaca (bpm)" />
                        <InputLogin name="body_temperature" handleChange={handleChange} size="l" type="text" placeholder="Temperatura corporal (°C)" />
                        <InputLogin name="saturation" handleChange={handleChange} size="l" type="text" placeholder="Saturação de oxigênio (%)" />
                    </FormRowGlobal>
                    <FormRowGlobal>
                        <InputLogin name="respiratory_rate" handleChange={handleChange} size="xl" type="text" placeholder="Frequência respiratória (rpm)" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Informações sobre a Dor */}
                <FormSectionGlobal legends="Informações sobre a Dor">
                    <FormRowGlobal>
                        <InputLogin name="location_of_pain" handleChange={handleChange} size="l" type="text" placeholder="Localização da dor" />
                        <InputLogin name="pain_type" handleChange={handleChange} size="xxl" type="text" placeholder="Tipo de dor (aguda, crônica, etc.)" />
                        <InputLogin name="pain_scale" handleChange={handleChange} size="l" type="text" placeholder="Escala de dor (0 a 10)" />
                        <InputLogin type="text" size="l" placeholder="Especialista Encaminhado" />

                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Histórico Clínico */}
                <FormSectionGlobal legends="Histórico Clínico">
                    <FormRowGlobal>
                        <InputLogin name="medication_in_use" handleChange={handleChange} size="l" type="text" placeholder="Medicamento em uso" />
                        <InputLogin name="chronic_illness" handleChange={handleChange} size="m" type="text" placeholder="Doenças crônicas" />
                        <InputLogin name="allergy" handleChange={handleChange} size="m" type="text" placeholder="Alergias" />
                        <InputLogin name="surgical_history" handleChange={handleChange} size="m" type="text" placeholder="Cirurgias recentes" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                {/* Outros Sintomas */}
                <FormSectionGlobal legends="Outros Sintomas">
                    <FormRowGlobal >
                        <FormRowGlobal>
                            <CheckBoxGlobal name="dificuldade_para_respirar" text="Dificuldade para respirar" handleChange={handleChange} />
                            <CheckBoxGlobal name="Nausea" text="Náusea" handleChange={handleChange} />
                            <CheckBoxGlobal name="vomito" text="vômito" handleChange={handleChange} />
                            <CheckBoxGlobal name="hemorragias" text="Hemorragias" handleChange={handleChange} />
                            <CheckBoxGlobal name="edema" text="Edema" handleChange={handleChange} />
                        </FormRowGlobal>
                    </FormRowGlobal>
                </FormSectionGlobal>

                <ButtonRow>
                    <BtnGlobal size="l" type='submit' btnBgColor="#1e8bcc" btnColor="#fff" text="Enviar" />
                    <BtnGlobal size="l" btnBgColor="#5ce4d4" btnColor="#fff" text="Cancelar" />
                </ButtonRow>
            </FormGlobal>

        </form>
    );


}

export default FormTriage;
