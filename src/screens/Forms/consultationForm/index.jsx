import Navbar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import {
  AuthButtonWrapper,
  ConsultationFormWrapper,
  LogoWrapper,
} from "./style";
import AuthButton from "@/components/common/AuthButton";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/InputForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { useContext } from "react";
import { FormConsultationContext } from "@/Context/FormsContext/FormConsultationContext/exports";

const ConsultationForm = () => {
  const { formConsultation, handleSubmit, handleInputChange } = useContext(
    FormConsultationContext
  );

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
            value={formConsultation.reason_for_consultation}
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
            value={formConsultation.symptoms}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            value={formConsultation.date_time}
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
            value={formConsultation.prescribed_medication}
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
            value={formConsultation.medical_recommendations}
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
            value={formConsultation.doctor_observations}
            handleInput={handleInputChange}
            multiline={true}
          />
        </SectionTitleBox>

        <FormButtons onSubmit={handleSubmit} />
      </FormCompleted>
    </ConsultationFormWrapper>
  );
};

export default ConsultationForm;
