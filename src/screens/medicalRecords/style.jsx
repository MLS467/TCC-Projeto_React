import styled from "styled-components";
import { palette } from "../../constant/colors";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${palette[5]} 0%, ${palette[10]} 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 3rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
  }

  h2 {
    color: #ef4444;
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  p {
    color: #6b7280;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${palette[600]} 0%, ${palette[500]} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  margin: 0;
  font-weight: 400;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 3rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${palette[500]} 0%,
      ${palette[400]} 100%
    );
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
`;

export const EmptyStateIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${palette[50]} 0%, ${palette[100]} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${palette[200]} 0%,
      ${palette[300]} 100%
    );
    z-index: -1;
  }

  svg {
    font-size: 3rem;
    color: ${palette[500]};
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    svg {
      font-size: 2.5rem;
    }
  }
`;

export const EmptyStateTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const EmptyStateDescription = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const EmptyStateButton = styled.button`
  background: linear-gradient(135deg, ${palette[500]} 0%, ${palette[600]} 100%);
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.1rem;
  }
`;
