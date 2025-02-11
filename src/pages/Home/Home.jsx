import React from 'react';
import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import { Card, featuresBottom, featuresTop, showCardServices, pathCards } from "./HomeContent";
import * as style from './HomeContent.style';
import BreakPage from "../../components/BreakPage/BreakPage";
import BtnGlobal from '../../components/ButtonGlobal/BtnGlobal';
import { theme } from '../../Theme/Theme';
import Footer from '../../components/Footer/Footer';

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
                    <ContainerTextStyle>
                        <div className='img'>
                            <img src="src/assets/img/MedTech.jpg" alt="tecnologia em hospitais" />
                        </div>
                        <div className='text'>
                            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem deserunt excepturi rem eius vitae cupiditate, error illum similique totam magni nisi voluptatibus. Exercitationem nostrum expedita minus molestias autem odit.</span><span>Possimus, aliquam consectetur odit porro facere doloribus. Excepturi distinctio, magnam nostrum ut nulla quidem quasi est unde, placeat doloribus inventore soluta asperiores autem ratione, voluptatum odio magni aspernatur nisi fugiat!</span><span>Porro, delectus! Rem modi asperiores at officia voluptatem harum ipsa. Minus voluptatibus, non provident nam nobis sed nihil magni corrupti eveniet iure tenetur facilis ratione cum repellendus! Ipsa, corrupti sit!</span></p>
                            <BtnGlobal
                                text={'Saiba mais'}
                                size="xl"
                                btnBgColor={theme.btnColor.info}
                                btnColor="#fff"
                            />
                        </div>
                    </ContainerTextStyle>

                    <ContainerTextStyle style={{ marginTop: '5%' }}>

                        <div className='text'>

                            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem deserunt excepturi rem eius vitae cupiditate, error illum similique totam magni nisi voluptatibus. Exercitationem nostrum expedita minus molestias autem odit.</span><span>Possimus, aliquam consectetur odit porro facere doloribus. Excepturi distinctio, magnam nostrum ut nulla quidem quasi est unde, placeat doloribus inventore soluta asperiores autem ratione, voluptatum odio magni aspernatur nisi fugiat!</span><span>Porro, delectus! Rem modi asperiores at officia voluptatem harum ipsa. Minus voluptatibus, non provident nam nobis sed nihil magni corrupti eveniet iure tenetur facilis ratione cum repellendus! Ipsa, corrupti sit!</span></p>
                            <BtnGlobal
                                text={'Saiba mais'}
                                size="xl"
                                btnBgColor={theme.btnColor.info}
                                btnColor="#fff"
                            />
                        </div>

                        <div className='img'>
                            <img src="src/assets/img/medicos.jpg" alt="tecnologia em hospitais" />
                        </div>

                    </ContainerTextStyle>
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
