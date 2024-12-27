import React from 'react';
import { InputLoginStyle } from './InputLogin.Style';

const InputLogin = ({ type, name, placeholder, handleChange = '' }) => {
    return (
        <div>
            <InputLoginStyle
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                required={true}
            />
        </div>
    );
}

export default InputLogin;
