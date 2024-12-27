import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle'
import Router from "./router/Routers"
import { GetDataProvider } from './Context/GetDataContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <GetDataProvider>
      <Router />
    </GetDataProvider>
  </StrictMode>
)
