import React from 'react';
import InputLine from './InputTest/InputLine';
import { Container } from './InputTest/InputLine.style';

const Teste = () => {

    return (
        <Container>
            <InputLine
                size="xxl"
                Title="Nome"
                name="nome"
                type="text"
            />

            <InputLine
                size="m"
                Title="idade"
                name="idade"
                type="text"
            />
        </Container>
    );
}

export default Teste;
