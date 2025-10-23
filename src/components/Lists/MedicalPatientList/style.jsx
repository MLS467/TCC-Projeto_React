import styled, { keyframes } from "styled-components";

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
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  animation: ${fadeInUp} 0.6s ease-out;

  svg {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.25);
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
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.12);
  transition: all 0.3s ease;
  position: relative;

  &::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
    transform: translateY(-2px);
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(5, 150, 105, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 18px;
    font-size: 0.95rem;
  }
`;

export const FilterButton = styled.button`
  padding: 12px 20px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.active ? "#fff" : "#374151")};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.active
      ? "0 8px 24px rgba(5, 150, 105, 0.25)"
      : "0 4px 16px rgba(0, 0, 0, 0.08)"};
  backdrop-filter: blur(10px);
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.active
        ? "0 12px 32px rgba(5, 150, 105, 0.35)"
        : "0 8px 24px rgba(0, 0, 0, 0.12)"};
    border-color: #10b981;
  }

  &.priority-mild {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#10b981")};
    border-color: ${(props) => (props.active ? "transparent" : "#a7f3d0")};
    box-shadow: ${(props) =>
      props.active
        ? "0 8px 24px rgba(16, 185, 129, 0.25)"
        : "0 4px 16px rgba(16, 185, 129, 0.08)"};

    &:hover {
      border-color: #10b981;
      box-shadow: ${(props) =>
        props.active
          ? "0 12px 32px rgba(16, 185, 129, 0.35)"
          : "0 8px 24px rgba(16, 185, 129, 0.15)"};
    }
  }

  &.priority-moderate {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#f59e0b")};
    border-color: ${(props) => (props.active ? "transparent" : "#fed7aa")};
    box-shadow: ${(props) =>
      props.active
        ? "0 8px 24px rgba(245, 158, 11, 0.25)"
        : "0 4px 16px rgba(245, 158, 11, 0.08)"};

    &:hover {
      border-color: #f59e0b;
      box-shadow: ${(props) =>
        props.active
          ? "0 12px 32px rgba(245, 158, 11, 0.35)"
          : "0 8px 24px rgba(245, 158, 11, 0.15)"};
    }
  }

  &.priority-serious {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#f97316")};
    border-color: ${(props) => (props.active ? "transparent" : "#fed7aa")};
    box-shadow: ${(props) =>
      props.active
        ? "0 8px 24px rgba(249, 115, 22, 0.25)"
        : "0 4px 16px rgba(249, 115, 22, 0.08)"};

    &:hover {
      border-color: #f97316;
      box-shadow: ${(props) =>
        props.active
          ? "0 12px 32px rgba(249, 115, 22, 0.35)"
          : "0 8px 24px rgba(249, 115, 22, 0.15)"};
    }
  }

  &.priority-critical {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
        : "rgba(255, 255, 255, 0.9)"};
    color: ${(props) => (props.active ? "#fff" : "#ef4444")};
    border-color: ${(props) => (props.active ? "transparent" : "#fecaca")};
    box-shadow: ${(props) =>
      props.active
        ? "0 8px 24px rgba(239, 68, 68, 0.25)"
        : "0 4px 16px rgba(239, 68, 68, 0.08)"};

    &:hover {
      border-color: #ef4444;
      box-shadow: ${(props) =>
        props.active
          ? "0 12px 32px rgba(239, 68, 68, 0.35)"
          : "0 8px 24px rgba(239, 68, 68, 0.15)"};
    }
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.8rem;
  }
`;

export const TableWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;
  margin-top: 24px;
  box-shadow: 0 20px 60px rgba(5, 150, 105, 0.1),
    0 8px 32px rgba(5, 150, 105, 0.05);
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
    background: linear-gradient(90deg, #059669, #10b981, #34d399, #059669);
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;
  }
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(5, 150, 105, 0.08);

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
  color: #6b7280;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 20px 16px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-bottom: 2px solid #e5e7eb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;

  &:first-child {
    border-top-left-radius: 16px;
  }

  &:last-child {
    border-top-right-radius: 16px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
  }

  svg {
    color: #059669;
    flex-shrink: 0;
    filter: drop-shadow(0 2px 4px rgba(5, 150, 105, 0.2));
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #059669, #10b981);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
    font-size: 0.8rem;
  }
`;

export const Td = styled.td`
  padding: 20px 16px;
  border-top: 1px solid #f3f4f6;
  vertical-align: middle;
  font-size: 0.9rem;
  color: #374151;
  transition: all 0.2s ease;
  position: relative;

  &:first-child {
    font-weight: 600;
    color: #1f2937;
    background: linear-gradient(
      135deg,
      rgba(5, 150, 105, 0.02) 0%,
      rgba(16, 185, 129, 0.02) 100%
    );
  }

  &:last-child {
    padding-right: 16px;
  }

  tr:hover & {
    background: rgba(5, 150, 105, 0.02);
    transform: translateY(-1px);
  }

  tr:nth-child(even) & {
    background: rgba(249, 250, 251, 0.5);
  }

  tr:nth-child(even):hover & {
    background: rgba(5, 150, 105, 0.03);
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
    font-size: 0.85rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px 12px;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  svg {
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  /* Hover para botão de consulta */
  &[data-action="consult"]:hover {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border-color: #059669;
    box-shadow: 0 8px 24px rgba(5, 150, 105, 0.25);
    svg {
      color: #059669 !important;
      transform: scale(1.1);
    }
  }

  /* Hover para botão de deletar */
  &[data-action="Deletar"]:hover {
    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
    border-color: #ef4444;
    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.25);
    svg {
      color: #ef4444 !important;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    padding: 8px 10px;

    svg {
      font-size: 1rem;
    }
  }
`;
export const PriorityBadge = styled.span`
  padding: 6px 16px;
  border-radius: 25px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid;
  transition: all 0.2s ease;

  &.mild {
    background: linear-gradient(135deg, #10b981, #059669);
    color: #fff;
    border-color: #059669;
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
  }

  &.moderate {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: #fff;
    border-color: #d97706;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
  }

  &.serious {
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: #fff;
    border-color: #ea580c;
    box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
  }

  &.critical {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: #fff;
    border-color: #dc2626;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
