import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle'
import Router from "./router/Routers"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Router />
  </StrictMode>
)
