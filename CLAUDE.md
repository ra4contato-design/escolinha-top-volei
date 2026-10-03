# Instruções do projeto — Escolinha Top Vôlei

Este arquivo complementa o `CLAUDE.md` global (em `C:\Users\ra4co\.claude\CLAUDE.md`),
que traz as regras obrigatórias de GitHub, Motion Design e qualidade. **As regras globais
continuam valendo integralmente.**

Perfil do projeto: **4.1 — Site de cliente** (site estático, sem área logada).

---

## Regras específicas deste projeto

### Proteção de imagem de crianças — não negociável

1. **Nenhum nome de criança** no site, em nenhuma seção.
2. **Nenhuma foto de criança identificável** sem autorização de uso de imagem assinada
   pelo responsável legal.
3. Fotos sem autorização ficam em `assets-originais/fotos-sem-autorizacao/`, que está no
   `.gitignore`. **Nunca remover essa linha do `.gitignore`** — o repositório é público, e
   imagem enviada ao Git permanece no histórico mesmo depois de apagada.
4. Ao receber autorização, mover a foto para `assets-originais/fotos-liberadas/`.

### Dados pessoais

Não criar formulário próprio que colete dados de criança ou responsável sem antes
implementar política de privacidade e definir finalidade e base legal. Ver `DECISOES.md`,
item 3.

Dados de inscritos (planilha do Google Forms) **não vão para o site**. Apenas números
agregados, sem ninguém identificável.

### Astro 6, não 7

Não atualizar para o Astro 7 sem antes ler `DECISOES.md`, item 1. A atualização quebra o
build nesta máquina por causa do Smart App Control do Windows.

---

## Onde mexer para cada tipo de mudança

| Quero mudar | Arquivo |
|---|---|
| Qualquer texto, horário, contato, data, pergunta do FAQ | `src/data/conteudo.ts` |
| Cores, fontes, espaçamentos, tempo das animações | `src/styles/tokens.css` |
| Estilos gerais, botões, animação de entrada | `src/styles/global.css` |
| Ordem das seções na página | `src/pages/index.astro` |
| Uma seção específica | `src/components/<Nome>.astro` |
| Estrutura do `<head>`, SEO, dados do Google | `src/layouts/Base.astro` |

**Na maioria das vezes, `src/data/conteudo.ts` é o único arquivo necessário.**

---

## Comandos

```bash
npm run dev          # sobe o site local em http://localhost:4321
npm run build        # gera o site final na pasta dist/
npm run preview      # mostra o site final, como ficará publicado

npm run verificar    # roda lint + tipos + build de uma vez
npm run lint         # procura problemas no código
npm run lint:corrigir# corrige o que for automático
npm run type-check   # confere os tipos
npm run test:e2e     # roda os testes num navegador real
npm run test:e2e:ver # roda os testes com interface visual
```

O servidor de desenvolvimento recarrega sozinho a cada arquivo salvo. Para parar,
`Ctrl+C` no terminal.

---

## Estrutura

```
src/
  data/conteudo.ts        todo o conteúdo editável do site
  styles/
    tokens.css            cores, fontes, espaçamentos, durações
    global.css            reset, botões, animações, acessibilidade
  layouts/Base.astro      <head>, SEO, fontes, dados estruturados
  components/
    Cabecalho.astro       menu fixo, com versão de celular
    Banner.astro          primeira tela
    Torneio.astro         Copinha + contagem regressiva
    Sobre.astro           história e diferenciais
    Participar.astro      passos, horários, documentos
    Apoiar.astro          patrocínio e apoio
    Duvidas.astro         perguntas frequentes
    Local.astro           mapa e endereço
    Rodape.astro          contatos e navegação
    BotaoWhatsApp.astro   botão flutuante
  scripts/animacoes.ts    animação de entrada, cabeçalho, menu
  pages/index.astro       monta a página
tests/site.spec.ts        testes dos fluxos críticos
assets-originais/         arquivos originais (logo, fotos)
```

---

## Padrões de Motion Design adotados

Conforme a seção 2 das regras globais:

- **Durações** em `tokens.css`: `--d-rapida` (150ms), `--d-media` (280ms),
  `--d-lenta` (500ms). Não criar durações novas sem necessidade;
- **Entrada de elementos**: classe `revelar`, acionada por `IntersectionObserver`.
  Atraso em cascata com `revelar--1` a `revelar--4`;
- **Skeleton**: classe `skeleton`. Usado na contagem regressiva e no mapa;
- **Animações** usam apenas `transform` e `opacity`, que não causam recálculo de layout;
- **`prefers-reduced-motion`** é respeitado no CSS e no JavaScript;
- **`@media (hover: hover)`** envolve todo efeito de hover, para não travar o estado no
  celular depois do toque.

---

## Publicação

O deploy é feito pelo Cloudflare Pages, a partir da branch `main`.

Fluxo obrigatório (regra 1 global): **Issue → Branch → Commits → Pull Request → Merge →
Deploy**. Nunca enviar direto para a `main`.

---

## Documentação do Astro

- [Componentes](https://docs.astro.build/en/basics/astro-components/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
- [Rotas e páginas](https://docs.astro.build/en/guides/routing/)
- [Imagens](https://docs.astro.build/en/guides/images/)
