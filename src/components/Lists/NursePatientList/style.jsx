import styled from "styled-components";

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

export const TableWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  margin-top: 24px;
  box-shadow: 0 2px 8px #0001;
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
    color: #4a90e2;
    flex-shrink: 0;
  }
`;

export const Td = styled.td`
  padding: 16px 0;
  border-top: 1px solid #f3f6fb;
  vertical-align: middle;
  font-size: 1rem;

  &:last-child {
    padding-right: 0;
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

  /* Hover para botão de triagem */
  &[data-action="triage"]:hover {
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
