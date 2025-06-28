import { SectionWrapper, Title, Description } from "./style";

const DescriptionSection = ({ title, description }) => {
  return (
    <SectionWrapper id="description-section">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </SectionWrapper>
  );
};

export default DescriptionSection;
