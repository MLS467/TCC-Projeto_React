import React from "react";
import { patient_state } from "../data";
import CardListPatient from "./CardListPatient";
import { SectionCardListContainer } from "./style";

const CardListSection = () => {
  return (
    <SectionCardListContainer>
      {patient_state.map((value, index) => {
        return (
          <CardListPatient
            key={index}
            bgColor={value.bgColor}
            borderColor={value.borderColor}
            title={value.title}
            content={value.content}
          />
        );
      })}
    </SectionCardListContainer>
  );
};

export default CardListSection;
