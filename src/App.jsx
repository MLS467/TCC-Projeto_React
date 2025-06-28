import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
`;

const Title = styled.h1`
  color: #4a90e2;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: 600;
`;

const RouteList = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 40px;
`;

const RouteCard = styled.a`
  display: block;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4a90e2;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
  }
`;

const RouteName = styled.h3`
  color: #4a90e2;
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const RouteDescription = styled.p`
  color: #6b7280;
  margin: 0 0 8px 0;
  font-size: 0.95rem;
`;

const RoutePath = styled.code`
  background: #f3f4f6;
  color: #374151;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: "Fira Code", "Courier New", monospace;
`;

function App() {
  const routes = [
    {
      path: "/home",
      name: "🏠 Home",
      description: "Página inicial com banner, features e informações gerais",
    },
    {
      path: "/login",
      name: "🔐 Login",
      description: "Tela de autenticação do sistema",
    },
    {
      path: "/list-patients",
      name: "👥 Lista de Pacientes - Médica",
      description:
        "Lista completa de pacientes registrados com status e diagnósticos",
    },
    {
      path: "/nurse-patient-list",
      name: "🩺 Lista de Pacientes - Enfermagem",
      description: "Lista de pacientes aguardando triagem de enfermagem",
    },
    {
      path: "/initial-form",
      name: "📝 Formulário Inicial",
      description: "Formulário de cadastro inicial do paciente",
    },
    {
      path: "/triage-form",
      name: "🏥 Formulário de Triagem",
      description:
        "Formulário de triagem de enfermagem com sinais vitais e sintomas",
    },
    {
      path: "/consultation-form",
      name: "⚕️ Formulário de Consulta",
      description:
        "Formulário de consulta médica com prescrições e procedimentos",
    },
  ];

  return (
    <Container>
      <Title>🏥 Sistema de Gestão Hospitalar</Title>
      <RouteList>
        {routes.map((route, index) => (
          <RouteCard key={index} href={route.path}>
            <RouteName>{route.name}</RouteName>
            <RouteDescription>{route.description}</RouteDescription>
            <RoutePath>{route.path}</RoutePath>
          </RouteCard>
        ))}
      </RouteList>
    </Container>
  );
}

export default App;
