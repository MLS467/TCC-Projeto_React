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

import Sidebar from "@/components/common/Sidebar";

import { FiMenu, FiSidebar, FiShield } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import logoImage from "@/assets/img/logo3.png";

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
          </HeaderContent>
        </DashboardHeader>

        <Outlet />
      </MainContent>
    </DashboardWrapper>
  );
};

export default Dashboard;
