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
            <Link to="/form_patient">Form pacientes</Link><br />
            <Link to="/patientList">Listagem Básica de pacientes</Link><br />
            <Link to="/form_triage">Form Triagem</Link><br />
            <Link to="/triageList">Listagem completa de pacientes</Link><br />
            <Link to="/form_consultation">Form Consulta</Link><br />
        </>
    );
}

export default Home;
