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
        {/* <DashboardHeader> */}
        {/* <HeaderContent>
            <MobileMenuButton
              title={sidebarOpen ? "Fechar menu" : "Abrir menu"}
              isOpen={sidebarOpen}
            >
              {isMobile ? <FiMenu size={20} /> : <FiSidebar size={20} />}
            </MobileMenuButton>

            <HeaderMainContent>
              <HeaderIcon>
                <FiShield
                  size={16}
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                  title="Área Restrita"
                />
              </HeaderIcon>
              <HeaderText>
                <HeaderTitle>Dashboard AtendeBem</HeaderTitle>
                <HeaderSubtitle>
                  Bem-vindo ao sistema de gestão clínica
                </HeaderSubtitle>
              </HeaderText>
            </HeaderMainContent>
          </HeaderContent> */}
        {/* </DashboardHeader> */}

        <Outlet />
      </MainContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
