import React, { useState } from 'react';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import InputLogin from '../../components/InputLogin/InputLogin';
import { ButtonRow } from '../../components/FormGlobal/Form.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import { useNavigate, useParams } from 'react-router-dom';
import ReturnGetData from '../../Context/ReturnGetData';

const FormConsultation = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { handleGetData } = ReturnGetData();

    const date = new Date().toLocaleDateString().split('/').reverse().join('-');
    const hours = new Date().toLocaleTimeString();

    const [form, setForm] = useState({
        patient_id: atob(id),
        date_time: `${date}T${hours}`,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const sendData = async (data) => {
        try {
            const endpoint = `${import.meta.env.VITE_API_BASE_URL}/consultation`;
            const response = handleGetData('POST', endpoint, data);
            if (!response) throw new Error('Erro ao enviar dados');
            // (MUDAR) - Adicionar um modal de sucesso
            return navigate('/success');
        } catch (error) {
            // (MUDAR) - Adicionar um modal de erro
            return alert(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(form);
    }


    return (
        <form onSubmit={handleSubmit}>
            <FormGlobal>
                <h1>Formulário de Consulta Médica</h1>
                <FormSectionGlobal legends="Informações Básicas">
                    <FormRowGlobal>
                        <InputLogin handleChange={handleChange} type="text" name="reason_for_consultation" size="l" placeholder="Motivo da Consulta" />
                        <InputLogin handleChange={handleChange} type="text" name="symptoms" size="l" placeholder="Sintomas" />
                        <InputLogin type="datetime-local" name="date_time" value={`${date}T${hours}`} size="xl" placeholder="Data e Hora" />
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
