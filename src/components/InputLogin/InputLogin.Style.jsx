import styled from "styled-components";

export const InputLoginStyle = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 100px;
    margin: 20px 0;
    padding: 0 10px;
    font-size: 20px;
    outline: none;
    &:focus{
        border: 2px solid var(--secondary-color);
    }
`;