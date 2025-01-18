import React, { useEffect } from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import UseAuth from '../../Hook/UseAuth';
import { divRadius, contentTextDiv, contentImgDiv, Card } from "./HomeContent";
import * as style from './HomeContent.style';

const { HomeContentStyle, ObjectTextDiv, ObjectTextDiv2, ContentDivStyle2, ContentTextDiv, ContainerCards, CardContainer, CardImage, CardTitle, CardDescription, ConteinerDivImg, ContentDivImg, ContainerCardsStyle, ContainerRadiusDiv, ContentDivStyle, ContainerMargin
} = style;

const Home = () => {

    const { logout } = UseAuth();

    return (
        <>
            <HomeContainer>
                <HomeBanner />
            </HomeContainer>
            <ContainerMargin>
                <HomeContentStyle>
                    <h1>Objetivo do sistema</h1>
                    <ContentDivStyle>
                        <ObjectTextDiv>
                            <p>Welcome to the Home Page</p>
                            <p>Lorem ipsum dolor sit asmet consectetur adipisicing elit. Numquam nam placeat minima reprehenderit modi, temporibus a consequuntur tempore, quibusdam impedit assumenda! Qui porro voluptatem sunt veritatis blanditiis commodi culpa aperiam?</p>
                        </ObjectTextDiv>
                        <ObjectTextDiv2>
                            aqui vai o conteudo
                        </ObjectTextDiv2>
                    </ContentDivStyle>
                </HomeContentStyle>

                <ContentDivStyle2>
                    <ContainerRadiusDiv>
                        {divRadius}
                    </ContainerRadiusDiv>
                    <ContentTextDiv >
                        {contentTextDiv}
                    </ContentTextDiv>
                </ContentDivStyle2>
                <ContentDivStyle2>
                    <ConteinerDivImg>
                        {contentImgDiv}
                    </ConteinerDivImg>
                </ContentDivStyle2>

                <div>
                    <h1>teste</h1>
                </div>

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

                <button onClick={logout}>Logout</button>
            </ContainerMargin>
        </>
    );
}

export default Home;
