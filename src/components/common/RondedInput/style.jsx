import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #bfc7d1; /* cinza inicial */
  border-radius: 18px;
  font-size: 1.1rem;
  color: #222;
  background: #fff;
  outline: none;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #8b98a9;
    opacity: 1;
  }

  &:focus {
    border: 2px solid #2563eb; /* azul fina interna */
    box-shadow: 0 0 1px #0a1a2f; /* borda preta grossa externa */
  }
`;
