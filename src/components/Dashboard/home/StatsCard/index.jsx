import {
  StatsCardWrapper,
  StatsNumber,
  StatsLabel,
  StatsChange,
  IconWrapper,
} from "./style";

const StatsCard = ({ title, value, change, icon, type, color = "" }) => {
  return (
    <StatsCardWrapper type={type} $color={color}>
      <div>
        <StatsLabel>{title}</StatsLabel>
        <StatsNumber>{value}</StatsNumber>
        <StatsChange type={type}>{change}</StatsChange>
      </div>
      <IconWrapper type={type}>{icon}</IconWrapper>
    </StatsCardWrapper>
  );
};

export default StatsCard;
