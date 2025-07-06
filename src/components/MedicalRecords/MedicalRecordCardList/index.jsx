import React from "react";
import MedicalRecordCard from "../MedicalRecordCard";
import {
  ListContainer,
  ListHeader,
  ListTitle,
  ListSubtitle,
  CardsGrid,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
} from "./style";

const MedicalRecordCardList = ({
  records = [],
  title = "Prontuários Médicos",
  subtitle = "Visualize e gerencie os prontuários dos pacientes",
  onCardClick,
}) => {
  if (records.length === 0) {
    return (
      <ListContainer>
        <ListHeader>
          <ListTitle>{title}</ListTitle>
          <ListSubtitle>{subtitle}</ListSubtitle>
        </ListHeader>

        <EmptyState>
          <EmptyStateIcon>📋</EmptyStateIcon>
          <EmptyStateText>Nenhum prontuário encontrado</EmptyStateText>
        </EmptyState>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{title}</ListTitle>
        <ListSubtitle>{subtitle}</ListSubtitle>
      </ListHeader>

      <CardsGrid>
        {records.map((record) => {
          console.log("Rendering record:", record); // Debug log
          return (
            <MedicalRecordCard
              key={record.id}
              id={record.id}
              name={record.name}
              date={record.date}
              onClick={() => onCardClick && onCardClick(record)}
            />
          );
        })}
      </CardsGrid>
    </ListContainer>
  );
};

export default MedicalRecordCardList;
