import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarWrapper,
  SidebarHeader,
  LogoSection,
  MenuSection,
  MenuItem,
  MenuIcon,
  MenuText,
  MenuCategory,
} from "./style";

import {
  FiUser,
  FiUserCheck,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiLogOut,
  FiActivity,
} from "react-icons/fi";
import useAuth from "../../../Hook/useAuth";

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth(); // Assuming you have a logout function from your auth context or hook

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const menuItems = [
    {
      category: "Usuários",
      items: [
        { icon: FiUser, text: "Atendente", path: "/dashboard/atendente" },
        { icon: FiUserCheck, text: "Médico", path: "/dashboard/medico" },
        { icon: FiUsers, text: "Enfermeira", path: "/dashboard/enfermeira" },
      ],
    },
    {
      category: "Sistema",
      items: [
        { icon: FiCalendar, text: "Consultas", path: "/dashboard/consultas" },
        { icon: FiFileText, text: "Relatórios", path: "/dashboard/relatorios" },
      ],
    },
    {
      category: "Logout",
      items: [{ icon: FiLogOut, text: "Logout", path: "/logout" }],
    },
  ];

  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarHeader>
        <LogoSection isOpen={isOpen}>
          <FiActivity size={24} />
          {isOpen && <span>CuidadorClin</span>}
        </LogoSection>
      </SidebarHeader>

      {menuItems.map((section, sectionIndex) => (
        <MenuSection key={sectionIndex}>
          {isOpen && <MenuCategory>{section.category}</MenuCategory>}
          {section.items.map((item, itemIndex) => (
            <MenuItem
              key={itemIndex}
              isOpen={isOpen}
              title={!isOpen ? item.text : ""}
              onClick={
                item.path === "/logout"
                  ? logout
                  : () => handleMenuClick(item.path)
              }
              isActive={location.pathname === item.path}
            >
              <MenuIcon>
                <item.icon size={20} />
              </MenuIcon>
              {isOpen && <MenuText>{item.text}</MenuText>}
            </MenuItem>
          ))}
        </MenuSection>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
