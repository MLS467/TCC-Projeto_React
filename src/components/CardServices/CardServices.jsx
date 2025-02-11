import React from 'react';
import { CardServiceStyle } from './CardService.style';

const CardServices = ({ img, title, description, right, top }) => {
    return (
        <CardServiceStyle right={right} top={top}>
            <div>
                <img src={img} alt={`image ${title}`} width={'50px'} />
                <h4>{title}</h4>
            </div>
            <p>{description}</p>
        </CardServiceStyle>
    );
}

export default CardServices;
