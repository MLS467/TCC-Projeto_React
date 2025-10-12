import {
  PageWrapper,
  FixedHeader,
  LogoWrapper,
  AuthButtonWrapper,
  ContentWrapper,
} from "./style";
import NursePatientList from "@/components/Lists/NursePatientList";
import NavBar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import EmptyState from "@/components/common/EmptyState";
import CommonHeaderList from "@/components/common/CommonHeaderList";
import AuthButton from "@/components/common/AuthButton";
import { useEffect, useContext, useState } from "react";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { ListContext } from "@/Context/ListContext";

const ENDPOINTS = {
  PATIENTS: `${import.meta.env.VITE_API_USER_ENDPOINT}${
    import.meta.env.VITE_API_FLAG
  }`,
  USER: `${import.meta.env.VITE_API_USER_ENDPOINT}`,
};

const NursePatientListScreen = () => {
  const { data, isLoading, fetchPatients, deletePatient } = useContext(ListContext);
  const [hasInitialLoad, setHasInitialLoad] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let interval;

    const loadPatients = async () => {
      if (isMounted) {
        try {
          await fetchPatients(ENDPOINTS.PATIENTS);
          
          if (!hasInitialLoad && isMounted) {
            setHasInitialLoad(true);
            
            interval = setInterval(async () => {
              if (isMounted) {
                await fetchPatients(ENDPOINTS.PATIENTS);
              }
            }, 10000);
          }
        } catch (error) {
          console.error('Erro ao carregar pacientes:', error);
          if (!hasInitialLoad) {
            setHasInitialLoad(true);
          }
        }
      }
    };

    loadPatients();

    return () => {
      isMounted = false;
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const handleDeletePatient = async (id) => {
    return await deletePatient(id, ENDPOINTS.USER);
  };

  if (isLoading && !hasInitialLoad) {
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

      <CommonHeaderList
        title="Triagem de Pacientes - Enfermagem"
        description="Avalie e direcione pacientes para atendimento médico"
        showRequiredFieldsNotice={false}
      />

      <ContentWrapper>
        {data && data.length > 0 ? (
          <NursePatientList
            nursePatientData={data}
            onDelete={handleDeletePatient}
          />
        ) : (
          <EmptyState
            title="Nenhum paciente aguardando triagem"
            description="Quando houver pacientes aguardando avaliação de enfermagem, eles aparecerão aqui para triagem e direcionamento."
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

export default NursePatientListScreen;
