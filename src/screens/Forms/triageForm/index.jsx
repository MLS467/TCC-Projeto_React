import Navbar from "../../../components/common/NavBar";
import Logo from "../../../components/common/Logo";
import { AuthButtonWrapper, TriageFormWrapper, LogoWrapper } from "./style";
import AuthButton from "../../../components/common/AuthButton";
import FormCompleted from "../../../components/common/CommonForm/FormCompletd";
import SectionTitleBox from "../../../components/common/CommonForm/SectionForm";
import InputForm from "../../../components/common/CommonForm/InputForm";
import CheckBoxForm from "../../../components/common/CommonForm/CheckBoxForm";
import FormButtons from "../../../components/common/CommonForm/FormButton";
import { useEffect, useState } from "react";

const TriageForm = () => {
  const [formTriage, setFormTriage] = useState({
    // Sinais Vitais
    blood_pressure: "",
    heart_rate: "",
    temperature: "",
    oxygen_saturation: "",
    respiratory_rate: "",

    // Informações sobre a Dor
    chief_complaint: "",
    pain_type: "",
    pain_scale: "",

    // Histórico Clínico
    surgery_history: "",
    allergy: "",
    blood_type: "",

    // Dados Emergenciais
    emergency_phone: "",
    responsible_name: "",

    // Outros Sintomas (Checkboxes)
    difficulty_breathing: false,
    nausea: false,
    vomiting: false,
    bleeding: false,
    edema: false,
  });

  useEffect(() => {
    console.log(formTriage);
  }, [formTriage]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormTriage({
      ...formTriage,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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
      <div className="content-wrapper">
        <div>
          <h1>Formulário de Triagem</h1>
          <span>Preencha os dados para avaliação médica</span>
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
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 72 bpm"}
            title={"Frequência Cardíaca"}
            type={"text"}
            name={"heart_rate"}
            id={"heart_rate"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 36.5°C"}
            title={"Temperatura"}
            type={"text"}
            name={"temperature"}
            id={"temperature"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 98%"}
            title={"Saturação de Oxigênio"}
            type={"text"}
            name={"oxygen_saturation"}
            id={"oxygen_saturation"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Ex: 16 rpm"}
            title={"Frequência Respiratória"}
            type={"text"}
            name={"respiratory_rate"}
            id={"respiratory_rate"}
            required={true}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        <SectionTitleBox title={"Informações sobre a Dor"} iconColor="brown">
          <InputForm
            placeholder={"Descreva a queixa principal"}
            title={"Queixa Principal"}
            type={"text"}
            name={"chief_complaint"}
            id={"chief_complaint"}
            required={true}
            borderColorInput={"brown"}
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder={"Ex: aguda, crônica, latejante, queimação"}
            title={"Tipo de Dor"}
            type={"text"}
            name={"pain_type"}
            id={"pain_type"}
            borderColorInput={"brown"}
            required={false}
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
            handleInput={handleInputChange}
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
            borderColorInput={"green"}
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
            handleInput={handleInputChange}
            multiline={true}
          />
          <InputForm
            placeholder="Ex: A+, B-, O+, AB-"
            title="Tipo Sanguíneo"
            type="text"
            name="blood_type"
            id="blood_type"
            borderColorInput={"green"}
            required={false}
            handleInput={handleInputChange}
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

        <FormButtons
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
      </FormCompleted>
    </TriageFormWrapper>
  );
};

export default TriageForm;
