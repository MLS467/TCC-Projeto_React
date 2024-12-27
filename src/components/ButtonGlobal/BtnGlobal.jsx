import React from 'react';
import { BaseButtonStyle } from './BtnGlobalStyle';

const BtnGlobal = ({ type = '', text, btnBgColor, btnColor }) => {
    return (
        <BaseButtonStyle btnBgColor={btnBgColor} btnColor={btnColor} type={type}>{text}</BaseButtonStyle>
    );
}

export default BtnGlobal;
