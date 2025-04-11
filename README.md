# Documentação do Frontend

## 1. Introdução

O frontend deste projeto foi desenvolvido para fornecer uma interface intuitiva e responsiva para o **sistema de pronto-socorro**, permitindo que **atendentes, enfermeiros e médicos** interajam com o sistema de forma eficiente.

O objetivo principal é garantir uma experiência de usuário fluida, apresentando as informações de maneira clara e organizada, facilitando o gerenciamento dos pacientes e agilizando o processo de atendimento.

### **Principais Funcionalidades**

- **Login e Autenticação**: Controle de acesso baseado em permissões para atendentes, enfermeiros e médicos.
- **Cadastro e Gerenciamento de Pacientes**: Interface para inserção e visualização dos dados dos pacientes.
- **Triagem**: Registro dos sinais vitais e nível de urgência do paciente.
- **Lista de Espera**: Visualização dos pacientes organizados por prioridade.
- **Atendimento Médico**: Exibição dos dados do paciente e inserção de diagnósticos.
- **Chamada de Pacientes**: Exibição na tela da sala de espera. _(em desenvolvimento)_
- **Design Responsivo**: Adaptável para diferentes dispositivos (desktop, tablet).

O frontend se comunica com a API em Laravel para buscar e enviar dados, garantindo que todas as operações sejam realizadas de forma segura e eficiente.

---

## 2. Tecnologias Utilizadas 🚀

O frontend do projeto foi desenvolvido utilizando **React.js** e outras bibliotecas para garantir uma interface moderna, responsiva e eficiente. A seguir, estão as principais tecnologias utilizadas:

### **Linguagens e Frameworks**

- ⚛️ **React.js** – Biblioteca JavaScript para construção da interface do usuário.
- 🎨 **Styled-components** – Biblioteca para estilização de componentes usando CSS-in-JS.

### **Gerenciamento de Estado e Validação**

- ✅ **Yup** – Biblioteca para validação de formulários.
- 🔔 **React-toastify** – Para exibição de notificações e feedback ao usuário.

### **Comunicação com API**

- 🔄 **Axios** – Cliente HTTP para realizar requisições à API do backend.

### **Outras Bibliotecas**

- 🆔 **UUID** – Para geração de identificadores únicos.
- 🎭 **React-icons** – Conjunto de ícones para melhorar a interface do usuário.

Essas tecnologias foram escolhidas para proporcionar uma **boa experiência ao usuário**, com **código organizado, reutilizável e de fácil manutenção**.

---

## 3. Instalação e Configuração ⚙️

Para rodar o frontend do projeto localmente, siga os passos abaixo:

### **Pré-requisitos** 📌

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/) (para clonar o repositório)
- Um gerenciador de pacotes (**npm** ou **yarn**)

### **Passo 1: Clonar o Repositório** ⬇️

Abra o terminal e execute:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **Passo 2: Instalar Dependências** 📦

Se estiver usando **npm**, execute:

```sh
npm install
```

Ou, se estiver usando **yarn**:

```sh
yarn install
```

### **Passo 3: Configurar Variáveis de Ambiente 🛠️**

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias, como a URL da API:

```env
VITE_API_URL=http://localhost:8000/api
```

### **Passo 4: Rodar o Projeto ▶️**

Para iniciar o servidor de desenvolvimento:
Se estiver usando **npm**, execute:

```sh
npm run dev
```

Ou, se estiver usando **yarn**:

```sh
yarn dev
```

### **Passo 5: Acessar no Navegador 🌐**

Depois de rodar o comando acima, acesse o projeto em:

```
http://localhost:5173
```

Agora seu frontend está rodando e pronto para desenvolvimento! 🚀

## 4. Links Importantes 📎

### **Figma - Design de Interface**

Acesse o projeto de design no Figma para ver os protótipos e mockups da interface:  
[Figma - Projeto do Sistema de Pronto-Socorro](https://www.figma.com/design/279X7KNa0vpQ61sFHxagWu/Atende-Bem?node-id=0-1&node-type=canvas&t=llKVAEvkEuDkNeDq-0)

### **Vídeos de Teste com Cypress**

Confira os vídeos demonstrando os testes realizados com Cypress:

- [Vídeo 1: Teste de Login com Cypress](https://drive.google.com/file/d/1pQ5pL1sa6NNRzk6P0beqj8ObOxfrKdNz/view?usp=sharing)
- [Vídeo 2: Teste de Funcionalidade de Triagem com Cypress](https://drive.google.com/file/d/1A6Zj4XbJw6_AsmxR1rHd2bTUiuKjEHdF/view?usp=sharing)
