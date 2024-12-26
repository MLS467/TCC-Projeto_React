import React from 'react';
import { HomeBannerStyle, HomeTextStyle, HomeImageStyle } from './HomeBannerStyle';
import medica from '../../assets/img/medica.png';
import NewButton from '../../components/Button/Button';

const HomeBanner = () => {
    return (
        <HomeBannerStyle>
            <HomeTextStyle>
                <div>
                    <h1>AtendeBem</h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci sunt labore eum odio fugit velit tenetur consequuntur, deleniti quo ad, in quod sed. Doloribus, ipsam sunt. Vero, eligendi nostrum.
                    </p>
                </div>

                <NewButton text="Saber mais..." />

            </HomeTextStyle>
            < HomeImageStyle >
                <img src={medica} alt="medica" />
            </HomeImageStyle>
        </HomeBannerStyle>
    );
}

export default HomeBanner;
