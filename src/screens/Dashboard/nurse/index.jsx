import EnfermeiroList from "@/components/Dashboard/NurseList";
import { DashboardContainer } from "@/screens/Dashboard/style";

const NursePage = () => {
  return (
    <DashboardContainer>
      <EnfermeiroList />
    </DashboardContainer>
  );
};

export default NursePage;
