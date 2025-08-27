import OptionalCard from "./";
import styled from "styled-components";

const ExampleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  padding: 24px;
  background: #f5f5f5;
`;

const OptionalCardExamples = () => {
  return (
    <ExampleContainer>
      <OptionalCard
        title="Cadastro Completo"
        description="Preencha um formulário detalhado com todas suas informações pessoais para um cadastro completo"
        icon="description"
        buttonText="Cadastrar por Formulário"
        color="blue"
        onClick={() => console.log("Cadastro Completo clicked")}
      />

      <OptionalCard
        title="Cadastro Rápido"
        description="Cadastre-se rapidamente com apenas as informações essenciais"
        icon="flash_on"
        buttonText="Cadastro Rápido"
        color="green"
        onClick={() => console.log("Cadastro Rápido clicked")}
      />

      <OptionalCard
        title="Perfil Médico"
        description="Cadastre suas informações médicas e histórico de saúde"
        icon="local_hospital"
        buttonText="Cadastrar Perfil"
        color="red"
        onClick={() => console.log("Perfil Médico clicked")}
      />

      <OptionalCard
        title="Agendamento"
        description="Agende consultas e exames de forma rápida e prática"
        icon="schedule"
        buttonText="Agendar Consulta"
        color="purple"
        onClick={() => console.log("Agendamento clicked")}
      />

      <OptionalCard
        title="Resultados"
        description="Visualize seus resultados de exames e consultas"
        icon="assignment"
        buttonText="Ver Resultados"
        color="orange"
        onClick={() => console.log("Resultados clicked")}
      />
    </ExampleContainer>
  );
};

export default OptionalCardExamples;
