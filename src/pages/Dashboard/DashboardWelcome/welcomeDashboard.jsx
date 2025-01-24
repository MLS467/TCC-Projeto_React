import React from 'react';
import { WelcomeContainer, WelcomeBox, DashboardButton, SubTitle, Title } from './welcomeDashboard.style';

const WelcomeDashboard = () => {
    return (
        <WelcomeContainer>
            <WelcomeBox>
                <Title>Bem-vindo, Administrador!</Title>
                <SubTitle>Estamos felizes em tê-lo de volta.</SubTitle>
                <p>
                    Acesse o painel de controle para gerenciar usuários, ver relatórios e
                    monitorar o sistema.
                </p>

            </WelcomeBox>
        </WelcomeContainer>
    );
}

export default WelcomeDashboard;
