import { palette } from "../../../constant/colors";
import { CardContainer, IconCircle, CardTitle, CardText } from "./style";

const CardRange = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconCircle>
        <span
          className="material-icons"
          style={{ fontSize: 64, color: palette[800] }}
        >
          {icon}
        </span>
      </IconCircle>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </CardContainer>
  );
};

export default CardRange;
