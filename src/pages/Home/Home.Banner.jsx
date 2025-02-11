import React from 'react';
import { HomeBannerStyle, HomeTextStyle, HomeImageStyle } from './HomeBannerStyle';
import medica from '../../assets/img/medica.png';

const HomeBanner = () => {
    return (
        <HomeBannerStyle>
            <HomeTextStyle>
                <div>
                    <h1>AtendeBem</h1>
                    <p>
                        O sistema de pronto-socorro otimiza o atendimento emergencial, agilizando a triagem, priorização e comunicação entre equipe médica, reduzindo o tempo de espera e melhorando a eficiência do serviço.
                    </p>
                </div>

                <button>Faça seu pedido agora!</button>

            </HomeTextStyle>
            < HomeImageStyle >
                <img src={medica} alt="medica" />
            </HomeImageStyle>
        </HomeBannerStyle>
    );
}

export default HomeBanner;
