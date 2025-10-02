import {
  PageWrapper,
  ContentWrapper,
  LogoWrapper,
  AuthButtonWrapper,
  PriorityCardsContainer,
  PriorityCard,
  PriorityIcon,
  PriorityLabel,
  PriorityCount,
} from "./style";
import MedicalPatientList from "@/components/Lists/MedicalPatientList";
import EmptyState from "@/components/common/EmptyState";
import CommonHeaderList from "@/components/common/CommonHeaderList";
import { useEffect, useContext, useMemo } from "react";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { ListContext } from "@/Context/ListContext";
import NavBar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import AuthButton from "@/components/common/AuthButton";
import { FiAlertTriangle, FiClock, FiUser } from "react-icons/fi";

const ENDPOINTS = {
  PATIENTS: `${import.meta.env.VITE_API_COMPLETE}`,
  USER: `${import.meta.env.VITE_API_PATIENT_ENDPOINT}`,
};

const PatientListScreen = () => {
  const { data, isLoading, fetchPatients, deletePatient } =
    useContext(ListContext);

  useEffect(() => {
    fetchPatients(ENDPOINTS.PATIENTS);
  }, [fetchPatients]);

  const handleDeletePatient = async (id) => {
    return await deletePatient(id, ENDPOINTS.USER);
  };

  const priorityCounts = useMemo(() => {
    if (!data || data.length === 0) {
      return { alta: 0, media: 0, baixa: 0 };
    }

    const counts = { alta: 0, media: 0, baixa: 0 };
    data.forEach((_, index) => {
      const priority = ["alta", "media", "baixa"][index % 3];
      counts[priority]++;
    });

    return counts;
  }, [data]);

  if (isLoading) {
    return <SpinnerScreen message="Carregando lista de pacientes" />;
  }

  return (
    <PageWrapper>
      <NavBar>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <div />
        <AuthButtonWrapper>
          <AuthButton title={"Logout"} type={"logout"} />
        </AuthButtonWrapper>
      </NavBar>

      <CommonHeaderList
        title="Lista de Pacientes"
        description="Gerencie e monitore todos os pacientes"
        showRequiredFieldsNotice={false}
      />

      {data && data.length > 0 && (
        <PriorityCardsContainer>
          <PriorityCard borderColor="#ef4444">
            <PriorityIcon bgColor="#ef4444">
              <FiAlertTriangle size={24} />
            </PriorityIcon>
            <PriorityLabel>Prioridade Alta</PriorityLabel>
            <PriorityCount color="#ef4444">{priorityCounts.alta}</PriorityCount>
          </PriorityCard>

          <PriorityCard borderColor="#f59e0b">
            <PriorityIcon bgColor="#f59e0b">
              <FiClock size={24} />
            </PriorityIcon>
            <PriorityLabel>Prioridade Média</PriorityLabel>
            <PriorityCount color="#f59e0b">
              {priorityCounts.media}
            </PriorityCount>
          </PriorityCard>

          <PriorityCard borderColor="#10b981">
            <PriorityIcon bgColor="#10b981">
              <FiUser size={24} />
            </PriorityIcon>
            <PriorityLabel>Prioridade Baixa</PriorityLabel>
            <PriorityCount color="#10b981">
              {priorityCounts.baixa}
            </PriorityCount>
          </PriorityCard>
        </PriorityCardsContainer>
      )}

      <ContentWrapper>
        {data && data.length > 0 ? (
          <MedicalPatientList
            medicalPatientData={data}
            onDelete={handleDeletePatient}
          />
        ) : (
          <EmptyState
            title="Nenhum paciente registrado"
            description="Quando houver pacientes cadastrados no sistema, eles aparecerão aqui com todas as informações relevantes."
            icon={
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H13V16H11V12H7V10H11V6H13V10H17V12Z"
                  fill="currentColor"
                />
              </svg>
            }
          />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PatientListScreen;
