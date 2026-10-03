import { defineConfig, devices } from "@playwright/test";

/* ============================================================================
   CONFIGURAÇÃO DOS TESTES AUTOMATIZADOS
   ----------------------------------------------------------------------------
   O Playwright abre o site num navegador de verdade e confere se tudo funciona
   como um visitante esperaria. Roda sozinho, a cada alteração, no GitHub.

   Para rodar na sua máquina:  npm run test:e2e
   ============================================================================ */

const PORTA = 4321;
const ENDERECO = `http://localhost:${PORTA}`;

export default defineConfig({
  testDir: "./tests",
  // Em CI, falha se alguém esquecer um test.only no código
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",

  use: {
    baseURL: ENDERECO,
    // Guarda print e vídeo só quando o teste falha, para poder investigar
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    locale: "pt-BR",
    timezoneId: "America/Sao_Paulo",
  },

  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "celular",
      use: { ...devices["Pixel 7"] },
    },
  ],

  // Sobe o site antes de testar e derruba no fim
  webServer: {
    command: "npm run preview",
    url: ENDERECO,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
