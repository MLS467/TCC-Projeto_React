import React from 'react';
import { Container, Input, Label, Required } from './NewInput.style';

const NewInput = ({ name, label, type, size, placeholder, required, action = () => { } }) => {
    return (
        <Container $size={size}>
            <Label htmlFor={label}> {label}:{required ? <Required>*</Required> : ''} </Label>
            <Input name={name} onChange={action} type={type} id={label} placeholder={placeholder} />
        </Container>
    );
}


export default NewInput;
