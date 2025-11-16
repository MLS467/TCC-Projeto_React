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
import emailjs from "emailjs-com";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || email.trim() === "") {
      toast.error("Por favor, digite um email válido");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Por favor, digite um email válido");
      return;
    }

    setIsLoading(true);

    try {
      const emailToSend = email.trim();

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_API_FORGOT_EMAIL_TOKEN
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email: emailToSend }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Erro ao gerar token de recuperação");
        setIsLoading(false);
        return;
      }

      const resetUrl = `${import.meta.env.VITE_API_FRONT_URL}${
        import.meta.env.VITE_API_RESET_PASSWORD_IN_EMAIL
      }${data.reset_url}`;

      const templateParams = {
        to_name: data.name || data.email.split("@")[0],
        to_email: data.email,
        reset_link: resetUrl,
        reset_url: resetUrl,
        user_email: data.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Instruções de recuperação enviadas para seu email!");
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Erro ao enviar e-mail de recuperação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSystem = () => {
    navigate("/login");
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard>
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
