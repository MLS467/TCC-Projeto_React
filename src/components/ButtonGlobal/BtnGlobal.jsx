import React from 'react';
import { BaseButtonStyle } from './BtnGlobalStyle';

const BtnGlobal = ({ type, text, btnBgColor, btnColor, size, fontSize }) => {
    return (
        <BaseButtonStyle fontSize={fontSize} width={size} size={size} $btnBgColor={btnBgColor} $btnColor={btnColor} type={type}>{text}</BaseButtonStyle>
    );
}

export default BtnGlobal;
