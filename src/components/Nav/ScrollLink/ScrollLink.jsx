import PropTypes from 'prop-types';
import { StyledScrollLink } from './ScrollLink.style';


const ScrollLink_ = ({id, title}) => {
    return (
    <StyledScrollLink style={{color:"#379BD2", cursor:'pointer'}} to={id} smooth={true} duration={500}>
        {title}
    </StyledScrollLink>
    );
}

ScrollLink_.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ScrollLink_;
