import React from 'react';
import { ContainerLinkStyle, DashboarContentStyle, DashboardContainerStyle, SidebarStyle, TitleContainerStyle } from './Dashboard.style';
import { Link, Outlet } from 'react-router-dom';
import UseAuth from '../../Hook/useAuth';
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';


const Dashboard = () => {

    const { logout } = UseAuth();


    return (<>
        <DashboardContainerStyle>
            <TitleContainerStyle>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "inherit" }}>
                    <div>
                        <div></div>
                        <h1>AtendeBem</h1>
                        <img src="/src/assets/img/logo.png" alt="logo" />
                        <small>Dashboard</small>
                        <div><BtnGlobal size="s" text="Logout" func={logout}>Logout</BtnGlobal></div>
                    </div>
                </div>
            </TitleContainerStyle>
            <SidebarStyle>
                <ContainerLinkStyle>
                    <Link to="/dashboard">Bem-vindo</Link>
                    <Link to="/dashboard/add_funcionario">Adicionar Funcionário</Link>
                    <Link to="/dashboard/doctor">Listagem de Médicos</Link>
                    <Link to="/dashboard/attendant">Listagem de Atendente</Link>
                    <Link to="/dashboard/nurse">Listagem de enfermeiros</Link>
                    <Link to="/dashboard/consultation">Consultas Concluídas</Link>
                </ContainerLinkStyle>
            </SidebarStyle>
            <DashboarContentStyle>
                <Outlet />
            </DashboarContentStyle>
        </DashboardContainerStyle>
    </>
    );
}

export default Dashboard;
