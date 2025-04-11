import React from "react";
import { Container, ErrorCode, Message, BackButton } from "./Erro404.Style";

const Erro404 = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>
        Oops! A página que você está procurando não foi encontrada.
      </Message>
      <BackButton href="/">Voltar para a página inicial</BackButton>
    </Container>
  );
};

export default Erro404;
