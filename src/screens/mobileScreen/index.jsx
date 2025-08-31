import {
  MobileScreenContainer,
  ContentWrapper,
  LogoContainer,
  Title,
  Subtitle,
  Description,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  SystemName,
  SystemTitle,
  SystemSubtitle,
  FooterNote,
} from "./style";

const MobileScreen = () => {
  return (
    <MobileScreenContainer>
      <ContentWrapper>
        <LogoContainer>
          <img src="/logo3.png" alt="AtendeBem Logo" />
        </LogoContainer>

        <div>
          <Title>Sistema AtendeBem</Title>
          <Subtitle>Acesso via Computador</Subtitle>
        </div>

        <Description>
          Este sistema foi desenvolvido especificamente para uso em computadores
          desktop, proporcionando a melhor experiência para gestão hospitalar.
        </Description>

        <FeatureList>
          <FeatureItem>
            <FeatureIcon>🖥️</FeatureIcon>
            <FeatureText>Interface otimizada para telas grandes</FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureText>Performance superior em desktop</FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureText>Maior segurança e controle de dados</FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureText>Dashboards completos e detalhados</FeatureText>
          </FeatureItem>
        </FeatureList>

        <SystemName>
          <SystemTitle>AtendeBem</SystemTitle>
          <SystemSubtitle>Sistema de Gestão Hospitalar</SystemSubtitle>
        </SystemName>

        <FooterNote>
          Para acessar o sistema, utilize um computador desktop ou laptop.
          <br />
          Compatível com navegadores modernos: Chrome, Firefox, Safari e Edge.
        </FooterNote>
      </ContentWrapper>
    </MobileScreenContainer>
  );
};

export default MobileScreen;
