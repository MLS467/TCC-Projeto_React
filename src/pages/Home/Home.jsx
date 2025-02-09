import React from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import { divRadius, contentTextDiv, contentImgDiv, Card } from "./HomeContent";
import * as style from './HomeContent.style';
import BreakPage from "../../components/BreakPage/BreakPage";

const Home = () => {

    const { HomeContentStyle, ContentDivStyle2, ContentTextDiv, ContainerCards, CardContainer, CardImage, CardTitle, CardDescription, ConteinerDivImg, ContentDivImg, ContainerCardsStyle, ContainerRadiusDiv, ContentDivStyle, ContainerMargin
    } = style;

    return (
        <>
            <HomeContainer>
                <HomeBanner />
            </HomeContainer>

            <ContainerMargin>
                <HomeContentStyle>
                    <BreakPage title="Sobre nós">
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                            <style.ContentTextStyle>
                                <p>Nosso sistema de pronto-socorro foi desenvolvido para otimizar o atendimento emergencial, garantindo um fluxo eficiente desde a chegada do paciente até o atendimento médico. Buscamos oferecer uma solução tecnológica inovadora, que facilite a triagem, reduza o tempo de espera e melhore a organização da equipe de saúde.</p>
                                <p>Com funcionalidades como registro de pacientes, triagem automatizada, fila de espera priorizada e acompanhamento do status de atendimento, nosso sistema visa tornar o pronto-socorro mais ágil e eficaz. O projeto foi desenvolvido com uma arquitetura moderna, utilizando tecnologias como React no front-end e Laravel no back-end, garantindo um sistema robusto, escalável e seguro.</p>
                                <p>Nosso compromisso é com a eficiência e a qualidade no atendimento, proporcionando uma experiência mais organizada para profissionais da saúde e pacientes.</p>
                            </style.ContentTextStyle>

                        </div>
                    </BreakPage>
                </HomeContentStyle>

                <ContentDivStyle2>
                    <BreakPage title="Serviços oferecidos pela nossa plataforma">
                        <ContainerRadiusDiv>
                            {divRadius}
                        </ContainerRadiusDiv>
                        <ContentTextDiv >
                            {contentTextDiv}
                        </ContentTextDiv>
                    </BreakPage>
                </ContentDivStyle2>
                <BreakPage title="testando novo titulo">
                    <ContentDivStyle2>
                        <ConteinerDivImg>
                            {contentImgDiv}
                        </ConteinerDivImg>
                    </ContentDivStyle2>
                </BreakPage>

                <BreakPage title="testando novo titulo">
                    <ContainerCards>
                        <ContainerCardsStyle style={{ marginTop: '30%' }}>
                            {Card(2)}
                        </ContainerCardsStyle>

                        <ContainerCardsStyle>
                            {Card(1)}
                            <img src="/src/assets/img/medico.png" alt="medico de pé" height={700} />
                        </ContainerCardsStyle>
                        <ContainerCardsStyle style={{ marginTop: '30%' }}>
                            {Card(2)}
                        </ContainerCardsStyle>

                    </ContainerCards>
                </BreakPage>

            </ContainerMargin >
        </>
    );
}

export default Home;
