import React from 'react';
import { NavBarStyle, DivIcons, DivBtnIcons, LogoContainer } from "./NavBar.Style"
import logo from "../../assets/img/logo.png"
import NewButton from "../Button/Button"
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <NavBarStyle>
            <LogoContainer>
                <img src={logo} alt="logo" width={'70px'} />
                <Link to="/">
                    <h1>AtendeBem</h1>
                </Link>
            </LogoContainer>

            <DivBtnIcons>
                <DivIcons >
                    <Link to="https://github.com/MLS467"><FaGithub className='icons' /></Link>
                    <Link to="https://www.linkedin.com/in/maisson-leal-da-silva-373633288/"><SlSocialLinkedin className='icons' /></Link>
                </DivIcons>
                <NewButton path="/login" text="Login" />
            </DivBtnIcons >
        </NavBarStyle>
    );
}

export default NavBar;
