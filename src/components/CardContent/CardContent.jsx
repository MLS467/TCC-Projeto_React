import PropTypes from 'prop-types';
import { Button, Container, Content, Description, Image, Text, Title } from './CardContent.style';

const CardContent = ({ title, labImage, text }) => {
    return (
        <Container>
            <Content>
                <Image src={labImage} alt="Laboratório" />
                <Text>
                    <Title>{title}</Title>
                    <Description>
                        {text}
                    </Description>
                    <Button href="#">Saiba mais</Button>
                </Text>
            </Content>
        </Container>
    );
}

CardContent.propTypes = {
    title: PropTypes.string.isRequired,
    labImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default CardContent;
