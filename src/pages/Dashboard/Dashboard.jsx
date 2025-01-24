import React, { useContext } from 'react';
import { ContainerLinkStyle, DashboarContentStyle, DashboardContainerStyle, SidebarStyle, TitleContainerStyle } from './Dashboard.style';
import { Link, Outlet } from 'react-router-dom';
import { DashboardContext } from '../../Context/DashboardContext/DashboardContext';


const Dashboard = () => {


    return (<>
        <DashboardContainerStyle>
            <TitleContainerStyle>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "inherit" }}>
                    <div>
                        <h1>AtendeBem</h1>
                        <img src="/src/assets/img/logo.png" alt="logo" />
                        <small>Dashboard</small>
                    </div>
                </div>
            </TitleContainerStyle>
            <SidebarStyle>
                <ContainerLinkStyle>
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
