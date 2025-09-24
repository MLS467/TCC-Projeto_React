import {
  SpinnerScreenContainer,
  SpinnerWrapper,
  LoadingText,
  SubText,
  HeartContainer,
  LogoHeart,
  PulseRings,
  PulseRing,
} from "./SpinnerScreen.style";
import { useEffect } from "react";
import { animate, svg } from "animejs";

const SpinnerScreen = ({ message = "Carregando aplicação..." }) => {
  const heartSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 128 128"
    >
      <path
        id="spinner-heart"
        d="M64 117s-46.6-27.5-52.7-61.2C8.5 30.7 32.2 12 53.8 24.8c2.4 1.4 5 3.6 7.3 6.1 2.3-2.5 4.9-4.7 7.3-6.1C95.8 12 119.5 30.7 116.7 55.8 110.6 89.5 64 117 64 117Z"
        stroke="#4A90E2"
        strokeWidth="3"
        fill="#E53935"
      />

      <path
        id="spinner-beatLine"
        d="M27 64h14l7-20 9 42 10-30 7 18h18"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );

  useEffect(() => {
    const coracao = document.getElementById("spinner-heart");
    const sinal_vital = document.getElementById("spinner-beatLine");

    if (coracao && sinal_vital) {
      // Animação do coração pulsando
      animate(coracao, {
        fill: ["#E53935", "#FF1744", "#E53935"],
        stroke: ["#4A90E2", "#fff", "#4A90E2"],
        duration: 1200,
        loop: true,
        easing: "easeInOutSine",
      });

      // Animação da linha de batimento
      animate(svg.createDrawable(sinal_vital), {
        draw: "0 1",
        duration: 2000,
        easing: "linear",
        loop: true,
      });

      // Movimento da linha
      animate(sinal_vital, {
        translateX: ["-15px", "15px"],
        duration: 2000,
        easing: "linear",
        loop: true,
        direction: "alternate",
      });
    }
  }, []);

  return (
    <SpinnerScreenContainer>
      <SpinnerWrapper>
        <HeartContainer>
          <PulseRings>
            <PulseRing delay="0s" />
            <PulseRing delay="0.4s" />
            <PulseRing delay="0.8s" />
          </PulseRings>
          <LogoHeart>{heartSvg}</LogoHeart>
        </HeartContainer>
        <LoadingText>{message}</LoadingText>
        <SubText>Aguarde um momento...</SubText>
      </SpinnerWrapper>
    </SpinnerScreenContainer>
  );
};

export default SpinnerScreen;
