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

    // Simular envio de email (aqui você faria a chamada para a API)
    setTimeout(() => {
      setIsLoading(false);
      alert("Instruções de recuperação enviadas para seu email!");
    }, 2000);
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
