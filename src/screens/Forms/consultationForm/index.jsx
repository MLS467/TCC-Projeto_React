import Navbar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import PrimaryButton from "@/components/common/CommonButton";
import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import {
  AuthButtonWrapper,
  ConsultationFormWrapper,
  LogoWrapper,
  ViewDataButtonWrapper,
  HistoryButtonWrapper,
} from "./style";
import AuthButton from "@/components/common/AuthButton";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/InputForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { useContext } from "react";
import { FormConsultationContext } from "@/Context/FormsContext/FormConsultationContext/exports";
import { palette } from "@/constant/colors";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { toast } from "sonner";

const ConsultationForm = () => {
  const navigate = useNavigate();
  const {
    formConsultation,
    handleSubmit,
    handleInputChange,
    handleViewData,
    isLoadingPatientData,
    patientData,
    cancelForm,
  } = useContext(FormConsultationContext);

  const handlePatientHistory = () => {
    // Extrair CPF da estrutura correta: patientData.data.user.cpf
    const cpf = patientData?.data?.user?.cpf;
    const id_patient = patientData?.data?.id;

    if (cpf) {
      navigate(`/medical-record/search/${cpf}?id_patient=${id_patient}`);
    } else {
      toast.error("CPF do paciente não encontrado!");
    }
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

      <CommonHeaderForm
        title="Formulário de Consulta Médica"
        description="Preencha os dados da consulta realizada"
        icon="medical_services"
        iconColor={palette[600]}
      />

      <div className="content-wrapper">
        <div className="header-content">
          <div className="title-section">
            {/* Título removido - agora está no CommonHeaderForm */}
          </div>
          <HistoryButtonWrapper>
            <PrimaryButton
              onClick={handlePatientHistory}
              disabled={isLoadingPatientData || !patientData?.data?.user?.cpf}
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.9rem",
                fontWeight: "600",
                padding: "12px 20px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                border: "none",
                color: "white",
                cursor:
                  isLoadingPatientData || !patientData?.data?.user?.cpf
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              <FiClock size={18} />
              {isLoadingPatientData ? "Carregando..." : "Histórico do Paciente"}
            </PrimaryButton>
          </HistoryButtonWrapper>
          <ViewDataButtonWrapper>
            <PrimaryButton
              onClick={handleViewData}
              disabled={isLoadingPatientData}
            >
              {isLoadingPatientData ? "Carregando..." : "Ver Dados Coletados"}
            </PrimaryButton>
          </ViewDataButtonWrapper>
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

        <FormButtons onSubmit={handleSubmit} onCancel={cancelForm} />
      </FormCompleted>
    </ConsultationFormWrapper>
  );
};

export default ConsultationForm;
