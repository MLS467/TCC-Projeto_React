import React, { useEffect, useState } from 'react';
import { NavBarStyle, DivIcons, DivBtnIcons, LogoContainer } from "./NavBar.Style"
import logo from "../../assets/img/logo.png"
import NewButton from "../Button/Button"
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import BtnGlobal from "../ButtonGlobal/BtnGlobal";
import UseAuth from '../../Hook/useAuth';


const NavBar = () => {
    const [control, setControl] = useState(0);
    const location = useLocation().pathname;
    const { logout } = UseAuth();

    const showLoginButton = () => {
        if (location === '/login') {
            setControl(0);
        } else if (location === '/') {
            setControl(2);
        } else {
            setControl(1);
        }
    }

    useEffect(() => {
        showLoginButton();
    }, [location]);

    const renderButton = () => {
        if (control === 0) {
            return null;
        } else if (control === 1) {
            return <BtnGlobal func={logout} text="Logout" size="l" />;
        } else {
            return <NewButton path="/login" text="Login" />;
        }
    }

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

                {renderButton()}

            </DivBtnIcons >
        </NavBarStyle>
    );
}

export default NavBar;
