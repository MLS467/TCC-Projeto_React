import {
  MobileContainer,
  LogoContainer,
  ContentContainer,
  Title,
  Description,
  Icon,
} from "./style";
import { useEffect } from "react";
import { animate, svg } from "animejs";

const MobileScreen = () => {
  // Logo sem Router (versão estática para mobile)
  const LogoWithoutRouter = () => {
    const svg_motionPath = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 128 128"
      >
        <path
          id="heart-mobile"
          d="M64 117s-46.6-27.5-52.7-61.2C8.5 30.7 32.2 12 53.8 24.8c2.4 1.4 5 3.6 7.3 6.1 2.3-2.5 4.9-4.7 7.3-6.1C95.8 12 119.5 30.7 116.7 55.8 110.6 89.5 64 117 64 117Z"
          stroke="#fff"
          strokeWidth="6"
          fill="white"
        />

        <path
          id="beatLine-mobile"
          d="M27 64h14l7-20 9 42 10-30 7 18h18"
          stroke="#fff"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    );

    useEffect(() => {
      const coracao = document.getElementById("heart-mobile");
      const sinal_vital = document.getElementById("beatLine-mobile");

      if (coracao && sinal_vital) {
        animate(coracao, {
          scale: [1, 1.1],
          fill: ["#FFF", "#E53935"],
          stroke: ["#4A90E2", "#FFF"],
          direction: "alternate",
          duration: 1500,
          loop: true,
          easing: "easeInOutSine",
        });

        animate(svg.createDrawable(sinal_vital), {
          draw: "0 1",
          duration: 3000,
          easing: "linear",
          loop: true,
        });

        animate(sinal_vital, {
          translateX: ["-20px", "20px"],
          duration: 3000,
          easing: "linear",
          loop: true,
        });
      }
    }, []);

    return (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {svg_motionPath}
        <span
          style={{ fontSize: "24px", fontWeight: "bold", color: "#4A90E2" }}
        >
          AtendeBem
        </span>
      </div>
    );
  };

  return (
    <MobileContainer>
      <LogoContainer>
        <LogoWithoutRouter />
      </LogoContainer>

      <ContentContainer>
        <Title>Sistema Disponível Apenas para Desktop</Title>
        <Description>
          Este sistema foi desenvolvido especificamente para computadores e
          oferece a melhor experiência em telas maiores. Para acessar todas as
          funcionalidades do AtendeBem, utilize um computador ou laptop.
        </Description>
        <Icon>💻</Icon>

        <Description
          style={{ marginTop: "20px", fontSize: "14px", opacity: 0.8 }}
        >
          Acesse novamente em um desktop para utilizar o sistema completo.
        </Description>
      </ContentContainer>
    </MobileContainer>
  );
};

export default MobileScreen;
