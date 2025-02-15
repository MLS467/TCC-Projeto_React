import React from 'react';
import { Container, ContainerInputStyle, NewInputStyle } from './InputLine.style';

const InputLine = ({ Title, name, type, size }) => {
    return (
        <ContainerInputStyle $width={size}>
            <NewInputStyle type={type} id={name} name={name} placeholder={Title} />
        </ContainerInputStyle>
    );
}

export default InputLine;
