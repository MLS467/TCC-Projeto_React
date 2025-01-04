import styled from 'styled-components';


export const CheckBoxContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
`;


export const CheckBoxStyle = styled.input`
  height: 20px;
  width: 20px;
  border-radius: 50%; /* Define o formato redondo */
  border: 2px solid ${({ theme }) => theme.color.primary}; /* Borda padrão */
  background-color: #f1f1f1;
  cursor: pointer;
  appearance: none; /* Remove o estilo padrão do navegador */
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;

  &:checked {
    background-color: ${({ theme }) => theme.color.primary}; /* Cor de fundo quando marcado */
    border-color: #000; /* Cor da borda quando marcado */
  }

  &:checked:after {
    content: '';
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:10px;
    height:10px;
    border-radius:50%; /* Define o marcador como redondo */
    background-color:#fff; 
}
`;