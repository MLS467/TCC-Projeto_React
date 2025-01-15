import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './style/GlobalStyle';
import Router from "./router/Routers";
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/Theme';
import { ChildRequestProvider } from './Context/HttpRequest/ChildRequestContext';
import { AuthProvider } from './Context/Auth/AuthContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChildRequestProvider>
        <AuthProvider>

          <Router />

        </AuthProvider>
      </ChildRequestProvider>
    </ThemeProvider>
  </StrictMode>
)
