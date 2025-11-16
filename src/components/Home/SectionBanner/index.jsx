import { OutlineButton, PrimaryButton, SectionContainerStyle } from "./style";
import "animate.css";

const SectionBanner = () => {
  return (
    <SectionContainerStyle id="home">
      <div className="Section_Content">
        <div className="section-banner">
          <h1>Bem-Vindo</h1>
          <p>
            O sistema mais moderno para gerenciamento médico e hospitalar,
            oferecendo soluções integradas para melhorar o atendimento aos
            pacientes e otimizar os processos administrativos da sua
            instituição.
          </p>
          <div className="section-buttons">
            <PrimaryButton>Começar Agora</PrimaryButton>
            <OutlineButton>Saiba Mais</OutlineButton>
          </div>
        </div>

        <div className="section-image-container">
          <img
            src="https://res.cloudinary.com/dyyiewmgy/image/upload/v1763332647/medica_icyzmr.png"
            alt="Doctor"
          />
        </div>
      </div>
    </SectionContainerStyle>
  );
};

export default SectionBanner;
