import React from 'react';
import { FooterContainer, Header, SocialIcons, Links, Copyright, IconWrapper } from './Footer.style';
import { FaInstagram, FaSnapchatGhost, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            {/* Logo e Título */}
            <Header>
                <img src="/src/assets/img/logo.png" alt="Logo" />
                <h2>AtendeBem</h2>
            </Header>

            {/* Ícones sociais */}
            <SocialIcons>
                <IconWrapper><FaInstagram /></IconWrapper>
                <IconWrapper><FaSnapchatGhost /></IconWrapper>
                <IconWrapper><FaTwitter /></IconWrapper>
                <IconWrapper><FaFacebookF /></IconWrapper>
            </SocialIcons>

            {/* Links */}
            <Links>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Privacy Policy</a>
            </Links>

            {/* Copyright */}
            <Copyright>
                Future Coders @ 2021
            </Copyright>
        </FooterContainer>
    );
}

export default Footer;
