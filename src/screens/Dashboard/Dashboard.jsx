import {
  DashboardWrapper,
  DashboardHeader,
  HeaderContent,
  HeaderMainContent,
  HeaderIcon,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  MainContent,
  MobileMenuButton,
  MobileOverlay,
} from "./style";

import Sidebar from "../../components/common/Sidebar";

import { FiActivity, FiMenu, FiSidebar } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Se for mobile, começar com sidebar fechada
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <DashboardWrapper>
      <Sidebar isOpen={sidebarOpen} />
      <MobileOverlay isOpen={sidebarOpen} onClick={handleSidebarToggle} />

      <MainContent sidebarOpen={sidebarOpen}>
        <DashboardHeader>
          <HeaderContent>
            <MobileMenuButton
              onClick={handleSidebarToggle}
              title={sidebarOpen ? "Fechar menu" : "Abrir menu"}
              isOpen={sidebarOpen}
            >
              {isMobile ? <FiMenu size={20} /> : <FiSidebar size={20} />}
            </MobileMenuButton>

            <HeaderMainContent>
              <HeaderIcon>
                <FiActivity size={32} />
              </HeaderIcon>
              <HeaderText>
                <HeaderTitle>Dashboard AtendeBem</HeaderTitle>
                <HeaderSubtitle>
                  Bem-vindo ao sistema de gestão clínica
                </HeaderSubtitle>
              </HeaderText>
            </HeaderMainContent>
          </HeaderContent>
        </DashboardHeader>

        <Outlet />
      </MainContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
