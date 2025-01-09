import React, { useState } from 'react';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import InputLogin from '../../components/InputLogin/InputLogin';
import { ButtonRow } from '../../components/FormGlobal/Form.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
const FormConsultation = () => {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Foi");
    }
    console.log(form);

    const date = new Date().toLocaleDateString().split('/').reverse().join('-');
    const hours = new Date().toLocaleTimeString();

    return (
        <form onSubmit={handleSubmit}>
            <FormGlobal>
                <h1>Formulário de Consulta Médica</h1>
                <FormSectionGlobal legends="Informações Básicas">
                    <FormRowGlobal>
                        <InputLogin handleChange={handleChange} type="text" name="reason_for_consultation" size="l" placeholder="Motivo da Consulta" />
                        <InputLogin handleChange={handleChange} type="text" name="symptoms" size="l" placeholder="Sintomas" />
                        <InputLogin handleChange={handleChange} type="datetime-local" name="date_time" value={`${date}T${hours}`} size="xl" placeholder="Data e Hora" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                <FormSectionGlobal legends="Prescrição Médica">
                    <FormRowGlobal>
                        <InputLogin handleChange={handleChange} type="text" name="prescribed_medication" size="l" placeholder="Medicação Prescrita" />
                        <InputLogin handleChange={handleChange} type="text" name="medical_recommendations" size="l" placeholder="Recomendações Médicas" />
                        <InputLogin handleChange={handleChange} type="text" name="doctor_observations" size="l" placeholder="Observações do Médico" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                <FormSectionGlobal legends="Encaminhamentos e Procedimentos">
                    <FormRowGlobal>
                        <InputLogin handleChange={handleChange} type="text" name="performed_procedures" size="l" placeholder="Procedimentos Realizados" />
                        <InputLogin handleChange={handleChange} type="text" name="diagnosis" size="l" placeholder="Diagnóstico" />
                        <InputLogin handleChange={handleChange} type="text" name="additional_notes" size="l" placeholder="Observação" />
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

export default FormConsultation;
