import React from 'react';

const InputLogin = ({ type, name, placeholder, handleChange = '' }) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input
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
