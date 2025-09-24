import { DashboardWrapper, MainContent, MobileOverlay } from "./style";
import { OpenSidebarButton } from "@/components/common/Sidebar/style";
import Sidebar from "@/components/common/Sidebar";
import { FiArrowRight } from "react-icons/fi";

import { useState } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <DashboardWrapper>
      {!sidebarOpen && (
        <OpenSidebarButton onClick={handleSidebarToggle}>
          <FiArrowRight />
        </OpenSidebarButton>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarToggle} />
      <MobileOverlay isOpen={sidebarOpen} onClick={handleSidebarToggle} />

      <MainContent sidebarOpen={sidebarOpen}>
        <Outlet />
      </MainContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
