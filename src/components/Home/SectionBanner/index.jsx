import { OutlineButton, PrimaryButton, SectionContainerStyle } from "./style";
import doctor from "../../../assets/img/medica.png";

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
          <img src={doctor} alt="Doctor" />
        </div>
      </div>
    </SectionContainerStyle>
  );
};

export default SectionBanner;
