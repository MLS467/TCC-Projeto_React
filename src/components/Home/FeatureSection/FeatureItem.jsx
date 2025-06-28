import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 36px;
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(props) => props.bg || "#eaf2fe"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
`;

const Desc = styled.p`
  margin: 4px 0 0 0;
  color: #4a5568;
  font-size: 1.1rem;
`;

const FeatureItem = ({ icon, iconColor, bgColor, title, desc }) => (
  <Item>
    <IconBox bg={bgColor}>
      <span
        className="material-icons"
        style={{ color: iconColor, fontSize: 28 }}
      >
        {icon}
      </span>
    </IconBox>
    <div>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </div>
  </Item>
);

export default FeatureItem;
