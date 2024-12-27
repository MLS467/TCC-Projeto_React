import styled from 'styled-components';

// Estilo comum para Link e Button
export const BaseButtonStyle = styled.button`
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
    outline: none;
    border: none;
    
    &:hover {
        background-color: var(--primary-color);
        color: #fff;
    }
`;