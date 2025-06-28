import { CardListPatientContainer } from "./style";

const CardListPatient = ({ title, content, bgColor, borderColor }) => {
  return (
    <CardListPatientContainer $bgcolor={bgColor} $bordercolor={borderColor}>
      <div>
        <span className="card_title">{title}</span>
        <span className="card_content">{content}</span>
      </div>
      <div className="card_icon_wrapper">
        <span className="card_icone"></span>
      </div>
    </CardListPatientContainer>
  );
};

export default CardListPatient;
