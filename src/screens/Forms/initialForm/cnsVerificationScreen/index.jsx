import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "@/components/common/HeaderNav";
import {
  ScreenContainer,
  CardContainer,
  IconContainer,
  Icon,
  Title,
  Subtitle,
  FormSection,
  InputLabel,
  InputField,
  InputHint,
  SubmitButton,
  ButtonIcon,
  BackButton,
  BackText,
} from "./style";
import { toast } from "sonner";
import { FiUser, FiSearch } from "react-icons/fi";
import useRequest from "@/Hook/useRequest";

const CNSVerificationScreen = () => {
  const { api } = useRequest();
  const [cns, setCns] = useState("");
  const navigate = useNavigate();

  const handleCNSChange = (e) => {
    const value = e.target.value;
    const cnsNumbersOnly = value.replace(/\D/g, "").slice(0, 15);
    setCns(cnsNumbersOnly);
  };

  const handleBackClick = () => {
    navigate("/optional-initial-form");
  };

  const handleSubmit = async () => {
    if (cns.length === 15) {
      try {
        const result = await api.post("sus/pacient", { cns });

        if (result.status !== 200) {
          toast.error("CNS não encontrado.");
          navigate("/optional-initial-form");
        } else {
          toast.success("CNS encontrado com sucesso!");

          navigate("/initial-form", {
            state: {
              userData: result.data,
            },
          });
        }
      } catch (error) {
        console.error("Erro ao verificar CNS:", error);
        toast.error("Erro ao verificar CNS. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <ScreenContainer>
      <HeaderNav authButtonTitle="logout" />

      <CardContainer>
        <IconContainer>
          <Icon>
            <FiUser />
          </Icon>
        </IconContainer>

        <Title>Verificar CNS</Title>
        <Subtitle>Digite seu CNS para verificar se já possui cadastro</Subtitle>

        <FormSection>
          <InputLabel>CNS (Cartão Nacional de Saúde)</InputLabel>
          <InputField
            type="text"
            placeholder="000000000000000"
            value={cns}
            onChange={handleCNSChange}
            maxLength={15}
          />
          <InputHint>Digite os 15 números do seu CNS</InputHint>
        </FormSection>

        <SubmitButton onClick={handleSubmit} disabled={cns.length !== 15}>
          <ButtonIcon>
            <FiSearch />
          </ButtonIcon>
          Verificar CNS
        </SubmitButton>

        <BackButton
          onClick={handleBackClick}
          style={{
            marginTop: "16px",
            backgroundColor: "transparent",
            color: "#64748b",
            border: "1px solid #e2e8f0",
            fontWeight: "500",
            fontSize: "14px",
            padding: "12px 24px",
            borderRadius: "8px",
            transition: "all 0.2s ease",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f8fafc";
            e.target.style.borderColor = "#cbd5e1";
            e.target.style.color = "#475569";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.borderColor = "#e2e8f0";
            e.target.style.color = "#64748b";
          }}
        >
          <BackText>Cancelar</BackText>
        </BackButton>
      </CardContainer>
    </ScreenContainer>
  );
};

export default CNSVerificationScreen;
