import Navbar from "../../../components/common/NavBar";
import Logo from "../../../components/common/Logo";
import {
  AuthButtonWrapper,
  ConsultationFormWrapper,
  LogoWrapper,
} from "./style";
import AuthButton from "../../../components/common/AuthButton";
import FormCompleted from "../../../components/common/CommonForm/FormCompletd";
import SectionTitleBox from "../../../components/common/CommonForm/SectionForm";
import InputForm from "../../../components/common/CommonForm/InputForm";
import FormButtons from "../../../components/common/CommonForm/FormButton";
import { useEffect, useState } from "react";

const ConsultationForm = () => {
  const now = new Date();
  const formatted = now.toISOString().slice(0, 16);
  const [formConsultation, setFormConsultation] = useState({
    // Informações Básicas
    reason_for_consultation: "",
    symptoms: "",
    date_time: formatted,

    // Prescrição Médica
    prescribed_medication: "",
    medical_recommendations: "",
    doctor_observations: "",

    // Encaminhamentos e Procedimentos
    performed_procedures: "",
    diagnosis: "",
    additional_notes: "",
  });

  useEffect(() => {
    console.log(formConsultation);
  }, [formConsultation]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormConsultation({
      ...formConsultation,
      [name]: value,
    });
  };

  return (
    <ConsultationFormWrapper>
      <header>
        <Navbar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <div />
          <AuthButtonWrapper>
            <AuthButton title={"Logout"} type={"logout"} />
          </AuthButtonWrapper>
        </Navbar>
      </header>
      <div className="content-wrapper">
        <div>
          <h1>Formulário de Consulta Médica</h1>
          <span>Preencha os dados da consulta realizada</span>
        </div>
      </div>

      <FormCompleted>
        <span
          style={{
            padding: 32,
            color: "#f00",
            fontSize: "0.8rem",
            fontWeight: "600",
            textAlign: "right",
          }}
        >
          Os campos que possuem ( * ) são obrigatórios!
        </span>
        <SectionTitleBox title={"Informações Básicas"} iconColor="blue">
          <InputForm
            placeholder={"Descreva o motivo da consulta"}
            title={"Motivo da Consulta"}
            type={"text"}
            name={"reason_for_consultation"}
            id={"reason_for_consultation"}
            required={true}
            borderColorInput={"blue"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder={"Descreva os sintomas apresentados"}
            title={"Sintomas"}
            type={"text"}
            name={"symptoms"}
            id={"symptoms"}
            required={true}
            borderColorInput={"blue"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            value={formatted}
            placeholder={""}
            title="Data e Hora da Consulta"
            type="datetime-local"
            name="date_time"
            id={"date_time"}
            required={true}
            borderColorInput={"blue"}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        <SectionTitleBox title={"Prescrição Médica"} iconColor="red">
          <InputForm
            placeholder={"Liste os medicamentos prescritos"}
            title={"Medicamentos Prescritos"}
            type={"text"}
            name={"prescribed_medication"}
            id={"prescribed_medication"}
            required={false}
            borderColorInput={"red"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder={"Recomendações médicas para o paciente"}
            title={"Recomendações Médicas"}
            type={"text"}
            name={"medical_recommendations"}
            id={"medical_recommendations"}
            required={false}
            borderColorInput={"red"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder={"Observações do médico sobre a consulta"}
            title={"Observações do Médico"}
            type={"text"}
            name={"doctor_observations"}
            id={"doctor_observations"}
            required={false}
            borderColorInput={"red"}
            handleInput={handleInputChange}
            multiline={true}
          />
        </SectionTitleBox>

        <SectionTitleBox
          title="Encaminhamentos e Procedimentos"
          iconColor="green"
        >
          <InputForm
            placeholder="Descreva os procedimentos realizados"
            title="Procedimentos Realizados"
            type="text"
            name="performed_procedures"
            id="performed_procedures"
            required={false}
            borderColorInput={"green"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder="Diagnóstico médico"
            title="Diagnóstico"
            type="text"
            name="diagnosis"
            id="diagnosis"
            required={true}
            borderColorInput={"green"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder="Anotações adicionais sobre a consulta"
            title="Anotações Adicionais"
            type="text"
            name="additional_notes"
            id="additional_notes"
            borderColorInput={"green"}
            required={false}
            handleInput={handleInputChange}
            multiline={true}
          />
        </SectionTitleBox>

        <FormButtons
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
      </FormCompleted>
    </ConsultationFormWrapper>
  );
};

export default ConsultationForm;
