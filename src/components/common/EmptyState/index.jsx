import {
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
} from "./style";

const EmptyState = ({ title, description, icon }) => {
  const defaultIcon = (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V5.5L21 5V3H3V5L9 5.5V7.5L3 7V9L9 8.5V10.5L3 10V12H21V10L15 10.5V8.5L21 9Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <EmptyStateContainer>
      <EmptyStateIcon>{icon || defaultIcon}</EmptyStateIcon>
      <EmptyStateTitle>{title || "Nenhum paciente registrado"}</EmptyStateTitle>
      <EmptyStateDescription>
        {description ||
          "Quando houver pacientes cadastrados no sistema, eles aparecerão aqui com todas as informações relevantes."}
      </EmptyStateDescription>
    </EmptyStateContainer>
  );
};

export default EmptyState;
