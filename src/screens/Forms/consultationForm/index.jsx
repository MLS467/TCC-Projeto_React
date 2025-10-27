import PrimaryButton from "@/components/common/CommonButton";
import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import {
  ConsultationFormWrapper,
  ViewDataButtonWrapper,
  HistoryButtonWrapper,
  HeaderContainer,
} from "./style";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/inputForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { useContext } from "react";
import { FormConsultationContext } from "@/Context/FormsContext/FormConsultationContext/exports";
import { palette } from "@/constant/colors";
import { useNavigate } from "react-router-dom";
import { FiEye, FiFileText } from "react-icons/fi";
import { FaBed } from "react-icons/fa";
import { toast } from "sonner";
import { ChildRequestContext } from "@/Context/Service/ChildRequestContext";

const ConsultationForm = () => {
  const navigate = useNavigate();
  const { api } = useContext(ChildRequestContext);
  const {
    formConsultation,
    handleSubmit,
    handleInputChange,
    handleViewData,
    isLoadingPatientData,
    patientData,
    cancelForm,
    bedRequested,
    setBedRequested,
    bedNumber,
    setBedNumber,
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

  const handleAddBed = async () => {
    // Extrair ID do usuário
    const userId = patientData?.data?.user?.id;

    if (!userId) {
      toast.error("ID do usuário não encontrado!");
      return;
    }

    try {
      // Fazer requisição para adicionar leito usando axios
      const response = await api.post("/bed-with-patient", {
        user_id: userId,
      });

      if (response.status === 200) {
        const responseData = response.data;
        const bedNumber =
          responseData?.bed?.number_bed ||
          responseData?.bed?.number_bed ||
          "N/A";

        setBedNumber(bedNumber);
        setBedRequested(true);

        // Verificar se há uma mensagem customizada na resposta
        if (responseData?.message) {
          toast.success(responseData.message);
        } else {
          toast.success(
            `Leito solicitado com sucesso! O paciente ficará no leito número ${bedNumber}.`
          );
        }
      } else {
        throw new Error("Falha na requisição");
      }
    } catch (error) {
      console.error("Erro ao solicitar leito:", error);
      toast.error("Erro ao solicitar leito. Tente novamente!");
    }
  };

  return (
    <ConsultationFormWrapper>
      <HistoryButtonWrapper>
        <PrimaryButton
          onClick={handlePatientHistory}
          disabled={isLoadingPatientData || !patientData?.data?.user?.cpf}
          title="Histórico do Paciente"
        >
          <FiFileText size={24} />
        </PrimaryButton>
      </HistoryButtonWrapper>
      <ViewDataButtonWrapper>
        <PrimaryButton
          onClick={handleViewData}
          disabled={isLoadingPatientData}
          title="Ver Dados Coletados"
        >
          <FiEye size={24} />
        </PrimaryButton>
      </ViewDataButtonWrapper>

      <HeaderContainer>
        <CommonHeaderForm
          title="Formulário de Consulta Médica"
          description="Preencha os dados da consulta realizada"
          icon="medical_services"
          iconColor={palette[600]}
          showRequiredNotice={true}
        />
      </HeaderContainer>

      <FormCompleted>
        <SectionTitleBox title={"Informações do Paciente"} iconColor="green">
          <InputForm
            placeholder={"Nome não informado"}
            title={"Nome do Paciente"}
            type={"text"}
            name={"patient_name"}
            id={"patient_name"}
            required={false}
            borderColorInput={"green"}
            value={patientData?.data?.user?.name || ""}
            handleInput={() => {}} // Campo somente leitura
            disabled={true}
            readonly={true}
          />
          <InputForm
            placeholder={"Telefone não informado"}
            title={"Telefone do Paciente"}
            type={"text"}
            name={"patient_phone"}
            id={"patient_phone"}
            required={false}
            borderColorInput={"green"}
            value={patientData?.data?.user?.phone || ""}
            handleInput={() => {}} // Campo somente leitura
            disabled={true}
            readonly={true}
          />
          <InputForm
            placeholder={"CPF não informado"}
            title={"CPF do Paciente"}
            type={"text"}
            name={"patient_cpf"}
            id={"patient_cpf"}
            required={false}
            borderColorInput={"green"}
            value={patientData?.data?.user?.cpf || ""}
            handleInput={() => {}} // Campo somente leitura
            disabled={true}
            readonly={true}
          />
        </SectionTitleBox>

        <SectionTitleBox title={"Informações da Consulta"} iconColor="blue">
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

        <SectionTitleBox title={"Prescrição Médica"} iconColor="yellow">
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

        <div style={{ width: "40%" }}>
          <SectionTitleBox title={"Ações Adicionais"} iconColor="orange">
            <PrimaryButton
              onClick={handleAddBed}
              disabled={
                isLoadingPatientData || !patientData?.data?.id || bedRequested
              }
              title={
                bedRequested
                  ? `Leito ${bedNumber} solicitado`
                  : "Solicitar Leito para Paciente"
              }
              style={{
                backgroundColor: bedRequested ? "#6c757d" : "#007bff",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                fontSize: "14px",
                fontWeight: "500",
                cursor: bedRequested ? "not-allowed" : "pointer",
                marginBottom: "16px",
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                opacity: bedRequested ? 0.7 : 1,
                transition: "all 0.3s ease",
              }}
            >
              <FaBed size={14} />
              {bedRequested
                ? `Leito ${bedNumber} Solicitado`
                : "Solicitar Leito"}
            </PrimaryButton>
          </SectionTitleBox>
        </div>

        <FormButtons onSubmit={handleSubmit} onCancel={cancelForm} />
      </FormCompleted>
    </ConsultationFormWrapper>
  );
};

export default ConsultationForm;
