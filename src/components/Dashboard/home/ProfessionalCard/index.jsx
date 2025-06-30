import {
  ProfessionalCardWrapper,
  ProfessionalInfo,
  ProfessionalName,
  ProfessionalRole,
  ProfessionalContact,
  StatusBadge,
  ProfessionalAvatar,
  ContactItem,
} from "./style";
import { FiPhone, FiMail } from "react-icons/fi";

const ProfessionalCard = ({ name, role, phone, email, status, avatar }) => {
  return (
    <ProfessionalCardWrapper>
      <ProfessionalAvatar>
        {avatar ? (
          <img src={avatar} alt={name} />
        ) : (
          <span>{name?.charAt(0) || "?"}</span>
        )}
      </ProfessionalAvatar>

      <ProfessionalInfo>
        <ProfessionalName>{name}</ProfessionalName>
        <ProfessionalRole>{role}</ProfessionalRole>

        <ProfessionalContact>
          <ContactItem>
            <FiPhone size={14} />
            {phone}
          </ContactItem>
          <ContactItem>
            <FiMail size={14} />
            {email}
          </ContactItem>
        </ProfessionalContact>
      </ProfessionalInfo>

      <StatusBadge status={status}>{status}</StatusBadge>
    </ProfessionalCardWrapper>
  );
};

export default ProfessionalCard;
