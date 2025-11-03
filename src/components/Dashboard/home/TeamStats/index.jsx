import {
  TeamStatsWrapper,
  TeamStatsHeader,
  TeamStatsTitle,
  TeamStatsItem,
  TeamStatsLabel,
  TeamStatsNumber,
  TeamStatsTotal,
} from "./style";
import { FiUsers } from "react-icons/fi";

const TeamStats = ({ data = {} }) => {
  const dataMap = [
    { role: "Médicos", count: data.doctors || 0 },
    { role: "Enfermeiros", count: data.nurses || 0 },
    { role: "Atendentes", count: data.attendants || 0 },
  ];

  const totalMembers = dataMap.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <TeamStatsWrapper>
      <TeamStatsHeader>
        <FiUsers size={20} />
        <TeamStatsTitle>Equipe Médica</TeamStatsTitle>
      </TeamStatsHeader>

      {dataMap.map((stat, index) => (
        <TeamStatsItem key={index}>
          <TeamStatsLabel>{stat.role}</TeamStatsLabel>
          <TeamStatsNumber>{stat.count}</TeamStatsNumber>
        </TeamStatsItem>
      ))}

      <TeamStatsTotal>
        <TeamStatsLabel>Total</TeamStatsLabel>
        <TeamStatsNumber>{totalMembers}</TeamStatsNumber>
      </TeamStatsTotal>
    </TeamStatsWrapper>
  );
};

export default TeamStats;
