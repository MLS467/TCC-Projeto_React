import { patient_state } from "../data";
import CardListPatient from "./CardListPatient";
import { SectionCardListContainer } from "./style";

const CardListSection = ({ data = [] }) => {
  // Função para contar os status nos dados
  const getStatusCounts = () => {
    const counts = {
      mild: 0,
      moderate: 0,
      serious: 0,
      critical: 0,
    };

    data.forEach((patient) => {
      if (patient.patient_condition && patient.patient_condition in counts) {
        counts[patient.patient_condition]++;
      }
    });

    return counts;
  };

  const statusCounts = getStatusCounts();

  // Mapear os estados para as contagens
  const getCardContent = (stateKey) => {
    const statusMap = {
      mild: statusCounts.mild,
      moderate: statusCounts.moderate,
      serious: statusCounts.serious,
      critical: statusCounts.critical,
    };

    return statusMap[stateKey] || 0;
  };

  return (
    <SectionCardListContainer>
      {patient_state.map((value, index) => {
        return (
          <CardListPatient
            key={index}
            bgColor={value.bgColor}
            borderColor={value.borderColor}
            title={value.title}
            content={getCardContent(value.statusKey)}
          />
        );
      })}
    </SectionCardListContainer>
  );
};

export default CardListSection;
