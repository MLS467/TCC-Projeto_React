import {
  ListWrapper,
  ListHeader,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
  SearchSection,
  SearchInput,
  FilterButton,
  ActionButton,
  ListContainer,
  UserCard,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  UserDetails,
  UserStatus,
  UserActions,
  EmptyState,
  EmptyIcon,
  EmptyText,
  AddButton,
} from "./style";

import {
  FiUsers,
  FiSearch,
  FiFilter,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiPhone,
  FiMail,
  FiMapPin,
  FiUserPlus,
} from "react-icons/fi";
import { useState } from "react";
import avatarPattern from "@/assets/personFaker/person.jpeg";

const CommonUserList = ({
  title = "Lista de Usuários",
  subtitle = "Gerencie os usuários do sistema",
  userType = "user",
  users = [],
  onAdd,
  onEdit,
  onDelete,
  onEmail,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "ativo":
        return "active";
      case "inativo":
        return "inactive";
      case "ocupado":
        return "busy";
      case "disponível":
        return "available";
      default:
        return "default";
    }
  };

  // const getInitials = (name) => {
  //   return (
  //     name
  //       ?.split(" ")
  //       .map((n) => n[0])
  //       .join("")
  //       .substring(0, 2)
  //       .toUpperCase() || "??"
  //   );
  // };

  return (
    <ListWrapper>
      <ListHeader>
        <HeaderContent>
          <div>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderSubtitle>{subtitle}</HeaderSubtitle>
          </div>
          <AddButton onClick={onAdd}>
            <FiUserPlus size={16} />
            Adicionar {userType}
          </AddButton>
        </HeaderContent>

        <SearchSection>
          <div style={{ position: "relative", flex: 1 }}>
            <FiSearch
              size={20}
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#8d949d",
              }}
            />
            <SearchInput
              type="text"
              placeholder={`Buscar ${userType}s...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <FilterButton
            onClick={() => setFilterOpen(!filterOpen)}
            isActive={filterOpen}
          >
            <FiFilter size={16} />
            Filtros
          </FilterButton>
        </SearchSection>
      </ListHeader>

      <ListContainer>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard key={user.id || index}>
              <UserAvatar>
                {user.photo ? (
                  <img src={user.photo} alt={user.name} />
                ) : (
                  <img src={avatarPattern} alt="person" />
                )}
              </UserAvatar>

              <UserInfo>
                <UserName>{user.name}</UserName>
                <UserRole>{user.role}</UserRole>

                <UserDetails>
                  {user.phone && (
                    <div>
                      <FiPhone size={14} />
                      <span>{user.phone}</span>
                    </div>
                  )}
                  {user.email && (
                    <div>
                      <FiMail size={14} />
                      <span>{user.email}</span>
                    </div>
                  )}
                  {user.location && (
                    <div>
                      <FiMapPin size={14} />
                      <span>{user.location}</span>
                    </div>
                  )}
                </UserDetails>
              </UserInfo>

              <UserStatus status={getStatusColor(user.status)}>
                {user.status || "Ativo"}
              </UserStatus>

              <UserActions>
                {onEmail && user.email && (
                  <ActionButton
                    onClick={() => onEmail(user)}
                    title="Enviar email"
                    variant="email"
                  >
                    <FiMail size={16} />
                  </ActionButton>
                )}
                {onEdit && (
                  <ActionButton
                    onClick={() => onEdit(user.id)}
                    title="Editar"
                    variant="edit"
                  >
                    <FiEdit2 size={16} />
                  </ActionButton>
                )}
                {onDelete && (
                  <ActionButton
                    onClick={() => onDelete(user)}
                    title="Excluir"
                    variant="delete"
                  >
                    <FiTrash2 size={16} />
                  </ActionButton>
                )}
              </UserActions>
            </UserCard>
          ))
        ) : (
          <EmptyState>
            <EmptyIcon>
              <FiUsers size={48} />
            </EmptyIcon>
            <EmptyText>
              {searchTerm
                ? `Nenhum ${userType} encontrado para "${searchTerm}"`
                : `Nenhum ${userType} cadastrado ainda`}
            </EmptyText>
            {onAdd && (
              <AddButton onClick={onAdd}>
                <FiPlus size={16} />
                Adicionar primeiro {userType}
              </AddButton>
            )}
          </EmptyState>
        )}
      </ListContainer>
    </ListWrapper>
  );
};

export default CommonUserList;
