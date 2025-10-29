import styled from "styled-components";
import { palette } from "@/constant/colors";

export const BedsContainer = styled.div`
  min-height: 100vh;
  background: ${palette[50]};
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: ${palette.shadow.boxDefault};
  text-align: center;
  border-left: 4px solid ${props => {
    if (props.status === 'occupied') return '#dc2626';
    if (props.status === 'available') return '#16a34a';
    return palette[700];
  }};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 40px rgba(34, 144, 246, 0.15);
  }
`;

export const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${palette[800]};
`;

export const StatLabel = styled.p`
  font-size: 0.9rem;
  color: ${palette[1000]};
  margin: 0;
  font-weight: 500;
`;

export const BedsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px 0;
  
  h2 {
    color: ${palette[800]};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  background: white;
  padding: 4px;
  border-radius: 8px;
  box-shadow: ${palette.shadow.boxDefault};
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: ${props => props.active ? palette[700] : 'transparent'};
  color: ${props => props.active ? 'white' : palette[800]};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? palette[800] : palette[100]};
  }
`;

export const BedsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const BedCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${palette.shadow.boxDefault};
  position: relative;
  border: 2px solid ${props => 
    props.status === 'occupied' ? '#fecaca' : '#bbf7d0'
  };
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 15px 45px rgba(34, 144, 246, 0.2);
  }
`;

export const StatusIndicator = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => 
    props.status === 'occupied' ? '#dc2626' : '#16a34a'
  };
  box-shadow: 0 0 0 3px ${props => 
    props.status === 'occupied' ? '#fecaca' : '#bbf7d0'
  };
`;

export const BedNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${palette[800]};
  margin-bottom: 8px;
  
  svg {
    color: ${palette[700]};
  }
`;

export const BedStatus = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => 
    props.status === 'occupied' ? '#dc2626' : '#16a34a'
  };
  background: ${props => 
    props.status === 'occupied' ? '#fef2f2' : '#f0fdf4'
  };
  padding: 6px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 16px;
`;

export const BedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: ${palette[1000]};
    
    svg {
      color: ${palette[700]};
      flex-shrink: 0;
    }
    
    span {
      font-weight: 500;
    }
  }
`;

export const BedActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  
  a {
    text-decoration: none;
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'link' && `
    background: ${palette[700]};
    color: white;
    
    &:hover {
      background: ${palette[800]};
      transform: translateY(-1px);
    }
  `}
  
  ${props => props.variant === 'unlink' && `
    background: #dc2626;
    color: white;
    
    &:hover {
      background: #b91c1c;
      transform: translateY(-1px);
    }
  `}
  
  svg {
    flex-shrink: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: ${palette[700]};
  
  svg {
    margin-bottom: 16px;
    animation: pulse 2s ease-in-out infinite;
  }
  
  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: ${palette.shadow.boxDefault};
  text-align: center;
  
  svg {
    color: ${palette[400]};
    margin-bottom: 16px;
  }
  
  h3 {
    color: ${palette[800]};
    font-size: 1.25rem;
    margin: 0 0 8px 0;
  }
  
  p {
    color: ${palette[1000]};
    font-size: 0.9rem;
    margin: 0 0 20px 0;
  }
  
  button {
    background: ${palette[700]};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease;
    
    &:hover {
      background: ${palette[800]};
    }
  }
`;