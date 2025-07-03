import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  width: 200px;
`;

export const DocumentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  min-height: 48px;

  ${(props) => {
    switch (props.variant) {
      case "print":
        return `
          background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
          color: white;
          
          &:hover {
            background: linear-gradient(135deg, #357ABD 0%, #2C5AA0 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
          }
        `;
      case "save":
        return `
          background: linear-gradient(135deg, #2E86AB 0%, #1B5F7A 100%);
          color: white;
          
          &:hover {
            background: linear-gradient(135deg, #1B5F7A 0%, #0F3A4A 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(46, 134, 171, 0.3);
          }
        `;
      case "send":
        return `
          background: linear-gradient(135deg, #0F4C75 0%, #0A3555 100%);
          color: white;
          
          &:hover {
            background: linear-gradient(135deg, #0A3555 0%, #051F33 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(15, 76, 117, 0.3);
          }
        `;
      case "cancel":
        return `
          background: linear-gradient(135deg, #E74C3C 0%, #C0392B 100%);
          color: white;
          
          &:hover {
            background: linear-gradient(135deg, #C0392B 0%, #A93226 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
          }
        `;
      default:
        return `
          background: #4A90E2;
          color: white;
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`;

export const ButtonText = styled.span`
  flex: 1;
  text-align: left;
`;
