import React from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import UseAuth from '../../Hook/useAuth';
import { divRadius, contentTextDiv, contentImgDiv, Card } from "./HomeContent";
import * as style from './HomeContent.style';
import BreakPage from "../../components/BreakPage/BreakPage";

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
                    <BreakPage title="Sobre nós">
                        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                            <p><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, tempore fuga sit ipsam rem quo dignissimos vel labore quos praesentium dolore qui facere dolorem, quasi accusantium aperiam modi et perferendis.</span><span>Saepe quis est alias nostrum, placeat aspernatur asperiores doloribus illum excepturi, cumque deserunt facilis eligendi quaerat provident? Placeat assumenda temporibus, qui repellat labore exercitationem illo? Sed repellat facilis autem iusto?</span><span>Architecto dolorem dignissimos reprehenderit, iste tenetur officiis ad quaerat, ducimus est id magni enim minus blanditiis minima, hic incidunt. Sed ad labore praesentium suscipit cumque amet nam dolor aliquam quos!</span><span>Reprehenderit tempore totam quibusdam, nulla fugit facere minus maiores optio quas, vitae quae? Nostrum debitis sunt accusamus vero at temporibus, fuga eum perferendis ducimus architecto officia? Tempore odio tempora vero?</span><span>Reprehenderit illo dolorem officiis amet doloremque sed reiciendis nulla dolorum odit alias? Temporibus repudiandae voluptatem porro suscipit officia, tempora corporis ut pariatur eveniet modi libero soluta, eaque, quos voluptatibus explicabo.</span></p>
                        </div>
                    </BreakPage>
                </HomeContentStyle>

                <ContentDivStyle2>
                    <BreakPage title="testando novo titulo">
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

            </ContainerMargin>
        </>
    );
}

export default Home;
