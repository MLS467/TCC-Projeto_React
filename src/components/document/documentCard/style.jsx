import styled from "styled-components";

export const DocumentWrapper = styled.div`
  background: #fff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  max-width: 800px;
`;

export const DocumentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
  background-color: #f0f9ff;
  padding: 30px;
  border-bottom: 2px solid #e5e7eb;
`;

export const HeaderIcon = styled.div`
  width: 12px;
  height: 12px;
  background: #38bdf8;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const HeaderTitle = styled.h2`
  color: #075985;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.025em;
`;

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;

  gap: 24px 40px;
`;
