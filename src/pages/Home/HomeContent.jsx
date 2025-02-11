import path from "path";
import CardServices from "../../components/CardServices/CardServices";
import { CardContainer, CardDescription, CardImage, CardTitle, ContentDivImg, RadiusDiv } from "./HomeContent.style";
import { v4 } from 'uuid';


export const featuresTop = [
    {
        title: "Triagem de Pacientes",
        description: "Permitir que enfermeiros registrem sinais vitais e o nível de urgência dos pacientes, seguindo protocolos médicos.",
        img: "/src/assets/img/Triagem.jpg",
        right: true,
    },
    {
        title: "Registro e Gerenciamento de Pacientes",
        description: "Cadastrar novos pacientes com informações básicas, histórico médico e status de atendimento.",
        img: "/src/assets/img/logo.png",
        right: true,
    },
    {
        title: "Listagem e Priorização de Atendimentos",
        description: "Exibir uma fila de pacientes priorizados com base na gravidade da triagem, garantindo que os casos mais urgentes sejam atendidos primeiro.",
        img: "/src/assets/img/logo.png",

    },

];

export const featuresBottom = [
    {
        title: "Chamado e Atualização do Status do Paciente",
        description: "Permitir que médicos e enfermeiros chamem pacientes para atendimento e atualizem seu status (em consulta, aguardando, alta, etc.).",
        img: "/src/assets/img/Jaleco.png",
        right: true,
        top: true,

    },
    {
        title: "Gestão de Usuários (Atendentes, Enfermeiros e Médicos)",
        description: "Controle de acesso para diferentes tipos de usuários, garantindo que cada profissional tenha permissões específicas no sistema.",
        img: "/src/assets/img/logo.png",
        right: true,
        top: true,
    },
    {
        title: "Relatórios e Estatísticas",
        description: "Gerar relatórios sobre número de atendimentos, tempo médio de espera, tipos de casos mais comuns, entre outras métricas úteis para análise.",
        img: "/src/assets/img/logo.png",
        top: true,
    }
]

export const pathCards = [
    { path: "/src/assets/img/prontuario_eletronico.jpg", title: "Título do Card", description: "Este é um exemplo de descrição para um card simples e estiloso. Você pode personalizá-lo como quiser!" },
    { path: "/src/assets/img/telemedicina.jpg", title: "Título do Card", description: "Este é um exemplo de descrição para um card simples e estiloso. Você pode personalizá-lo como quiser!" },
    { path: "/src/assets/img/esus.png", title: "Título do Card", description: "Este é um exemplo de descrição para um card simples e estiloso. Você pode personalizá-lo como quiser!" },
    { path: "/src/assets/img/triagem_hospitalar.jpg", title: "Título do Card", description: "Este é um exemplo de descrição para um card simples e estiloso. Você pode personalizá-lo como quiser!" },
    { path: "/src/assets/img/grupo.avif", title: "Título do Card", description: "Este é um exemplo de descrição para um card simples e estiloso. Você pode personalizá-lo como quiser!" },
];


export const Card = (array) => {
    const result = array.map((e) => {
        return (<CardContainer key={v4()}>
            <CardImage src={e.path} alt={e.title} />
            <CardTitle>Título do Card</CardTitle>
            <CardDescription>
                {e.description}
            </CardDescription>
        </CardContainer>
        );
    })

    return result;
}

export const showCardServices = (features) => {
    return features.map((feature) => {
        return (
            <CardServices
                right={feature.right ? true : false}
                img={feature.img}
                title={feature.title}
                description={feature.description}
                top={feature.top ? true : false}
            />
        )
    })
}