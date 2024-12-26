import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const BtnButton = styled(Link)`
    color: ${props => props.btnColor || 'var(--primary-color)'};
    background-color: ${props => props.btnBgColor || '#fff'};
    padding: 10px 20px;
    border-radius: 150px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    padding: 8px 80px;
    border:1px solid var(--primary-color);
    &:hover {
        background-color: var(--primary-color);
        color: #fff;
    }
`;