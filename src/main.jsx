import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/Theme";
import { ChildRequestProvider } from "./Context/Service/ChildRequestContext";
import { AuthProvider } from "./Context/Auth/AuthContext";
import { Bounce, ToastContainer } from "react-toastify";
import { DashboardProvider } from "./Context/DashboardContext/DashboardContext";
import { DashboardFormProvider } from "./Context/DashboardContext/DashboardFormContext";
import { DashboardEditProvider } from "./Context/DashboardContext/DashboardEditContext";
import { LoginProvider } from "./Context/LoginContext/LoginContext";
import Router from "./router/Routers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginProvider>
        <ChildRequestProvider>
          <DashboardProvider>
            <DashboardEditProvider>
              <AuthProvider>
                <DashboardFormProvider>
                  <Router />
                </DashboardFormProvider>
              </AuthProvider>
            </DashboardEditProvider>
          </DashboardProvider>
        </ChildRequestProvider>
      </LoginProvider>
    </ThemeProvider>
  </StrictMode>,
);
