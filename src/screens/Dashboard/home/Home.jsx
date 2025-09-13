import { FiCalendar, FiCheck, FiClock, FiX } from "react-icons/fi";
import StatsCard from "@/components/Dashboard/home/StatsCard";
import LoadingDashboard from "@/components/Dashboard/LoadingDashboard";
import {
  ContentGrid,
  DashboardContainer,
  DashboardWelcome,
  DateBadge,
  DateContainer,
  DateIcon,
  DateText,
  ProfessionalsList,
  ProfessionalsSection,
  SectionHeader,
  SectionTitle,
  StatsGrid,
  WelcomeContent,
  WelcomeSubtitle,
  WelcomeTitle,
} from "@/screens/Dashboard/style";
import ProfessionalCard from "@/components/Dashboard/home/ProfessionalCard";
import TeamStats from "@/components/Dashboard/home/TeamStats";
import { useEffect, useState } from "react";
import useCrud from "@/Hook/useCrud";
import { professionalsData, statsData } from "./data";
import { FiTrendingUp } from "react-icons/fi";

const HomeDashboard = () => {
  const { ReadAll } = useCrud();
  const [formData, setFormData] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await ReadAll({
        endpoint: import.meta.env.VITE_API_DASHBOARD_HOME_DATA,
      });
      setFormData(data);
    })();
  }, []);

  if (!formData) {
    return <LoadingDashboard message="Carregando dados do dashboard..." />;
  }

  const iconMap = {
    FiCalendar: <FiCalendar size={24} />,
    FiCheck: <FiCheck size={24} />,
    FiClock: <FiClock size={24} />,
    FiX: <FiX size={24} />,
  };

  const startsData = statsData(formData);

  return (
    <>
      <DashboardContainer>
        <DateContainer>
          <DateBadge>
            <DateIcon>
              <FiCalendar size={16} />
            </DateIcon>
            <DateText>
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </DateText>
          </DateBadge>
        </DateContainer>
        <DashboardWelcome>
          <WelcomeContent>
            <WelcomeTitle>Dashboard AtendeBem</WelcomeTitle>
            <WelcomeSubtitle>
              Bem-vindo ao sistema de gestão de Atendimento.
            </WelcomeSubtitle>
          </WelcomeContent>
        </DashboardWelcome>

        <StatsGrid>
          {startsData.map((start, index) => (
            <StatsCard
              key={index}
              title={start.title}
              value={start.value}
              change={start.change}
              icon={iconMap[start.iconName]}
              type={start.type}
              color={start.color}
            />
          ))}
        </StatsGrid>

        <ContentGrid>
          <ProfessionalsSection>
            <SectionHeader>
              <FiTrendingUp size={20} />
              <SectionTitle>Profissionais Ativos</SectionTitle>
            </SectionHeader>
            <ProfessionalsList>
              {professionalsData.map((professional, index) => (
                <ProfessionalCard
                  key={index}
                  name={professional.name}
                  role={professional.role}
                  phone={professional.phone}
                  email={professional.email}
                  status={professional.status}
                  avatar={professional.avatar}
                />
              ))}
            </ProfessionalsList>
          </ProfessionalsSection>

          <TeamStats data={formData.employee_counts} />
        </ContentGrid>
      </DashboardContainer>
    </>
  );
};

export default HomeDashboard;
