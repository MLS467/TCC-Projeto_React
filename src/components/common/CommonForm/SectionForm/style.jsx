import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */
  height: 100%;
  flex-direction: column;
  padding: 32px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

export const IconBar = styled.span`
  display: inline-block;
  width: 10px;
  height: 32px;
  border-radius: 6px;
  background: ${({ color }) => color || "#2563eb"};
`;

export const Title = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a2536;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
  justify-content: flex-start;

  & > * {
    flex: 1 1 220px; // faz cada input crescer e encolher, largura mínima 220px
    min-width: 220px;
    max-width: 100%;
  }
`;
