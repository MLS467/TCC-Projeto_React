import React from "react";
import { Content, IconBar, SectionWrapper, Title, TitleRow } from "./style";

const SectionTitleBox = ({ iconColor = "#2563eb", title, children }) => (
  <SectionWrapper>
    <TitleRow>
      <IconBar color={iconColor} />
      <Title>{title}</Title>
    </TitleRow>
    <Content>{children}</Content>
  </SectionWrapper>
);

export default SectionTitleBox;
