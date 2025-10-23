import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import { HeaderContainer, TriageFormWrapper } from "./style";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/inputForm";
import CommonSelectInput from "@/components/common/CommonSelectInput";
import CheckBoxForm from "@/components/common/CommonForm/CheckBoxForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { useContext } from "react";
import { FormTriageContext } from "@/Context/FormsContext/FormTriageContext/exports";
import { palette } from "@/constant/colors";
import { medicalSpecialties } from "./medicalSpecialties";

const TriageForm = () => {
  const { formTriage, handleSubmit, handleInputChange, cancelForm } =
    useContext(FormTriageContext);

  return (
    <TriageFormWrapper>
      <HeaderContainer>
        <CommonHeaderForm
          title="Formulário de Triagem"
          description="Preencha os dados para avaliação médica"
          icon="assignment_ind"
          iconColor={palette[600]}
          showRequiredNotice={true}
        />
      </HeaderContainer>

      <FormCompleted>
        <SectionTitleBox title={"Sinais Vitais"} iconColor="blue">
          <InputForm
            placeholder={"Ex: 120/80"}
            title={"Pressão Arterial"}
            type={"text"}
            name={"blood_pressure"}
            id={"blood_pressure"}
            required={true}
            value={formTriage.blood_pressure}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 72 bpm"}
            title={"Frequência Cardíaca"}
            type={"text"}
            name={"heart_rate"}
            id={"heart_rate"}
            required={true}
            value={formTriage.heart_rate}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 36.5°C"}
            title={"Temperatura"}
            type={"text"}
            name={"temperature"}
            id={"temperature"}
            required={true}
            value={formTriage.temperature}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 98%"}
            title={"Saturação de Oxigênio"}
            type={"text"}
            name={"oxygen_saturation"}
            id={"oxygen_saturation"}
            required={true}
            value={formTriage.oxygen_saturation}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 16 rpm"}
            title={"Frequência Respiratória"}
            type={"text"}
            name={"respiratory_rate"}
            id={"respiratory_rate"}
            required={true}
            value={formTriage.respiratory_rate}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        <SectionTitleBox title={"Informações sobre a Dor"} iconColor="brown">
          <div
            style={{ display: "flex", gap: "18px", flexDirection: "column" }}
          >
            <InputForm
              placeholder={"Ex: aguda, crônica, latejante, queimação"}
              title={"Tipo de Dor"}
              type={"text"}
              name={"pain_type"}
              id={"pain_type"}
              required={false}
              value={formTriage.pain_type}
              handleInput={handleInputChange}
            />
            <InputForm
              placeholder={"De 0 a 10"}
              title={"Escala de Dor (0-10)"}
              type={"number"}
              name={"pain_scale"}
              id={"pain_scale"}
              min="0"
              max="10"
              required={false}
              value={formTriage.pain_scale}
              handleInput={handleInputChange}
            />
          </div>

          <InputForm
            placeholder={"Descreva a queixa principal do paciente"}
            title={"Queixa Principal"}
            type={"text"}
            name={"chief_complaint"}
            id={"chief_complaint"}
            required={true}
            value={formTriage.chief_complaint}
            handleInput={handleInputChange}
            multiline={true}
          />
        </SectionTitleBox>

        <SectionTitleBox title="Histórico Clínico" iconColor="green">
          <InputForm
            placeholder="Descreva cirurgias anteriores"
            title="Histórico de Cirurgias"
            type="text"
            name="surgery_history"
            id="surgery_history"
            required={false}
            value={formTriage.surgery_history}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder="Liste alergias conhecidas"
            title="Alergias"
            type="text"
            name="allergy"
            id="allergy"
            required={false}
            value={formTriage.allergy}
            handleInput={handleInputChange}
            multiline={true}
          />
        </SectionTitleBox>

        <SectionTitleBox title="Dados Emergenciais" iconColor="#ff9500">
          <InputForm
            placeholder="Telefone de emergência"
            title="Telefone de Emergência"
            type="text"
            name="emergency_phone"
            id="emergency_phone"
            required={true}
            value={formTriage.emergency_phone}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder="Nome do responsável"
            title="Nome do Responsável"
            type="text"
            name="responsible_name"
            id="responsible_name"
            required={true}
            value={formTriage.responsible_name}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        <SectionTitleBox title="Outros Sintomas" iconColor="#6366f1">
          <CheckBoxForm
            title="Dificuldade para Respirar"
            name="difficulty_breathing"
            id="difficulty_breathing"
            checked={formTriage.difficulty_breathing}
            handleInput={handleInputChange}
          />
          <CheckBoxForm
            title="Náusea"
            name="nausea"
            id="nausea"
            checked={formTriage.nausea}
            handleInput={handleInputChange}
          />
          <CheckBoxForm
            title="Vômito"
            name="vomiting"
            id="vomiting"
            checked={formTriage.vomiting}
            handleInput={handleInputChange}
          />
          <CheckBoxForm
            title="Sangramento"
            name="bleeding"
            id="bleeding"
            checked={formTriage.bleeding}
            handleInput={handleInputChange}
          />
          <CheckBoxForm
            title="Edema (Inchaço)"
            name="edema"
            id="edema"
            checked={formTriage.edema}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        <SectionTitleBox title="Avaliação Inicial" iconColor="#8b5cf6">
          <div style={{ marginBottom: "8px" }}>
            <CommonSelectInput
              title="Estado/Condição do Paciente"
              name="patient_condition"
              id="patient_condition"
              required={true}
              value={formTriage.patient_condition}
              handleInput={handleInputChange}
              placeholder="Selecione o estado do paciente"
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                border: "2px solid #e2e8f0",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "400px",
              }}
              options={[
                { value: "mild", label: "🟢 Leve" },
                { value: "moderate", label: "🟡 Moderado" },
                { value: "serious", label: "🟠 Grave" },
                { value: "critical", label: "🔴 Crítico" },
              ]}
            />
          </div>

          {/* 4. Informações Adicionais */}
          <SectionTitleBox
            title="Informações do Atendimento"
            iconColor="#6366f1"
          >
            <InputForm
              placeholder="Descreva os sintomas, queixas ou motivo da consulta..."
              title="Sintomas / Queixa principal"
              type="text"
              name="symptoms"
              id="symptoms"
              required={true}
              multiline={true}
              value={formTriage.symptoms}
              handleInput={handleInputChange}
            />
          </SectionTitleBox>

          <div style={{ marginBottom: "8px" }}>
            <CommonSelectInput
              title="Especialidade Médica Indicada"
              name="responsible_specialist"
              id="medical_specialty"
              required={false}
              value={formTriage.responsible_specialist}
              handleInput={handleInputChange}
              placeholder="Selecione a especialidade médica recomendada"
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                border: "2px solid #e2e8f0",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "400px",
              }}
              options={medicalSpecialties}
            />
          </div>

          <CommonSelectInput
            title="Tipo Sanguíneo"
            name="blood_type"
            id="blood_type"
            required={false}
            value={formTriage.blood_type}
            handleInput={handleInputChange}
            placeholder="Selecione o tipo sanguíneo"
            options={[
              { value: "A+", label: "A+" },
              { value: "A-", label: "A-" },
              { value: "B+", label: "B+" },
              { value: "B-", label: "B-" },
              { value: "AB+", label: "AB+" },
              { value: "AB-", label: "AB-" },
              { value: "O+", label: "O+" },
              { value: "O-", label: "O-" },
              { value: "desconhecido", label: "Desconhecido" },
            ]}
          />
        </SectionTitleBox>

        <FormButtons onSubmit={handleSubmit} onCancel={cancelForm} />
      </FormCompleted>
    </TriageFormWrapper>
  );
};

export default TriageForm;
