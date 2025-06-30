import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const ProfessionalCardWrapper = styled.div`
  background: ${palette[700]};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

export const ProfessionalAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const ProfessionalInfo = styled.div`
  flex: 1;
`;

export const ProfessionalName = styled.h4`
  color: white;
  margin: 0 0 4px 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const ProfessionalRole = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 8px 0;
  font-size: 0.85rem;
`;

export const ProfessionalContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;

  svg {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const StatusBadge = styled.span`
  background: ${(props) =>
    props.status === "Ativo"
      ? palette.patient_color.mild
      : palette.patient_color.serious};
  color: ${(props) =>
    props.status === "Ativo"
      ? palette.patient_color.mild_details
      : palette.patient_color.serious_details};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;
