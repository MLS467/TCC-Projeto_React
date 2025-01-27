import React from 'react';
import { BtnButton } from './Button.Style';


const NewButton = ({ btnColor, btnBgColor, text, path }) => {
    return (
        <BtnButton id={text} to={path} btnColor={btnColor} btnBgColor={btnBgColor} >{text}</BtnButton>
    );
}

export default NewButton;
