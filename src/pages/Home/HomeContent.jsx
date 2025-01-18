import { CardContainer, CardDescription, CardImage, CardTitle, ContentDivImg, RadiusDiv } from "./HomeContent.style";
import { v4 } from 'uuid';

const img = {
    imgRadius: [
        { id: v4(), img: '/src/assets/img/agulha.jpeg', alt: 'agulha em uma mala' },
        { id: v4(), img: '/src/assets/img/checklist.jpg', alt: 'maleta de médico' },
        { id: v4(), img: '/src/assets/img/pilulas.jpg', alt: 'pilulas' },
    ],
    imgDiv: [
        { id: v4(), img: '/src/assets/img/medicos.jpg', alt: 'medico' },
        { id: v4(), img: '/src/assets/img/logo.png', alt: 'medico', width: '200px', height: '200px' },
        { id: v4(), img: '/src/assets/img/grupo.avif', alt: 'medico' },
    ]
}

export const divRadius = img.imgRadius.map((item) => {
    return (
        <RadiusDiv key={v4()}>
            <img src={item.img} key={item.id} alt={item.alt} />
        </RadiusDiv>
    );
});

export const contentTextDiv = Array.from({ length: 3 }).map((_, index) => {
    return (
        <>
            <p key={v4()}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, in aspernatur explicabo non aliquam doloribus libero veniam consectetur enim ea vel! Adipisci inventore veritatis aut blanditiis voluptate mollitia nobis tempora?<a href="#" key={v4()}> Clique aqui</a>
            </p>
        </>
    );
});

export const contentImgDiv = img.imgDiv.map((item) => {
    return (
        <ContentDivImg key={v4()}>
            <img src={item.img} key={item.id} alt={item.alt} style={{ 'width': item.width ? item.width : '', 'height': item.height ? item.height : '' }} />
        </ContentDivImg>
    );
});

export const Card = (x) => {
    const result = Array.from({ length: x }).map((_, index) => {
        return (<CardContainer key={v4()}>
            <CardImage src="/src/assets/img/esus.jpg" alt="Imagem do Card" />
            <CardTitle>Título do Card</CardTitle>
            <CardDescription>
                Este é um exemplo de descrição para um card simples e estiloso. Você pode personalizá-lo como quiser!
            </CardDescription>
        </CardContainer>
        );
    })

    return result;
}