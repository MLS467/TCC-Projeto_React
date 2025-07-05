import {
  CommonHeaderWrapper,
  HeaderContent,
  TitleSection,
  IconSection,
} from "./style";

const CommonHeader = ({
  title,
  description,
  icon = "👥", // ícone padrão
  iconColor = "#4A90E2", // cor padrão do ícone
}) => {
  return (
    <CommonHeaderWrapper>
      <HeaderContent>
        <IconSection iconColor={iconColor}>
          <span className="icon">{icon}</span>
        </IconSection>
        <TitleSection>
          <h1>{title}</h1>
          <span>{description}</span>
        </TitleSection>
      </HeaderContent>
    </CommonHeaderWrapper>
  );
};

export default CommonHeader;
