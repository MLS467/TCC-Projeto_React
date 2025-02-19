import React from 'react';
import { ButtonForm as ButtonFormStyle } from './ButtonForm.style';

const ButtonForm = ({ type, text, reset = null }) => {
    return (
        <ButtonFormStyle reset={reset} type={type}>
            {text}
        </ButtonFormStyle>
    );
}

export default ButtonForm;
