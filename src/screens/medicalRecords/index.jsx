import { MedicalRecordCardList } from "../../components/MedicalRecords";
import { sampleMedicalRecords } from "./data";
import { PageContainer } from "./style";

const MedicalRecordsScreen = () => {
  const handleCardClick = (record) => {
    console.log("Clicked on record:", record);
    // Aqui você pode implementar a navegação ou ação desejada
  };

  return (
    <PageContainer>
      <MedicalRecordCardList
        records={sampleMedicalRecords}
        title="Prontuários Médicos"
        subtitle="Visualize e gerencie os prontuários dos pacientes"
        onCardClick={handleCardClick}
      />
    </PageContainer>
  );
};

export default MedicalRecordsScreen;
