import styled from "styled-components";

export const SectionCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;
