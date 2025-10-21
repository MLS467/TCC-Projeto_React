import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ResetPasswordContainer,
  ResetPasswordCard,
  Header,
  FormSection,
  InputGroup,
  PasswordInput,
  ResetButton,
  SecurityNotice,
  BackToSystemLink,
  SuccessMessage,
  ErrorMessage,
  PasswordStrength,
  StrengthBar,
  StrengthText,
} from "./style";
import { MdLockReset } from "react-icons/md";
import { FiLock, FiEye, FiEyeOff, FiArrowLeft, FiCheck } from "react-icons/fi";
import { toast } from "sonner";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirmation: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    // Verificar se token e email estão presentes
    if (!token || !email) {
      toast.error("Link inválido. Solicite um novo link de recuperação.");
      navigate("/forgot-password");
    }
  }, [token, email, navigate]);

  // Função para calcular força da senha
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/)) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^A-Za-z0-9]/)) strength += 25;
    return Math.min(strength, 100);
  };

  // Função para obter texto da força da senha
  const getStrengthText = (strength) => {
    if (strength < 50) return "Fraca";
    if (strength < 75) return "Média";
    if (strength < 100) return "Forte";
    return "Muito Forte";
  };

  // Função para obter cor da força da senha
  const getStrengthColor = (strength) => {
    if (strength < 50) return "#dc2626";
    if (strength < 75) return "#ea580c";
    if (strength < 100) return "#d97706";
    return "#16a34a";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");

    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const validateForm = () => {
    if (!formData.password) {
      setError("Por favor, digite uma nova senha");
      return false;
    }

    if (formData.password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres");
      return false;
    }

    if (!formData.passwordConfirmation) {
      setError("Por favor, confirme sua nova senha");
      return false;
    }

    if (formData.password !== formData.passwordConfirmation) {
      setError("As senhas não coincidem");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_API_RESET_PASSWORD_IN_USER
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token: token,
            email: email,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Senha redefinida com sucesso!");

        // Redirecionar para login após 3 segundos
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError(data.message || "Erro ao redefinir senha. Tente novamente.");
        toast.error(data.message || "Erro ao redefinir senha");
      }
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      setError("Erro de conexão. Tente novamente mais tarde.");
      toast.error("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSystem = () => {
    navigate("/login");
  };

  if (isSuccess) {
    return (
      <ResetPasswordContainer>
        <ResetPasswordCard className="animate__animated animate__fadeInDown">
          <Header>
            <h1>AtendeBem</h1>
            <p>Senha Redefinida</p>
          </Header>

          <FormSection>
            <div className="icon-container">
              <FiCheck size={40} color="#16a34a" />
            </div>

            <SuccessMessage>
              <h2>✅ Senha Redefinida com Sucesso!</h2>
              <p>
                Sua senha foi alterada com sucesso. Você será redirecionado para
                a página de login em instantes.
              </p>
            </SuccessMessage>

            <BackToSystemLink onClick={handleBackToSystem}>
              <FiArrowLeft />
              Ir para Login
            </BackToSystemLink>
          </FormSection>
        </ResetPasswordCard>
      </ResetPasswordContainer>
    );
  }

  return (
    <ResetPasswordContainer>
      <ResetPasswordCard className="animate__animated animate__fadeInDown">
        <Header>
          <h1>AtendeBem</h1>
          <p>Redefinir Senha</p>
        </Header>

        <FormSection>
          <div className="icon-container">
            <MdLockReset size={40} />
          </div>

          <h2>Nova Senha</h2>
          <p className="description">
            Digite sua nova senha. Certifique-se de escolher uma senha forte e
            segura.
          </p>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="password">
                <FiLock />
                Nova Senha
              </label>
              <div className="password-input-container">
                <PasswordInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Digite sua nova senha"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {formData.password && (
                <PasswordStrength>
                  <StrengthBar
                    strength={passwordStrength}
                    color={getStrengthColor(passwordStrength)}
                  />
                  <StrengthText color={getStrengthColor(passwordStrength)}>
                    {getStrengthText(passwordStrength)}
                  </StrengthText>
                </PasswordStrength>
              )}
            </InputGroup>

            <InputGroup>
              <label htmlFor="passwordConfirmation">
                <FiLock />
                Confirmar Nova Senha
              </label>
              <div className="password-input-container">
                <PasswordInput
                  id="passwordConfirmation"
                  type={showConfirmPassword ? "text" : "password"}
                  name="passwordConfirmation"
                  placeholder="Confirme sua nova senha"
                  value={formData.passwordConfirmation}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </InputGroup>

            <ResetButton
              type="submit"
              disabled={
                isLoading ||
                !formData.password ||
                !formData.passwordConfirmation
              }
            >
              {isLoading ? "Redefinindo..." : "Redefinir Senha"}
            </ResetButton>
          </form>

          <SecurityNotice>
            <strong>Dicas de Segurança:</strong>
            <ul>
              <li>Use pelo menos 8 caracteres</li>
              <li>Inclua letras maiúsculas e minúsculas</li>
              <li>Adicione números e símbolos</li>
              <li>Não use informações pessoais</li>
            </ul>
          </SecurityNotice>
        </FormSection>

        <BackToSystemLink onClick={handleBackToSystem}>
          <FiArrowLeft />
          Voltar para o sistema
        </BackToSystemLink>
      </ResetPasswordCard>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
