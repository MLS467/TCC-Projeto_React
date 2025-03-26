import React from 'react';
import { FooterContainer } from './Footer.style';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='logo'>
                <h2>
                    <img src="/src/assets/img/logo.png" alt="dasdas" />
                    AtendeBem
                </h2>
            </div>
            <div className='links'>
                <ul>
                    <li><a href="#">VidaSaudável</a></li>
                    <li><a href="#">Clínica Bem-Estar</a></li>
                    <li><a href="#">Saúde Total</a></li>
                    <li><a href="#">MediCare Online</a></li>
                    <li><a href="#">Portal do Paciente</a></li>
                    <li><a href="#">SOS Saúde</a></li>
                    <li><a href="#">Hospital Digital</a></li>
                </ul>
                <ul>
                    <li><a href="#">Pronto Atendimento 24h</a></li>
                    <li><a href="#">Guia da Saúde</a></li>
                    <li><a href="#">Saúde Fácil</a></li>
                    <li><a href="#">Consultas Já</a></li>
                    <li><a href="#">Médicos Online</a></li>
                    <li><a href="#">Bem-Estar Diário</a></li>

                </ul>
                <ul>
                    <li><a href="#">Check-up Virtual</a></li>
                    <li><a href="#">Farmácia Popular</a></li>
                    <li><a href="#">Emergência Médica</a></li>
                    <li><a href="#">Plano Saúde+</a></li>
                    <li><a href="#">Vacinas Hoje</a></li>
                    <li><a href="#">Clínica do Futuro</a></li>
                    <li><a href="#">Cuide-se Agora</a></li>
                </ul>
            </div>

            <div className='social'>
                <h3>Siga-nos</h3>
                <div>
                    <a href="https://github.com/MLS467" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/maisson-leal-da-silva-373633288/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>

                </div>
            </div>

        </FooterContainer>
    );
}

export default Footer;
