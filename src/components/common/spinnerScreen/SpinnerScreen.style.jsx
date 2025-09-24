import styled, { keyframes } from "styled-components";
import { palette } from "../../../constant/colors";

// Animação de pulsação do coração
const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(1.1);
  }
`;

// Animação das ondas de pulso
const pulseWave = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

// Animação de fade suave para textos
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container principal com fundo limpo
export const SpinnerScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// Wrapper centralizado do conteúdo
export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  animation: ${fadeIn} 0.6s ease-out;
`;

// Container do coração com posicionamento relativo para as ondas
export const HeartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
`;

// Container das ondas de pulso
export const PulseRings = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Ondas de pulso individuais
export const PulseRing = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid #4a90e2;
  border-radius: 50%;
  animation: ${pulseWave} 2.4s ease-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: 0.6;
`;

// Container do coração da logo com animações
export const LogoHeart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 20px rgba(229, 57, 53, 0.4));

  svg {
    overflow: visible;
    display: block;
  }
`;

// Ícone do coração feito com CSS (backup, caso necessário)
export const CSSHeart = styled.div`
  position: relative;
  width: 40px;
  height: 36px;
  z-index: 2;
  animation: ${heartbeat} 1.2s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.4));

  &::before,
  &::after {
    content: "";
    width: 26px;
    height: 40px;
    position: absolute;
    left: 20px;
    top: 0;
    background: #ef4444;
    border-radius: 20px 20px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  /* Gradiente para dar profundidade */
  &::before {
    background: linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%);
  }

  &::after {
    background: linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%);
  }

  /* Brilho interno */
  &:hover::before,
  &:hover::after {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.3);
  }
`;

// Texto principal com cor da paleta
export const LoadingText = styled.div`
  color: ${palette[800]};
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`;

// Subtexto com cor mais suave
export const SubText = styled.div`
  color: ${palette[1000]};
  font-size: 0.95rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  letter-spacing: -0.01em;
  opacity: 0.8;
`;
