import styled from 'styled-components';

// Estilo comum para Link e Button
export const BaseButtonStyle = styled.button`
    color: ${props => props.btnColor || props.theme.color.primary};
    background-color: ${props => props.btnBgColor || '#fff'};
    width: ${(props) => props.size ? props.theme.buttonWidths[props.size] : '100px'};
    padding: 10px 20px;
    border-radius: 150px;
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    margin: 0 5px;
    font-weight: bold;
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    padding: ${(props) => props.size ? props.theme.buttonSizes[props.size] : '16px 100px'};
    outline: none;
    border: none;
    
    &:hover {
        background-color: ${props => props.theme.color.primary};
        color: #fff;
    }
`;