import { MdFavoriteBorder, MdMail, MdCall, MdLocationOn } from "react-icons/md";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterDesc,
  FooterBottom,
  FooterDivider,
  FooterContactItem,
} from "./style";

const Footer = () => (
  <FooterContainer id="footer">
    <FooterContent>
      <FooterColumn style={{ flex: 2 }}>
        <FooterLogo>
          <MdFavoriteBorder
            style={{ fontSize: 30, verticalAlign: "middle", color: "#fff" }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: 22,
              marginLeft: 8,
              color: "#fff",
            }}
          >
            AtendeBem
          </span>
        </FooterLogo>
        <FooterDesc>
          Transformando o futuro da medicina
          <br />
          com tecnologia avançada e cuidado
          <br />
          humanizado.
        </FooterDesc>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Sistema</FooterTitle>
        <FooterList>
          <FooterListItem>Funcionalidades</FooterListItem>
          <FooterListItem>Segurança</FooterListItem>
          <FooterListItem>Integrações</FooterListItem>
          <FooterListItem>Suporte</FooterListItem>
        </FooterList>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Empresa</FooterTitle>
        <FooterList>
          <FooterListItem>Sobre Nós</FooterListItem>
          <FooterListItem>Carreiras</FooterListItem>
          <FooterListItem>Parcerias</FooterListItem>
          <FooterListItem>Blog</FooterListItem>
        </FooterList>
      </FooterColumn>
      <FooterColumn>
        <FooterTitle>Contato</FooterTitle>
        <FooterList>
          <FooterContactItem>
            <MdMail
              style={{ fontSize: 18, verticalAlign: "middle", marginRight: 6 }}
            />
            contato@medisystem.com
          </FooterContactItem>
          <FooterContactItem>
            <MdCall
              style={{ fontSize: 18, verticalAlign: "middle", marginRight: 6 }}
            />
            (11) 9999-9999
          </FooterContactItem>
          <FooterContactItem>
            <MdLocationOn
              style={{ fontSize: 18, verticalAlign: "middle", marginRight: 6 }}
            />
            São Paulo, SP
          </FooterContactItem>
        </FooterList>
      </FooterColumn>
    </FooterContent>
    <FooterDivider />
    <FooterBottom>
      © 2024 MediSystem. Todos os direitos reservados.
    </FooterBottom>
  </FooterContainer>
);

export default Footer;
