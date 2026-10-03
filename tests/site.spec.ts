import { expect, test } from "@playwright/test";

/* ============================================================================
   TESTES DOS FLUXOS CRÍTICOS
   ----------------------------------------------------------------------------
   Estes testes protegem o que, se quebrar, faz o projeto perder inscrição:
   o WhatsApp funcionando, o link do torneio, a contagem regressiva e o menu
   do celular. Rodam a cada alteração, automaticamente.
   ============================================================================ */

const WHATSAPP = "5583986989725";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("a página abre com o título e o nome do projeto", async ({ page }) => {
  await expect(page).toHaveTitle(/Top Vôlei/i);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    /gratuito/i,
  );
});

test("informa que é gratuito e a faixa de idade", async ({ page }) => {
  await expect(page.locator("body")).toContainText("Gratuito");
  await expect(page.locator("body")).toContainText("6 a 16 anos");
});

test("os links de WhatsApp apontam para o número correto", async ({ page }) => {
  const links = page.locator(`a[href*="wa.me/${WHATSAPP}"]`);
  // Precisa haver pelo menos o botão flutuante e um na página
  expect(await links.count()).toBeGreaterThan(1);

  const href = await links.first().getAttribute("href");
  // A mensagem precisa vir pré-escrita no link
  expect(href).toContain("text=");
});

test("o botão flutuante de WhatsApp está visível", async ({ page }) => {
  const botao = page.getByRole("link", {
    name: /WhatsApp/i,
    includeHidden: false,
  });
  await expect(botao.first()).toBeVisible();
});

test("a seção do torneio mostra o link de inscrição", async ({ page }) => {
  const secao = page.locator("#torneio");
  await expect(secao).toBeVisible();
  await expect(secao).toContainText("Copinha");

  const inscricao = secao.locator('a[href*="forms.gle"]');
  await expect(inscricao).toBeVisible();
});

test("a contagem regressiva sai do estado de carregamento", async ({
  page,
}) => {
  const numeros = page.locator("[data-contagem-numeros]");
  // O JavaScript precisa substituir o skeleton pelos números reais
  await expect(numeros).toBeVisible({ timeout: 10_000 });

  const dias = page.locator("[data-dias]");
  await expect(dias).not.toHaveText("--");
  // Precisa ser um número, não texto quebrado
  await expect(dias).toHaveText(/^\d+$/);
});

test("todas as seções do menu existem na página", async ({ page }) => {
  for (const id of [
    "#torneio",
    "#sobre",
    "#participar",
    "#apoiar",
    "#duvidas",
    "#local",
  ]) {
    await expect(page.locator(id)).toHaveCount(1);
  }
});

test("as perguntas frequentes abrem e fecham", async ({ page }) => {
  const primeira = page.locator("#duvidas details").first();
  const resposta = primeira.locator(".duvida__corpo");

  await expect(resposta).toBeHidden();
  await primeira.locator("summary").click();
  await expect(resposta).toBeVisible();
});

test("o mapa da praça é carregado sob demanda", async ({ page }) => {
  const mapa = page.locator("#local iframe");
  await expect(mapa).toHaveAttribute("loading", "lazy");
  await expect(mapa).toHaveAttribute("src", /google\.com\/maps/);
});

test("nenhum nome de criança aparece na página", async ({ page }) => {
  // Trava de segurança: a página não deve conter listas de alunos.
  // Se alguém publicar nomes por engano, este teste falha e barra o deploy.
  const texto = (await page.locator("body").innerText()).toLowerCase();
  for (const proibido of ["lista de alunos", "alunos matriculados:"]) {
    expect(texto).not.toContain(proibido);
  }
});

test("o site tem descrição e imagem para compartilhamento", async ({
  page,
}) => {
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /.{50,}/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /og\.jpg$/,
  );
});

test("o menu do celular abre e fecha", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Só se aplica a telas pequenas");

  const botao = page.locator("[data-menu-botao]");
  const menu = page.locator("[data-menu]");

  await expect(botao).toBeVisible();
  await expect(botao).toHaveAttribute("aria-expanded", "false");

  await botao.click();
  await expect(botao).toHaveAttribute("aria-expanded", "true");
  await expect(menu.getByRole("link", { name: "O projeto" })).toBeVisible();
});

test("não há rolagem horizontal no celular", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Só se aplica a telas pequenas");

  const estouro = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(estouro).toBe(false);
});
