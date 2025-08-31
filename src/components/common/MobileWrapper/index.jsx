import { useScreen } from "@/Context/MobileScreen";
import MobileScreen from "@/screens/mobileScreen";

const MobileWrapper = ({ children }) => {
  const { isMobile } = useScreen();

  if (isMobile) {
    return <MobileScreen />;
  }

  return children;
};

export default MobileWrapper;
