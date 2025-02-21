import React from 'react';
import { Container, Input, Label, Required } from './NewInput.style';

const NewInput = (props) => {

    const { name, label, type, size, placeholder, required, action, search, value } = props;
    const requiredTrue = props.required ? 'required' : '';
    return (
        <Container $size={size}>
            <Label htmlFor={label}> {label}:{required ? <Required>*</Required> : ''} </Label>
            <Input {...requiredTrue} value={value} name={name} onBlur={search ? search : undefined} onChange={action || (() => { })} type={type} id={label} placeholder={placeholder} />
        </Container>
    );
}


export default NewInput;
