import styled from "styled-components";

export const TableWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  margin-top: 24px;
  box-shadow: 0 2px 8px #0001;
`;

export const TableTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #4A90E2;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #4A90E2;
    flex-shrink: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  color: #374151;
  font-weight: 600;
  padding: 12px 0;
`;

export const ThWithIcon = styled.th`
  text-align: left;
  color: #374151;
  font-weight: 600;
  padding: 12px 0;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: #4A90E2;
    flex-shrink: 0;
  }
`;

export const Td = styled.td`
  padding: 16px 0;
  border-top: 1px solid #f3f6fb;
  vertical-align: middle;
  font-size: 1rem;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-weight: 600;
  padding: 4px 14px 4px 8px;
  border-radius: 16px;
  font-size: 0.98rem;
`;

export const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  background: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
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

  /* Hover para botão de passar para consulta */
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

  /* Hover para botão de deletar */
  &[data-action="delete"]:hover {
    background: #fdeaea;
    border-color: #b71c1c;
    svg {
      color: #b71c1c !important;
    }
  }
`;
