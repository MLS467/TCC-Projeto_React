import { Link } from "react-router-dom";
import { LogoContainer } from "./style";
import { useEffect } from "react";
import { animate, svg } from "animejs";

const Logo = () => {
  const path = "/home";

  const svg_motionPath = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 128 128"
    >
      <path
        id="heart"
        d="M64 117s-46.6-27.5-52.7-61.2C8.5 30.7 32.2 12 53.8 24.8c2.4 1.4 5 3.6 7.3 6.1 2.3-2.5 4.9-4.7 7.3-6.1C95.8 12 119.5 30.7 116.7 55.8 110.6 89.5 64 117 64 117Z"
        stroke="#fff"
        strokeWidth="6"
        fill="white"
      />

      <path
        id="beatLine"
        d="M27 64h14l7-20 9 42 10-30 7 18h18"
        stroke="#fff"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );

  useEffect(() => {
    const coracao = document.getElementById("heart");
    const sinal_vital = document.getElementById("beatLine");

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
  }, []);

  return (
    <Link to={path}>
      <LogoContainer>
        {svg_motionPath}
        <span>AtendeBem</span>
      </LogoContainer>
    </Link>
  );
};

export default Logo;
