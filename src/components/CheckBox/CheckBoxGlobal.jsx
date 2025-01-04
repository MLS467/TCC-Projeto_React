import React from 'react';
import { CheckBoxStyle, CheckBoxContainer } from "./CheckBox.Style";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CheckBoxGlobal = ({ name, text, handleChange }) => {
    const estilo = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    }

    return (
        <CheckBoxContainer>
            <CheckBoxStyle id={name} name={name} type="checkbox" onChange={handleChange} />
            <label htmlFor={name}><span style={estilo} ><MdKeyboardDoubleArrowRight /> {text}</span></label>
        </CheckBoxContainer>
    );
}

export default CheckBoxGlobal;
