// Exemplo de uso dos componentes MedicalRecordCard e MedicalRecordCardList

import React from "react";
import {
  MedicalRecordCard,
  MedicalRecordCardList,
} from "./components/MedicalRecords";

// Exemplo de dados
const exampleRecords = [
  {
    id: "MR001",
    name: "Maria Silva Santos",
    date: "2024-07-05",
  },
  {
    id: "MR002",
    name: "João Pedro Oliveira",
    date: "2024-07-04",
  },
];

// Exemplo de uso do componente individual
const ExampleCard = () => (
  <MedicalRecordCard
    id="MR001"
    name="Maria Silva Santos"
    date="2024-07-05"
    onClick={(record) => console.log("Card clicked:", record)}
  />
);

// Exemplo de uso da lista de cards
const ExampleList = () => (
  <MedicalRecordCardList
    records={exampleRecords}
    title="Prontuários Médicos"
    subtitle="Visualize e gerencie os prontuários dos pacientes"
    onCardClick={(record) => console.log("Record selected:", record)}
  />
);

export { ExampleCard, ExampleList };
