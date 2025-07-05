import {
  CommonHeaderListWrapper,
  HeaderContent,
  TitleSection,
  IconSection,
} from "./style";

const CommonHeaderList = ({
  title,
  description,
  icon = "group", // ícone padrão do Material Icons
  iconColor = "#4A90E2", // cor padrão do ícone
}) => {
  return (
    <CommonHeaderListWrapper>
      <HeaderContent>
        <IconSection iconColor={iconColor}>
          <span className="material-icons icon">{icon}</span>
        </IconSection>
        <TitleSection>
          <h1>{title}</h1>
          <span>{description}</span>
        </TitleSection>
      </HeaderContent>
    </CommonHeaderListWrapper>
  );
};

export default CommonHeaderList;
