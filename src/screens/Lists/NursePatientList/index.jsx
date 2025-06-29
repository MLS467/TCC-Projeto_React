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
import NursePatientList from "../../../components/Lists/NursePatientList";
import NavBar from "../../../components/common/NavBar";
import Logo from "../../../components/common/Logo";
import { palette } from "../../../constant/colors";
import AuthButton from "../../../components/common/AuthButton";
import { useEffect, useState } from "react";
import useRequest from "../../../Hook/useRequest";
import SpinnerScreen from "../../../components/common/spinnerScreen";
import { toast } from "sonner";

const NursePatientListScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { api } = useRequest();

  const endpointPatients = `${import.meta.env.VITE_API_USER_ENDPOINT}/flag`;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(endpointPatients);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao carregar pacientes", error);
        toast.error("Erro ao carregar pacientes");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
        <NursePatientList nursePatientData={data} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default NursePatientListScreen;
