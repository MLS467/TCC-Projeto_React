import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  SidebarWrapper,
  SidebarHeader,
  LogoSection,
  MenuSection,
  MenuItem,
  MenuIcon,
  MenuText,
  MenuCategory,
  CloseButton,
} from "./style";

import {
  FiUser,
  FiUserCheck,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import useAuth from "@/Hook/useAuth";
import logoImage from "@/assets/img/logo3.png";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

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
        <Link to={"/dashboard"}>
          <LogoSection isOpen={isOpen}>
            <img
              src={logoImage}
              alt="AtendeBem Logo"
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
            {isOpen && <span>AtendeBem</span>}
          </LogoSection>
        </Link>
        {isOpen && onClose && (
          <CloseButton onClick={onClose} title="Fechar menu">
            <FiX size={20} />
          </CloseButton>
        )}
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
