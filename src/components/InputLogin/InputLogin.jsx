import React from 'react';
import { InputLoginStyle } from './InputLogin.Style';

const InputLogin = ({ type, onBlur = () => { }, name, placeholder, handleChange = () => { }, size, p, value }) => {
    return (
        <div>
            <InputLoginStyle
                id={name}
                type={type}
                onBlur={onBlur}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                required={true}
                size={size}
                p={p}
                value={value}
            />
        </div>
    );
}

export default InputLogin;
