import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: "http://localhost:5173", // URL do seu servidor de desenvolvimento
    specPattern: "cypress/e2e/**/*.js", // Onde estão localizados os testes E2E
    supportFile: false, // Desativa o arquivo de suporte, se não for necessário
    defaultCommandTimeout: 60000, // Tempo de espera global para todos os comandos (em milissegundos)
  },
});
