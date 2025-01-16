import React from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import UseAuth from '../../Hook/UseAuth';

const Home = () => {
    const { logout } = UseAuth();

    return (
        <>
            <HomeContainer>
                <HomeBanner />
            </HomeContainer>

            <button onClick={logout}>Logout</button>
        </>
    );
}

export default Home;
