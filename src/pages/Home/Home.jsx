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
            <Link to="/patientList">Listagem de pacientes</Link>
        </>
    );
}

export default Home;
