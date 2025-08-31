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
import { CrudProvider } from "./Context/crud/exports";
import { ListProvider } from "@/Context/ListContext";
import { ScreenProvider } from "./Context/MobileScreen";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      richColors
      position="bottom-left"
      toastOptions={{
        className: "flex flex-col space-y-2",
      }}
    />

    <GlobalStyle />
    <ChildRequestProvider>
      <AuthProvider>
        <LoginProvider>
          <DashboardProvider>
            <DashboardEditProvider>
              <DashboardFormProvider>
                <CrudProvider>
                  <ListProvider>
                    <ScreenProvider>
                      <Route />
                    </ScreenProvider>
                  </ListProvider>
                </CrudProvider>
              </DashboardFormProvider>
            </DashboardEditProvider>
          </DashboardProvider>
        </LoginProvider>
      </AuthProvider>
    </ChildRequestProvider>
  </StrictMode>
);
