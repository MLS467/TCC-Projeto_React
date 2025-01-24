import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './style/GlobalStyle';
import Router from "./router/Routers";
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/Theme';
import { ChildRequestProvider } from './Context/HttpRequest/ChildRequestContext';
import { AuthProvider } from './Context/Auth/AuthContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { DashboardProvider } from './Context/DashboardContext/DashboardContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ToastContainer
      position="bottom-left"
      autoClose={5000}
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
      <ChildRequestProvider>
        <DashboardProvider>
          <AuthProvider>

            <Router />

          </AuthProvider>
        </DashboardProvider>
      </ChildRequestProvider>
    </ThemeProvider>
  </StrictMode>
)
