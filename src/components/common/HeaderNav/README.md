# HeaderNav Component

## Descrição
Componente reutilizável para navegação de cabeçalho com design elegante e moderno.

## Funcionalidades
- Design responsivo com gradiente elegante
- Efeitos de hover suaves
- Botão de autenticação customizável
- Sombras e blur effects modernos
- Sticky header com z-index otimizado

## Props
- `showAuthButton` (boolean): Controla se o botão de autenticação é exibido (padrão: true)
- `authButtonTitle` (string): Título do botão de autenticação (padrão: "Logout")
- `authButtonType` (string): Tipo do botão de autenticação (padrão: "logout")

## Uso
```jsx
import HeaderNav from "@/components/common/HeaderNav";

// Uso básico
<HeaderNav />

// Uso customizado
<HeaderNav 
  showAuthButton={true}
  authButtonTitle="Sair"
  authButtonType="logout"
/>
```

## Estilização
O componente utiliza:
- Cores da paleta do projeto (palette[600] e palette[800])
- Gradientes suaves
- Efeitos de sombra e blur
- Transições fluidas
- Design glassmorphism no botão de autenticação

## Dependências
- @/components/common/NavBar
- @/components/common/Logo
- @/components/common/AuthButton
- @/constant/colors
