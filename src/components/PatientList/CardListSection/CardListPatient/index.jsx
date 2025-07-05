import { CardListPatientContainer } from "./style";

const CardListPatient = ({
  title,
  content,
  bgColor,
  borderColor,
  statusKey,
}) => {
  const getIcon = () => {
    switch (statusKey) {
      case "critical":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
              fill="currentColor"
            />
            <path
              d="M12 18C12.55 18 13 18.45 13 19V21C13 21.55 12.55 22 12 22C11.45 22 11 21.55 11 21V19C11 18.45 11.45 18 12 18Z"
              fill="currentColor"
            />
          </svg>
        );
      case "serious":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V5.5L21 5V3H3V5L9 5.5V7.5L3 7V9L9 8.5V10.5L3 10V12H21V10L15 10.5V8.5L21 9Z"
              fill="currentColor"
            />
          </svg>
        );
      case "moderate":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="currentColor"
            />
          </svg>
        );
      case "mild":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12L11 14L15 10M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <CardListPatientContainer $bgcolor={bgColor} $bordercolor={borderColor}>
      <div>
        <span className="card_title">{title}</span>
        <span className="card_content">{content}</span>
      </div>
      <div className="card_icon_wrapper">
        <span className="card_icone" style={{ color: borderColor }}>
          {getIcon()}
        </span>
      </div>
    </CardListPatientContainer>
  );
};

export default CardListPatient;
