import divisao from "../../assets/img/divisao.svg";
import { BreakPageContainerStyle, BreakPageImgStyle } from './BreakPage.style';
import { v4 } from 'uuid';

const BreakPage = ({ children, title, id }) => {
    return (
        <BreakPageContainerStyle id={id} key={v4()}>
            <BreakPageImgStyle src={divisao} alt="divisao" />
            <h2>{title}</h2>
            {children}
        </BreakPageContainerStyle>
    );
}

export default BreakPage;
