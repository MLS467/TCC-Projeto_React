import styled from "styled-components";
import { palette } from "../../../constant/colors";

export const TitleWithIcon = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #4a90e2;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #4a90e2;
    flex-shrink: 0;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  width: 300px;
  background: #fff;
  color: #374151;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: ${(props) => (props.active ? "#4a90e2" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#374151")};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#4a90e2" : "#f9fafb")};
    border-color: #4a90e2;
  }

  &.priority-mild {
    background: ${(props) => (props.active ? "#10b981" : "#fff")};
    color: ${(props) => (props.active ? "#fff" : "#10b981")};
    border-color: ${(props) => (props.active ? "#10b981" : "#a7f3d0")};

    &:hover {
      background: ${(props) => (props.active ? "#10b981" : "#ecfdf5")};
      border-color: #10b981;
    }
  }

  &.priority-moderate {
    background: ${(props) => (props.active ? "#f59e0b" : "#fff")};
    color: ${(props) => (props.active ? "#fff" : "#f59e0b")};
    border-color: ${(props) => (props.active ? "#f59e0b" : "#fed7aa")};

    &:hover {
      background: ${(props) => (props.active ? "#f59e0b" : "#fffbeb")};
      border-color: #f59e0b;
    }
  }

  &.priority-serious {
    background: ${(props) => (props.active ? "#f97316" : "#fff")};
    color: ${(props) => (props.active ? "#fff" : "#f97316")};
    border-color: ${(props) => (props.active ? "#f97316" : "#fed7aa")};

    &:hover {
      background: ${(props) => (props.active ? "#f97316" : "#fff7ed")};
      border-color: #f97316;
    }
  }

  &.priority-critical {
    background: ${(props) => (props.active ? "#ef4444" : "#fff")};
    color: ${(props) => (props.active ? "#fff" : "#ef4444")};
    border-color: ${(props) => (props.active ? "#ef4444" : "#fecaca")};

    &:hover {
      background: ${(props) => (props.active ? "#ef4444" : "#fef2f2")};
      border-color: #ef4444;
    }
  }
`;

export const TableWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: ${palette.shadow.boxDefault};
`;

export const TableTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  padding: 20px 24px;
  margin: 0;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

export const Th = styled.th`
  text-align: left;
  color: #374151;
  font-weight: 600;
  padding: 12px 0;
`;

export const ThWithIcon = styled.th`
  text-align: left;
  color: #6b7280;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 16px 12px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: #6b7280;
    flex-shrink: 0;
  }
`;

export const Td = styled.td`
  padding: 16px 12px;
  border-top: 1px solid #f3f4f6;
  vertical-align: middle;
  font-size: 0.875rem;
  color: #374151;

  &:first-child {
    font-weight: 500;
    color: #1f2937;
  }

  &:last-child {
    padding-right: 12px;
  }
`;

export const ActionButton = styled.button`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 6px 8px;
  margin-right: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  display: inline-flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  svg {
    font-size: 1.1rem;
    transition: color 0.2s;
  }

  /* Hover para botão de consulta */
  &[data-action="consult"]:hover {
    background: #dcfce7;
    border-color: #059669;
    svg {
      color: #059669 !important;
    }
  }

  /* Hover para botão de editar */
  &[data-action="edit"]:hover {
    background: #e0e7ff;
    border-color: #2563eb;
    svg {
      color: #2563eb !important;
    }
  }
`;

export const PriorityBadge = styled.span`
  padding: 6px 16px;
  border-radius: 25px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid;
  transition: all 0.2s ease;

  &.mild {
    background: linear-gradient(135deg, #10b981, #059669);
    color: #fff;
    border-color: #059669;
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
  }

  &.moderate {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: #fff;
    border-color: #d97706;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
  }

  &.serious {
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: #fff;
    border-color: #ea580c;
    box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
  }

  &.critical {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: #fff;
    border-color: #dc2626;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
