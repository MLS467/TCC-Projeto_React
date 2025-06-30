import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const ListWrapper = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const ListHeader = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, ${palette[50]} 0%, ${palette[10]} 100%);
  border-bottom: 1px solid ${palette[200]};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${palette[800]};
  margin: 0 0 4px 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const HeaderSubtitle = styled.p`
  color: ${palette[1000]};
  margin: 0;
  font-size: 0.95rem;
`;

export const SearchSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1px solid ${palette[200]};
  border-radius: 8px;
  font-size: 0.95rem;
  background: white;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${palette[600]};
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &::placeholder {
    color: ${palette[1000]};
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${(props) => (props.isActive ? palette[600] : "white")};
  color: ${(props) => (props.isActive ? "white" : palette[800])};
  border: 1px solid ${palette[200]};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${(props) => (props.isActive ? palette[700] : palette[50])};
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${palette[700]};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${palette[800]};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ListContainer = styled.div`
  padding: 8px;
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${palette[50]};
  }

  &::-webkit-scrollbar-thumb {
    background: ${palette[400]};
    border-radius: 3px;
  }
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin: 4px 0;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${palette[10]};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${palette[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    font-weight: 600;
    color: ${palette[700]};
    font-size: 0.9rem;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

export const UserName = styled.h4`
  margin: 0 0 4px 0;
  color: ${palette[800]};
  font-size: 1rem;
  font-weight: 600;
`;

export const UserRole = styled.p`
  margin: 0 0 8px 0;
  color: ${palette[600]};
  font-size: 0.85rem;
  font-weight: 500;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${palette[1000]};
    font-size: 0.8rem;

    svg {
      color: ${palette[600]};
      flex-shrink: 0;
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const UserStatus = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;

  ${(props) => {
    switch (props.status) {
      case "active":
        return `
          background: ${palette.patient_color.mild};
          color: ${palette.patient_color.mild_details};
        `;
      case "inactive":
        return `
          background: ${palette.patient_color.critical};
          color: ${palette.patient_color.critical_details};
        `;
      case "busy":
        return `
          background: ${palette.patient_color.serious};
          color: ${palette.patient_color.serious_details};
        `;
      case "available":
        return `
          background: ${palette.patient_color.mild};
          color: ${palette.patient_color.mild_details};
        `;
      default:
        return `
          background: ${palette[100]};
          color: ${palette[800]};
        `;
    }
  }}

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const UserActions = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
    justify-content: flex-end;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.variant) {
      case "call":
        return `
          background: ${palette.patient_color.mild};
          color: ${palette.patient_color.mild_details};
          &:hover { background: ${palette.patient_color.mild_details}; color: white; }
        `;
      case "email":
        return `
          background: ${palette[100]};
          color: ${palette[600]};
          &:hover { background: ${palette[600]}; color: white; }
        `;
      case "edit":
        return `
          background: ${palette.patient_color.moderate};
          color: ${palette.patient_color.moderate_details};
          &:hover { background: ${palette.patient_color.moderate_details}; color: white; }
        `;
      case "delete":
        return `
          background: ${palette.patient_color.critical};
          color: ${palette.patient_color.critical_details};
          &:hover { background: ${palette.patient_color.critical_details}; color: white; }
        `;
      default:
        return `
          background: ${palette[100]};
          color: ${palette[800]};
          &:hover { background: ${palette[200]}; }
        `;
    }
  }}

  &:active {
    transform: scale(0.95);
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  color: ${palette[400]};
  margin-bottom: 16px;
`;

export const EmptyText = styled.p`
  color: ${palette[1000]};
  font-size: 1rem;
  margin: 0 0 24px 0;
  max-width: 300px;
`;
