import MedicoList from "@/components/Dashboard/DoctorList";
import { DashboardContainer } from "@/screens/Dashboard/style";

const DoctorPage = () => {
  return (
    <DashboardContainer>
      <MedicoList />
    </DashboardContainer>
  );
};

export default DoctorPage;
