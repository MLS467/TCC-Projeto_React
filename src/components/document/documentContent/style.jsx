import styled from "styled-components";

export const DocumentContentWrapper = styled.div`
  min-height: 100vh;
  width: 60%;
  margin: 120px auto 50px auto;
  background: #fff;
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 8px 40px rgba(0, 0, 0, 0.06),
    0 16px 60px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  @media print {
    width: 100%;
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    min-height: auto;
  }
`;

export const HeaderDocument = styled.div`
  background: linear-gradient(135deg, #cfecfd 0%, #b8e4fc 100%);
  color: #075985;
  padding: 24px 32px;
  position: relative;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const DocumentTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
`;

export const DocumentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const DocumentNumber = styled.div`
  background: rgba(255, 255, 255, 0.9);
  color: #4a90e2;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const GeneratedDate = styled.div`
  font-size: 0.875rem;
  opacity: 0.95;
  font-weight: 500;
`;

export const SystemName = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 400;
`;

export const BlueLine = styled.div`
  height: 4px;
  background: linear-gradient(90deg, #76d1fa 0%, #38bdf8 50%, #2c5aa0 100%);
  margin: 0;
`;

export const DocumentContentStyle = styled.div`
  padding: 32px;
  max-width: 1000px;
  margin: 0 auto;
`;
