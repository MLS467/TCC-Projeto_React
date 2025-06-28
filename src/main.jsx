import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./style/GlobalStyle";
import { ChildRequestProvider } from "./Context/Service/ChildRequestContext";
import { AuthProvider } from "./Context/Auth/AuthContext";
import { Toaster } from "sonner";
import { DashboardProvider } from "./Context/DashboardContext/DashboardContext";
import { DashboardFormProvider } from "./Context/DashboardContext/DashboardFormContext";
import { DashboardEditProvider } from "./Context/DashboardContext/DashboardEditContext";
import { LoginProvider } from "./Context/LoginContext/LoginContext";
import Route from "./router/route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster richColors position="bottom-left" />

    <GlobalStyle />
    <AuthProvider>
      <LoginProvider>
        <ChildRequestProvider>
          <DashboardProvider>
            <DashboardEditProvider>
              <DashboardFormProvider>
                <Route />
              </DashboardFormProvider>
            </DashboardEditProvider>
          </DashboardProvider>
        </ChildRequestProvider>
      </LoginProvider>
    </AuthProvider>
  </StrictMode>
);
