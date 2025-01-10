import React from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <HomeContainer>
                <HomeBanner />
            </HomeContainer>
            <h3>Atendente</h3>
            <Link to="/form_patient">Form pacientes</Link><br />
            <h3>Triagem</h3>
            <Link to="/patientList">Listagem Básica de pacientes</Link><br />
            <Link to="/form_triage">Form Triagem</Link><br />
            <h3>Médico</h3>
            <Link to="/triageList">Listagem completa de pacientes</Link><br />
            <Link to="/form_consultation">Form Consulta</Link><br />
            <Link to="/success">Sucesso</Link><br />
        </>
    );
}

export default Home;
