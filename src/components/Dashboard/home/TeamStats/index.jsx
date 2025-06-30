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

const TeamStats = ({ stats }) => {
  const totalMembers = stats.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <TeamStatsWrapper>
      <TeamStatsHeader>
        <FiUsers size={20} />
        <TeamStatsTitle>Equipe Médica</TeamStatsTitle>
      </TeamStatsHeader>

      {stats.map((stat, index) => (
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
