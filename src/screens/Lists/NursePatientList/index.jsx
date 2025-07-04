import {
  PageWrapper,
  FixedHeader,
  LogoWrapper,
  AuthButtonWrapper,
  ContentWrapper,
  TitleRow,
  IconWrapper,
  TitleText,
  SubtitleText,
} from "./style";
import NursePatientList from "@/components/Lists/NursePatientList";
import NavBar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import { palette } from "@/constant/colors";
import AuthButton from "@/components/common/AuthButton";
import { useEffect, useContext } from "react";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { ListContext } from "@/Context/ListContext";

// Constantes de endpoints específicos para enfermagem
const ENDPOINTS = {
  PATIENTS: `${import.meta.env.VITE_API_USER_ENDPOINT}/flag`, // Buscar pacientes com flag
  USER: `${import.meta.env.VITE_API_USER_ENDPOINT}`, // Deletar usuários/pacientes
};

const NursePatientListScreen = () => {
  // Uso do contexto centralizado para gerenciar lista de pacientes
  const { data, isLoading, fetchPatients, deletePatient } =
    useContext(ListContext);

  /**
   * Carrega a lista inicial de pacientes ao montar o componente
   * Usa o endpoint específico para buscar pacientes com flag de triagem
   */
  useEffect(() => {
    fetchPatients(ENDPOINTS.PATIENTS);
  }, [fetchPatients]);

  /**
   * Função específica para deletar pacientes na tela de enfermagem
   * Utiliza a lógica centralizada do contexto ListContext
   * @param {string|number} id - ID do paciente a ser deletado
   */
  const handleDeletePatient = async (id) => {
    return await deletePatient(id, ENDPOINTS.USER);
  };

  if (isLoading) {
    return <SpinnerScreen message="Carregando lista de pacientes" />;
  }

  return (
    <PageWrapper>
      <FixedHeader>
        <NavBar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <div />
          <AuthButtonWrapper>
            <AuthButton title={"Logout"} type={"logout"} />
          </AuthButtonWrapper>
        </NavBar>
      </FixedHeader>

      <ContentWrapper>
        <TitleRow>
          <IconWrapper>
            <svg width="50" height="50" fill="none" viewBox="0 0 24 24">
              <path
                d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C16.16 13.66 18 14.61 18 16.5V19h6v-2.5c0-2.33-4.67-3.5-6-3.5z"
                fill={palette[600]}
              />
            </svg>
          </IconWrapper>
          <div>
            <TitleText>Triagem de Pacientes - Enfermagem</TitleText>
            <SubtitleText>
              Avalie e direcione pacientes para atendimento médico
            </SubtitleText>
          </div>
        </TitleRow>
        <NursePatientList
          nursePatientData={data}
          onDelete={handleDeletePatient}
        />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default NursePatientListScreen;
