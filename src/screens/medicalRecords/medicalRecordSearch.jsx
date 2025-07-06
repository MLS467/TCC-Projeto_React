import { MedicalRecordCardList } from "../../components/MedicalRecords";
import { sampleMedicalRecords } from "./data"; // Import your data or replace with actual data source
const MedicalRecordSearch = () => {
  return (
    <>
      <MedicalRecordCardList
        records={sampleMedicalRecords}
        title="Prontuários Médicos"
        subtitle="Visualize e gerencie os prontuários dos pacientes"
        onCardClick={(record) => console.log("Record selected:", record)}
      />
    </>
  );
};

export default MedicalRecordSearch;
