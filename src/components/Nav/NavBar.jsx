import React, { useEffect, useState } from 'react';
import { NavBarStyle, DivIcons, DivBtnIcons, LogoContainer } from "./NavBar.Style"
import logo from "../../assets/img/logo.png"
import { Link, useLocation } from "react-router-dom";
import UseAuth from '../../Hook/useAuth';
import BtnLinkDefault from '../ButtonLinkDefault/BtnLinkDefault';
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation';


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
            // return <BtnGlobal func={logout} text="Logout" size="l" />;
            return <ButtonAnimation text="Logout" action={logout} />
        } else {
            // return <ButtonDefault text="Login" path="/login" />;
            return <BtnLinkDefault text="Login" path="/login" />;
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

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center !important',
                height: '100%',
                flexWrap: 'wrap',
                // border: '1px solid red'
            }}>
                {renderButton()}
            </div>

        </NavBarStyle>
    );
}

export default NavBar;
