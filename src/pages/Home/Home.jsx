import HomeBanner from './Home.Banner';
import { HomeContainer } from './HomeBannerStyle';
import { Card, featuresBottom, featuresTop, showCardServices, pathCards }
from "./HomeContent";
import * as style from './HomeContent.style';
import BreakPage from "../../components/BreakPage/BreakPage";
import Footer from '../../components/Footer/Footer';
import CardContent from '../../components/CardContent/CardContent';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

document.title = 'AtendeBem';

const Home = () => {

    const {
        ContainerMain,
        ContainerCards,
        ContainerCardsStyle,
        ContainerCardsServices,
        ContainerMargin,
        ContainerServices
    } = style;

    return (
        <ContainerMain >
            <HomeContainer>
                <HomeBanner />
            </HomeContainer>

            
            <ContainerMargin>
                <BreakPage id="Container_oferece" title="Oque o site oferece?">
                    <ContainerServices >
                        <ContainerCardsServices>
                            {showCardServices(featuresTop)}
                        </ContainerCardsServices>
                        <ContainerCardsServices>
                            {showCardServices(featuresBottom)}
                        </ContainerCardsServices>
                    </ContainerServices>
                </BreakPage>

                <BreakPage id="Container_sobre" title="Saiba mais sobre nós">
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


                <BreakPage id="Container_teste1" title="testando novo titulo">
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

            <ScrollToTopButton />

        </ContainerMain>
    );
}

export default Home;
