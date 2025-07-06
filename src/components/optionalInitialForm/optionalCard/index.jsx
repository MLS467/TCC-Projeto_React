import { Link } from "react-router-dom";
import { FiFileText, FiShield, FiUserPlus } from "react-icons/fi";
import {
  CardContainer,
  CardContent,
  IconContainer,
  Icon,
  CardTitle,
  CardDescription,
  ActionButton,
} from "./style";

const OptionalCard = ({
  title,
  description,
  icon,
  buttonText = "Cadastrar por Formulário",
  onClick,
  to,
  color = "blue", // blue, green, purple, orange, red
}) => {
  const CardWrapper = to ? Link : "div";
  const cardProps = to ? { to } : {};

  // Mapear ícones do material para react-icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case "description":
        return <FiFileText />;
      case "fingerprint":
        return <FiShield />;
      default:
        return <FiFileText />;
    }
  };

  return (
    <CardContainer
      as={CardWrapper}
      {...cardProps}
      onClick={onClick}
      color={color}
    >
      <CardContent>
        <IconContainer color={color}>
          <Icon>{getIcon(icon)}</Icon>
        </IconContainer>

        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <ActionButton color={color}>
          <Icon style={{ marginRight: "8px" }}>
            <FiUserPlus />
          </Icon>
          {buttonText}
        </ActionButton>
      </CardContent>
    </CardContainer>
  );
};

export default OptionalCard;
