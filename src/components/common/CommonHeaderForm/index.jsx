import {
  CommonHeaderWrapper,
  HeaderContent,
  TitleSection,
  IconSection,
} from "./style";

const CommonHeaderForm = ({
  title,
  description,
  icon = "group",
  iconColor = "#4A90E2", // cor padrão do ícone
}) => {
  return (
    <CommonHeaderWrapper>
      <HeaderContent>
        <IconSection iconColor={iconColor}>
          <span className="material-icons icon">{icon}</span>
        </IconSection>
        <TitleSection>
          <h1>{title}</h1>
          <span>{description}</span>
        </TitleSection>
      </HeaderContent>
    </CommonHeaderWrapper>
  );
};

export default CommonHeaderForm;
