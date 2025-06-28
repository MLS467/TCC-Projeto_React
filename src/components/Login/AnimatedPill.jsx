import styled, { keyframes } from "styled-components";
import pill from "../../assets/img/pill.svg";
import tube from "../../assets/img/tube.svg";
import heart from "../../assets/img/heart.svg";
import ambulance from "../../assets/img/ambulance.svg";
import rocket from "../../assets/img/rocket.svg";
import stethoscope from "../../assets/img/stethoscope.svg";
import link from "../../assets/img/link.svg";

const float = keyframes`
  0% { 
    transform: translateY(0);
    opacity: 1;
  }
  50% { 
    transform: translateY(-24px);
    opacity: 0.5;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
`;

const IconCircle = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 18px 0 rgba(44, 62, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  z-index: 1;
  animation: ${float} ${({ duration }) => duration || 5}s ease-in-out infinite;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1 !important;
    box-shadow: 0 8px 32px 0 rgba(44, 62, 80, 0.18), 0 0 0 4px #eaf0fb;
    transform: scale(1.08);
  }
`;

const icons = [
  { src: pill, alt: "Pílula", left: "4%", top: "20px", duration: 5 },
  { src: tube, alt: "Tubo", left: "22%", top: "120px", duration: 6 },
  { src: heart, alt: "Coração", left: "50%", top: "70px", duration: 4.5 },
  { src: ambulance, alt: "Ambulância", left: "7%", top: "70%", duration: 5.5 },
  { src: rocket, alt: "Foguete", left: "38%", top: "85%", duration: 6.2 },
  {
    src: stethoscope,
    alt: "Estetoscópio",
    left: "93%",
    top: "92%",
    duration: 5.8,
  },
  { src: link, alt: "Link", left: "105%", top: "10%", duration: 5.2 },
];

const AnimatedIcons = () => (
  <>
    {icons.map((icon, i) => (
      <IconCircle
        key={i}
        left={icon.left}
        top={icon.top}
        duration={icon.duration}
        style={{ animationDelay: `${i * 0.7}s` }}
      >
        <img src={icon.src} alt={icon.alt} width={36} height={36} />
      </IconCircle>
    ))}
  </>
);

export default AnimatedIcons;
