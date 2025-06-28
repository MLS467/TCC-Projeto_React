import React from "react";
import styled from "styled-components";
import FeatureList from "./FeatureList";
import FeatureImage from "./FeatureImage";

const Section = styled.section`
  width: 100%;
  min-height: 480px;
  background: #eaf0fb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  width: 1200px;
  max-width: 98vw;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

const FeatureListSection = () => (
  <Section>
    <Content>
      <FeatureList />
      <FeatureImage />
    </Content>
  </Section>
);

export default FeatureListSection;
