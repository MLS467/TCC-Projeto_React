import { useNavigate } from "react-router-dom";
import HeaderNav from "@/components/common/HeaderNav";
import {
  ScreenContainer,
  BackButton,
  BackIcon,
  BackText,
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
} from "./style";
import { useState } from "react";
import { toast } from "sonner";
import { FiArrowLeft, FiSearch, FiUser } from "react-icons/fi";
import useCrud from "@/Hook/useCrud";

const CPFVerificationScreen = () => {
  const { ReadOneRegister } = useCrud();
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/optional-initial-form");
  };

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value);
    if (formatted.length <= 14) {
      setCpf(formatted);
    }
  };

  const handleSubmit = async () => {
    if (cpf.length === 14) {
      const cpfNumbersOnly = cpf.replace(/\D/g, "");

      try {
        const result = await ReadOneRegister({
          endpoint: "user/cpf",
          params: cpfNumbersOnly,
        });

        if (!result.success) {
          toast.error("CPF não encontrado.");
          navigate("/optional-initial-form");
        } else {
          toast.success("CPF encontrado com sucesso!");

          navigate("/update-user-form", {
            state: {
              userData: result,
            },
          });
        }
      } catch (error) {
        console.error("Erro ao verificar CPF:", error);
        toast.error("Erro ao verificar CPF. Tente novamente mais tarde.");
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

        <Title>Verificar CPF</Title>
        <Subtitle>Digite seu CPF para verificar se já possui cadastro</Subtitle>

        <FormSection>
          <InputLabel>CPF</InputLabel>
          <InputField
            type="text"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={handleCPFChange}
            maxLength={14}
          />
          <InputHint>Digite apenas os números do seu CPF</InputHint>
       
        </FormSection>

        <SubmitButton onClick={handleSubmit} disabled={cpf.length !== 14}>
          <ButtonIcon>
            <FiSearch />
          </ButtonIcon>
          Verificar CPF
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

export default CPFVerificationScreen;
