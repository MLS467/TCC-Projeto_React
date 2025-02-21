import React from 'react';
import { ContainerButtonAnimation } from './ButtonAnimation.style';

const ButtonAnimation = ({ text, action }) => {
    return (
        <ContainerButtonAnimation>
            <div className="container">
                <button type='submit' onClick={action} className="button">{text}</button>
            </div>
        </ContainerButtonAnimation>
    );
}

export default ButtonAnimation;
