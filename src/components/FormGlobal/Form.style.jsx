import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const FormSection = styled.fieldset`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  background: #ffffff;

  legend {
    font-size: 1.2em;
    font-weight: bold;
    padding: 0 5px;
    color: #333;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
