import { OutlineButton, PrimaryButton, SectionContainerStyle } from "./style";
import doctor from "../../../assets/img/medica.png";
import "animate.css";

const SectionBanner = () => {
  return (
    <SectionContainerStyle id="home">
      <div className="Section_Content">
        <div className="section-banner">
          <h1 className="animate__animated animate__fadeInUp">Bem-Vindo</h1>
          <p className="animate__animated animate__slideInLeft">
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
            src={doctor}
            className="animate__animated animate__fadeInRight"
            alt="Doctor"
          />
        </div>
      </div>
    </SectionContainerStyle>
  );
};

export default SectionBanner;
