import { Card, Content, Description, IconContainer, Title } from "./style";

export default function InfoCard({ title, description, icon }) {
  return (
    <Card>
      <Content>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <IconContainer>
            <span className="material-icons" style={{ fontSize: 24 }}>
              {icon || "gps_fixed"}
            </span>
          </IconContainer>
          <Title>{title}</Title>
        </div>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
}
