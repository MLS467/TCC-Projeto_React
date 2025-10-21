import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ForgotPasswordContainer,
  ForgotPasswordCard,
  Header,
  FormSection,
  InputGroup,
  EmailInput,
  RecoverButton,
  SecurityNotice,
  BackToSystemLink,
} from "./style";
import { MdPassword } from "react-icons/md";
import { FiMail, FiArrowLeft } from "react-icons/fi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_API_FORGOT_EMAIL
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Instruções de recuperação enviadas para seu email!");
        setEmail(""); // Limpar o campo após sucesso
      } else {
        alert(data.message || "Erro ao enviar email de recuperação");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSystem = () => {
    navigate("/login");
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard className="animate__animated animate__fadeInDown">
        <Header>
          <h1>AtendeBem</h1>
          <p>Recuperação de Acesso</p>
        </Header>

        <FormSection>
          <div className="icon-container">
            <MdPassword size={40} />
          </div>

          <h2>Recuperar Acesso</h2>
          <p className="description">
            Digite seu email cadastrado para receber as instruções de
            recuperação
          </p>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="email">
                <FiMail />
                Email cadastrado
              </label>
              <EmailInput
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <RecoverButton type="submit" disabled={isLoading || !email}>
              {isLoading ? "Enviando..." : "Recuperar Acesso"}
            </RecoverButton>
          </form>

          <SecurityNotice>
            <strong>Segurança:</strong> As instruções serão enviadas apenas para
            o email cadastrado em nosso sistema.
          </SecurityNotice>
        </FormSection>

        <BackToSystemLink onClick={handleBackToSystem}>
          <FiArrowLeft />
          Voltar para o sistema
        </BackToSystemLink>
      </ForgotPasswordCard>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
