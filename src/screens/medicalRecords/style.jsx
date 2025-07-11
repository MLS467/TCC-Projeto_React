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
  min-height: 50vh;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 2rem auto;
  
  h2 {
    color: #EF4444;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #6B7280;
    margin-bottom: 1.5rem;
  }
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 2rem auto;
  
  h2 {
    color: #374151;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #6B7280;
    margin-bottom: 1.5rem;
  }
`;
