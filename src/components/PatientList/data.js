import { palette } from "../../constant/colors";

export const patient_state = [
  {
    id: 1,
    title: "Crítico",
    content: 10,
    statusKey: "critical",
    bgColor: palette.patient_color.critical,
    borderColor: palette.patient_color.critical_details,
  },
  {
    id: 2,
    title: "Alto",
    content: 5,
    statusKey: "serious",
    bgColor: palette.patient_color.serious,
    borderColor: palette.patient_color.serious_details,
  },
  {
    id: 3,
    title: "Moderado",
    content: 20,
    statusKey: "moderate",
    bgColor: palette.patient_color.moderate,
    borderColor: palette.patient_color.moderate_details,
  },
  {
    id: 4,
    title: "Baixo",
    content: 20,
    statusKey: "mild",
    bgColor: palette.patient_color.mild,
    borderColor: palette.patient_color.mild_details,
  },
];
