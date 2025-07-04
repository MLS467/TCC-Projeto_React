import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import StatsCard from "@/components/Dashboard/home/StatsCard";
import {
  ContentGrid,
  DashboardContainer,
  ProfessionalsList,
  ProfessionalsSection,
  SectionHeader,
  SectionTitle,
  StatsGrid,
} from "@/screens/Dashboard/style";
import ProfessionalCard from "@/components/Dashboard/home/ProfessionalCard";
import TeamStats from "@/components/Dashboard/home/TeamStats";

const HomeDashboard = () => {
  // Dados mockados para demonstração
  const statsData = [
    {
      title: "Consultas Hoje",
      value: "24",
      change: "+12% vs ontem",
      icon: <FiCalendar size={24} />,
      type: "today",
    },
    {
      title: "Consultas Realizadas",
      value: "18",
      change: "+8% vs ontem",
      icon: <FiCheck size={24} />,
      type: "completed",
    },
    {
      title: "Consultas Pendentes",
      value: "6",
      change: "4 para hoje",
      icon: <FiClock size={24} />,
      type: "pending",
    },
    {
      title: "Consultas Canceladas",
      value: "2",
      change: "-50% vs ontem",
      icon: <FiX size={24} />,
      type: "cancelled",
    },
  ];

  const professionalsData = [
    {
      name: "Dr. Ana Silva",
      role: "Médica - Cardiologia",
      phone: "(11) 99999-9999",
      email: "ana.silva@clinic.com",
      status: "Ativo",
      avatar: null,
    },
    {
      name: "Enf. Carlos Santos",
      role: "Enfermeiro",
      phone: "(11) 88888-8888",
      email: "carlos.santos@clinic.com",
      status: "Ativo",
      avatar: null,
    },
    {
      name: "Dr. Maria Costa",
      role: "Médica - Pediatria",
      phone: "(11) 77777-7777",
      email: "maria.costa@clinic.com",
      status: "Ocupado",
      avatar: null,
    },
  ];

  const teamStatsData = [
    { role: "Médicos", count: 12 },
    { role: "Enfermeiros", count: 8 },
    { role: "Atendentes", count: 15 },
  ];

  return (
    <>
      <DashboardContainer>
        <StatsGrid>
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              type={stat.type}
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

          <TeamStats stats={teamStatsData} />
        </ContentGrid>
      </DashboardContainer>
    </>
  );
};

export default HomeDashboard;
