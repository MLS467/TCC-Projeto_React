import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Message,
  SuccessContainer,
  Title,
} from "./Success.Style";

const Success = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <SuccessContainer>
      <Card>
        <Title>Consulta Realizada com Sucesso!</Title>
        <Message>
          Sua consulta foi registrada no sistema. Você será notificado(a) com
          atualizações, se necessário.
        </Message>
        <Button onClick={handleGoBack}>Voltar ao Início</Button>
      </Card>
    </SuccessContainer>
  );
};

export default Success;
