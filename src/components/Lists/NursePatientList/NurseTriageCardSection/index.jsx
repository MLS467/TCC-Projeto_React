import React from "react";
import { nurse_triage_data } from "../triageData";
import CardListPatient from "../../../PatientList/CardListSection/CardListPatient";
import { SectionCardListContainer } from "./style";

const NurseTriageCardSection = () => {
  return (
    <SectionCardListContainer>
      {nurse_triage_data.map((value, index) => {
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

export default NurseTriageCardSection;
