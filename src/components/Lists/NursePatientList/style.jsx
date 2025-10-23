import styled, { keyframes } from "styled-components";
import { palette } from "../../../constant/colors";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const TitleWithIcon = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4a90e2 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  animation: ${fadeInUp} 0.6s ease-out;

  svg {
    background: linear-gradient(135deg, #4a90e2 0%, #2563eb 100%);
    color: white;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(74, 144, 226, 0.25);
    flex-shrink: 0;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;

    svg {
      padding: 10px;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  animation: ${slideInRight} 0.6s ease-out 0.1s both;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const SearchInput = styled.input`
  padding: 16px 20px;
  border: 2px solid transparent;
  border-radius: 16px;
  font-size: 1rem;
  width: 350px;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #374151;
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::placeholder {
    color: #9ca3af;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border-color: #4a90e2;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 8px 32px rgba(74, 144, 226, 0.2),
      0 0 0 4px rgba(74, 144, 226, 0.1);
    transform: translateY(-2px);
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(74, 144, 226, 0.15);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 18px;
  }
`;

export const FilterButton = styled.button`
  padding: 12px 20px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #4a90e2 0%, #2563eb 100%)"
      : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.active ? "#fff" : "#374151")};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: ${(props) =>
    props.active
      ? "0 8px 24px rgba(74, 144, 226, 0.3)"
      : "0 4px 16px rgba(74, 144, 226, 0.1)"};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(74, 144, 226, 0.25);
    border-color: #4a90e2;
  }

  &:active {
    transform: translateY(0);
  }

  &.priority-alta {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#ef4444")};

    &:hover {
      border-color: #ef4444;
      box-shadow: 0 12px 32px rgba(239, 68, 68, 0.25);
    }
  }

  &.priority-media {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#f59e0b")};

    &:hover {
      border-color: #f59e0b;
      box-shadow: 0 12px 32px rgba(245, 158, 11, 0.25);
    }
  }

  &.priority-baixa {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#10b981")};

    &:hover {
      border-color: #10b981;
      box-shadow: 0 12px 32px rgba(16, 185, 129, 0.25);
    }
  }
`;

export const TableWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;
  margin-top: 24px;
  box-shadow: 0 20px 60px rgba(74, 144, 226, 0.1),
    0 8px 32px rgba(74, 144, 226, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4a90e2, #2563eb, #1e40af, #4a90e2);
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;
  }
`;

export const TableTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  padding: 24px 28px;
  margin: 0;
  border-bottom: 2px solid #f3f4f6;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px 12px 0 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(74, 144, 226, 0.08);

  @media (max-width: 768px) {
    display: none; /* Oculta tabela em mobile */
  }
`;

export const Th = styled.th`
  text-align: left;
  color: #374151;
  font-weight: 700;
  padding: 16px 0;
  font-size: 0.95rem;
`;

export const ThWithIcon = styled.th`
  text-align: left;
  color: #4b5563;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 20px 16px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 2px solid #e2e8f0;
  position: relative;

  &:first-child {
    border-top-left-radius: 16px;
    padding-left: 24px;
  }

  &:last-child {
    border-top-right-radius: 16px;
    padding-right: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  svg {
    color: #6366f1;
    flex-shrink: 0;
    filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2));
  }
`;

export const Td = styled.td`
  padding: 20px 16px;
  border-top: 1px solid #f1f5f9;
  vertical-align: middle;
  font-size: 0.9rem;
  color: #475569;
  font-weight: 500;
  transition: all 0.3s ease;

  tr:hover & {
    background: rgba(74, 144, 226, 0.02);
    color: #1e293b;
  }

  &:first-child {
    font-weight: 600;
    color: #1f2937;
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }

  tr:nth-child(even) & {
    background: rgba(248, 250, 252, 0.5);
  }
`;

export const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 10px 12px;
  margin-right: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  svg {
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  /* Hover para botão de triagem */
  &[data-action="triage"]:hover {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border-color: #059669;
    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.25);
    transform: translateY(-2px);

    svg {
      color: #059669 !important;
      transform: scale(1.1);
    }
  }

  /* Hover para botão de deletar */
  &[data-action="Deletar"]:hover {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border-color: #ef4444;
    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.25);
    transform: translateY(-2px);

    svg {
      color: #ef4444 !important;
      transform: scale(1.1);
    }
  }

  /* Hover para botão de editar */
  &[data-action="edit"]:hover {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border-color: #2563eb;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
    transform: translateY(-2px);

    svg {
      color: #2563eb !important;
      transform: scale(1.1);
    }
  }
`;

export const PriorityBadge = styled.span`
  padding: 6px 16px;
  border-radius: 24px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &.alta {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #dc2626;
    border-color: rgba(220, 38, 38, 0.2);
    box-shadow: 0 4px 16px rgba(220, 38, 38, 0.15);
  }

  &.media {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    color: #d97706;
    border-color: rgba(217, 119, 6, 0.2);
    box-shadow: 0 4px 16px rgba(217, 119, 6, 0.15);
  }

  &.baixa {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    color: #059669;
    border-color: rgba(5, 150, 105, 0.2);
    box-shadow: 0 4px 16px rgba(5, 150, 105, 0.15);
  }
`;

/* Mobile Card Layout */
export const MobileCardContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    gap: 16px;
  }
`;

export const PatientCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4a90e2, #2563eb);
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(74, 144, 226, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const PatientName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  margin-bottom: 4px;
`;

export const WaitTime = styled.span`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #d97706;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(217, 119, 6, 0.2);
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #6366f1;
    flex-shrink: 0;
  }

  span {
    color: #475569;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
`;
