import React from 'react';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import InputLogin from '../../components/InputLogin/InputLogin';
import { ButtonRow } from '../../components/FormGlobal/Form.style';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
const Consultation = () => {

    const date = new Date().toLocaleDateString().split('/').reverse().join('-');
    const hours = new Date().toLocaleTimeString();

    return (
        <form>
            <FormGlobal>
                <h1>Formulário de consulta médica</h1>
                <FormSectionGlobal legends="Informações Básicas">
                    <FormRowGlobal>
                        <InputLogin type="text" size="l" placeholder="Motivo da Consulta" />
                        <InputLogin type="text" size="l" placeholder="Sintomas" />
                        <InputLogin type="datetime-local" value={`${date}T${hours}`} size="xl" placeholder="Data e Hora" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                <FormSectionGlobal legends="Prescrição Médica">
                    <FormRowGlobal>
                        <InputLogin type="text" size="l" placeholder="Medicação Prescrita" />
                        <InputLogin type="text" size="l" placeholder="Recomendações Médicas" />
                        <InputLogin type="text" size="l" placeholder="Observações do Médico" />
                    </FormRowGlobal>
                </FormSectionGlobal>

                <FormSectionGlobal legends="Encaminhamentos e Procedimentos">
                    <FormRowGlobal>
                        <InputLogin type="text" size="l" placeholder="Procedimentos Realizados" />
                        <InputLogin type="text" size="l" placeholder="Diagnóstico" />
                        <InputLogin type="text" size="l" placeholder="Observação" />
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

export default Consultation;
