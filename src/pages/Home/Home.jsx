import React from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import { Card, featuresBottom, featuresTop, showCardServices, pathCards } from "./HomeContent";
import * as style from './HomeContent.style';
import BreakPage from "../../components/BreakPage/BreakPage";
import Footer from '../../components/Footer/Footer';
import CardContent from '../../components/CardContent/CardContent';

document.title = 'AtendeBem';

const Home = () => {

    const { ContainerMain, ContainerCards, ContainerTextStyle, ContainerCardsStyle, ContainerCardsServices, ContainerMargin, ContainerServices } = style;

    return (
        <ContainerMain >
            <HomeContainer>
                <HomeBanner />
            </HomeContainer>

            <ContainerMargin>
                <BreakPage title="Oque o site oferece?">
                    <ContainerServices >
                        <ContainerCardsServices>
                            {showCardServices(featuresTop)}
                        </ContainerCardsServices>
                        <ContainerCardsServices>
                            {showCardServices(featuresBottom)}
                        </ContainerCardsServices>
                    </ContainerServices>
                </BreakPage>

                <BreakPage title="Saiba mais sobre nós">
                    <CardContent
                        title="Teste agorinha pra ver"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc ultricies aliquam. Nullam nec purus et nunc ultricies aliquam."
                        labImage="src/assets/img/medicos.jpg"
                    />
                    <CardContent
                        title="Teste agorinha pra ver"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc ultricies aliquam. Nullam nec purus et nunc ultricies aliquam."
                        labImage="src/assets/img/medicos.jpg"
                    />
                </BreakPage>


                <BreakPage title="testando novo titulo">
                    <ContainerCards>
                        <ContainerCardsStyle style={{ marginTop: '30%' }}>
                            {Card([pathCards[0], pathCards[1]])}
                        </ContainerCardsStyle>

                        <ContainerCardsStyle>
                            {Card([pathCards[2]])}
                            <img className='medico' src="/src/assets/img/medico.png" alt="medico de pé" height={700} />
                        </ContainerCardsStyle>
                        <ContainerCardsStyle style={{ marginTop: '30%' }}>
                            {Card([pathCards[3], pathCards[4]])}
                        </ContainerCardsStyle>
                    </ContainerCards>

                </BreakPage>

            </ContainerMargin >

            <Footer />

        </ContainerMain>
    );
}

export default Home;
