import Logo from "@/components/common/Logo";
import AnimatedIcons from "@/components/Login/AnimatedPill";
import RoundedInput from "@/components/common/RondedInput";
import SpinnerButton from "@/components/common/spinnerButton";
import { FaGithub, FaLinkedin, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "sonner";
import { LoginContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/Context/LoginContext/LoginContext";
import { useEffect, useState } from "react";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { handleChange, handleSubmit, user } = useLogin();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await handleSubmit();
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      const role = user.role;

      switch (role) {
        case "doctor":
          navigate("/list-patients");
          break;
        case "attendant":
          navigate("/optional-initial-form");
          break;
        case "nurse":
          navigate("/nurse-patient-list");
          break;
        case "admin":
          navigate("/dashboard");
          break;
        default:
          toast.error("Usuário não autorizado");
          navigate("/login");
      }
    }
  }, [user, navigate]);

  return (
    <LoginContainer>
      <div className="header">
        <Logo />

        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#f5f8fc",
              borderRadius: "50%",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px 0 rgba(44,62,80,0.07)",
              color: "#374151",
              fontSize: 26,
              transition: "box-shadow 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#f5f8fc",
              borderRadius: "50%",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px 0 rgba(44,62,80,0.07)",
              color: "#374151",
              fontSize: 26,
              transition: "box-shadow 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="LoginContent">
        <div className="anima">
          <AnimatedIcons />
        </div>
        <div className="tela_login">
          <form onSubmit={handleFormSubmit} className="box_login">
            <h2>Login</h2>
            <div className="input-wrapper">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <RoundedInput
                handleInput={handleChange}
                placeholder="digite seu email"
                name="email"
                type="email"
                id="email"
                style={{ paddingLeft: "46px" }}
              />
            </div>
            <div className="input-wrapper">
              <div className="input-icon">
                <FaLock />
              </div>
              <RoundedInput
                handleInput={handleChange}
                placeholder="digite sua senha"
                name="password"
                type="password"
                id="password"
                style={{ paddingLeft: "46px" }}
              />
            </div>
            <SpinnerButton
              type="submit"
              isLoading={isLoading}
              loadingText="Redirecionando..."
              className="login-btn"
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const glowElements = btn.getElementsByClassName("btn-glow");
                if (glowElements.length === 0) {
                  const glow = document.createElement("span");
                  glow.classList.add("btn-glow");
                  btn.appendChild(glow);
                }

                const glow = btn.getElementsByClassName("btn-glow")[0];
                glow.style.left = x + "px";
                glow.style.top = y + "px";
                glow.style.width = "80px";
                glow.style.height = "80px";

                setTimeout(() => {
                  if (glow) {
                    glow.style.width = "0";
                    glow.style.height = "0";
                  }
                }, 500);
              }}
            >
              Login
            </SpinnerButton>
            <a href="#" className="forgot_password_link">
              Esqueceu a senha?
            </a>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default LoginScreen;
