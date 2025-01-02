import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle'
import Router from "./router/Routers"
import { GetDataProvider } from './Context/GetDataContext'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme/Theme'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GetDataProvider>
        <Router />
      </GetDataProvider>
    </ThemeProvider>
  </StrictMode>
)
