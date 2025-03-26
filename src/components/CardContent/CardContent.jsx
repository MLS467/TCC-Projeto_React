import React from 'react';
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

export default CardContent;
