/* ============================================================================
   ANIMAÇÕES DE ENTRADA
   ----------------------------------------------------------------------------
   Faz os elementos com a classe "revelar" aparecerem suavemente quando entram
   na tela durante a rolagem.

   Usa IntersectionObserver, que é o recurso do navegador criado para isso.
   Ele é muito mais leve que ficar verificando a posição a cada rolagem.
   ============================================================================ */

export function iniciarAnimacoes(): void {
  const elementos = document.querySelectorAll<HTMLElement>(".revelar");

  if (elementos.length === 0) return;

  // Se a pessoa pediu menos movimento no sistema operacional, mostramos tudo
  // de uma vez, sem animação. Exigência de acessibilidade (seção 2.8).
  const prefereMenosMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefereMenosMovimento) {
    for (const el of elementos) el.classList.add("visivel");
    return;
  }

  // Navegador muito antigo, sem suporte: mostra tudo em vez de esconder.
  if (!("IntersectionObserver" in window)) {
    for (const el of elementos) el.classList.add("visivel");
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.classList.add("visivel");
        // Anima uma única vez: depois de aparecer, para de observar.
        observador.unobserve(entrada.target);
      }
    },
    {
      // Dispara quando 12% do elemento está visível...
      threshold: 0.12,
      // ...e começa um pouco antes de ele chegar na borda de baixo da tela.
      rootMargin: "0px 0px -60px 0px",
    },
  );

  for (const el of elementos) observador.observe(el);
}

/* ============================================================================
   CABEÇALHO
   Ganha fundo sólido assim que a página sai do topo.
   ============================================================================ */

export function iniciarCabecalho(): void {
  const cabecalho = document.querySelector<HTMLElement>("[data-cabecalho]");
  if (!cabecalho) return;

  const atualizar = (): void => {
    cabecalho.classList.toggle("cabecalho--rolado", window.scrollY > 24);
  };

  atualizar();
  // "passive" avisa o navegador que não vamos bloquear a rolagem:
  // mantém o movimento fluido no celular.
  window.addEventListener("scroll", atualizar, { passive: true });
}

/* ============================================================================
   MENU DO CELULAR
   ============================================================================ */

export function iniciarMenu(): void {
  const botao = document.querySelector<HTMLButtonElement>("[data-menu-botao]");
  const menu = document.querySelector<HTMLElement>("[data-menu]");
  if (!botao || !menu) return;

  const fechar = (): void => {
    menu.classList.remove("aberto");
    botao.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const alternar = (): void => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
    // Trava a rolagem do fundo enquanto o menu está aberto
    document.body.style.overflow = aberto ? "hidden" : "";
  };

  botao.addEventListener("click", alternar);

  // Fecha ao clicar em qualquer link do menu
  for (const link of menu.querySelectorAll("a")) {
    link.addEventListener("click", fechar);
  }

  // Fecha com a tecla Esc
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fechar();
  });
}
