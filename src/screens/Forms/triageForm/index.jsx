import Navbar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import { AuthButtonWrapper, TriageFormWrapper, LogoWrapper } from "./style";
import AuthButton from "@/components/common/AuthButton";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/InputForm";
import CommonSelectInput from "@/components/common/CommonSelectInput";
import CheckBoxForm from "@/components/common/CommonForm/CheckBoxForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { useContext } from "react";
import { FormTriageContext } from "@/Context/FormsContext/FormTriageContext/exports";

const TriageForm = () => {
  const { formTriage, handleSubmit, handleInputChange, fillTestData } =
    useContext(FormTriageContext);

  return (
    <TriageFormWrapper>
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
      <div className="content-wrapper" style={{ position: "relative" }}>
        <div>
          <h1>Formulário de Triagem</h1>
          <span>Preencha os dados para avaliação médica</span>

          {/* Botão temporário para testes - remover em produção */}
          <button
            type="button"
            onClick={fillTestData}
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              background: "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "6px 12px",
              fontSize: "11px",
              color: "#999",
              cursor: "pointer",
              opacity: 0.3,
              fontFamily: "monospace",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.opacity = "0.8";
              e.target.style.background = "#f8f8f8";
              e.target.style.color = "#333";
            }}
            onMouseOut={(e) => {
              e.target.style.opacity = "0.3";
              e.target.style.background = "transparent";
              e.target.style.color = "#999";
            }}
            title="Preencher com dados de teste"
          >
            • preencher
          </button>
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
          <InputForm
            placeholder={"Ex: aguda, crônica, latejante, queimação"}
            title={"Tipo de Dor"}
            type={"text"}
            name={"pain_type"}
            id={"pain_type"}
            borderColorInput={"brown"}
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
            borderColorInput={"brown"}
            min="0"
            max="10"
            required={false}
            value={formTriage.pain_scale}
            handleInput={handleInputChange}
          />

          <InputForm
            placeholder={"Descreva a queixa principal do paciente"}
            title={"Queixa Principal"}
            type={"text"}
            name={"chief_complaint"}
            id={"chief_complaint"}
            borderColorInput={"brown"}
            required={true}
            value={formTriage.chief_complaint}
            handleInput={handleInputChange}
            multiline={true}
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
        </SectionTitleBox>

        <SectionTitleBox title="Histórico Clínico" iconColor="green">
          <InputForm
            placeholder="Descreva cirurgias anteriores"
            title="Histórico de Cirurgias"
            type="text"
            name="surgery_history"
            id="surgery_history"
            required={false}
            borderColorInput={"green"}
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
            borderColorInput={"green"}
            value={formTriage.allergy}
            handleInput={handleInputChange}
            multiline={true}
          />
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

        <SectionTitleBox title="Dados Emergenciais" iconColor="#ff9500">
          <InputForm
            placeholder="Telefone de emergência"
            title="Telefone de Emergência"
            type="text"
            name="emergency_phone"
            id="emergency_phone"
            borderColorInput={"#ff9500"}
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
            borderColorInput={"#ff9500"}
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

        <FormButtons onSubmit={handleSubmit} />
      </FormCompleted>
    </TriageFormWrapper>
  );
};

export default TriageForm;
