# Decisões técnicas e riscos aceitos

Registro das escolhas feitas neste projeto e do motivo de cada uma. Serve para quem
pegar o projeto depois — inclusive você mesmo, em seis meses.

---

## 1. Astro 6, e não Astro 7

**Data:** 03/10/2026

**Decisão:** o projeto usa Astro 6.4.8.

**Motivo:** a máquina de desenvolvimento tem o **Smart App Control** do Windows 11
ativado. Ele bloqueia binários nativos sem assinatura reconhecida. O Astro 7 depende do
módulo nativo `satteri` para processar Markdown, que é bloqueado — o build falha com
`ERR_DLOPEN_FAILED` e a mensagem "An Application Control policy has blocked this file".

Astro 5 e 6 não têm essa dependência. Entre os dois, escolhemos o 6 por ser mais recente.

### Risco aceito

O `npm audit` aponta vulnerabilidades no Astro 6, incluindo uma **crítica**. A correção
existe apenas no Astro 7.

**Por que é aceitável neste projeto específico:**

| Vulnerabilidade | Por que não se aplica aqui |
|---|---|
| XSS via `define:vars` | o projeto não usa `define:vars` |
| Server islands (replay de parâmetros) | site 100% estático, sem servidor |
| XSS em spread props | não há spread de atributos com dado externo |
| XSS em `transition:*` | view transitions não são usadas |
| SSRF via header Host | não há servidor em produção |
| RCE via otimização AVIF | o componente `<Image>` do Astro não é usado |
| Bypass de autorização no `base` | nenhum `base` configurado |
| `sharp` / libvips | usado só no build, com imagens próprias e confiáveis |

O site é gerado como HTML estático e servido por CDN. Não há servidor processando
requisições, não há formulário próprio, não há autenticação e não há entrada de dados do
visitante. Sem essas portas, essas falhas não têm por onde ser exploradas em produção.

### Quando isso deixa de valer

**Este risco só é aceitável enquanto o site for estático.** Se o projeto passar a ter
área logada, banco de dados, formulário próprio ou qualquer lógica de servidor, o Astro 7
se torna obrigatório — e será necessário resolver a restrição do Smart App Control antes.

### Como resolver no futuro

1. **Desligar o Smart App Control.** Resolve de forma definitiva, mas é **irreversível**:
   só volta a funcionar reinstalando o Windows. Decisão do dono da máquina.
2. **Build apenas em CI/CD.** GitHub Actions e Cloudflare Pages rodam Linux, onde o
   bloqueio não existe. Funciona para publicar, mas elimina o preview local.

A auditoria roda no CI (job `seguranca`) sem bloquear o merge, justamente porque o risco
está documentado aqui.

---

## 2. CSS puro com tokens, em vez de Tailwind

**Decisão:** estilos escritos em CSS, com variáveis centralizadas em
`src/styles/tokens.css`.

**Motivo:** o dono do projeto está aprendendo desenvolvimento web. CSS puro ensina
fundamentos que servem em qualquer projeto futuro, e o código fica legível sem conhecer
uma biblioteca específica. Mudanças de cor, espaçamento e tempo de animação acontecem num
único arquivo.

O Tailwind também falhou ao ser instalado durante o scaffold, o que reforçou a escolha.

---

## 3. Sem formulário próprio de inscrição

**Decisão:** a inscrição acontece por WhatsApp; o torneio usa um Google Forms já
existente.

**Motivo:** um formulário próprio coletando nome e idade de criança e dados do responsável
torna o site responsável por tratamento de dados pessoais de menores, com as obrigações da
LGPD que isso implica — política de privacidade, finalidade declarada, base legal,
retenção e segurança do armazenamento.

Com o WhatsApp e o Google Forms, o tratamento fica onde já estava, e o site apenas
encaminha. Simplifica a conformidade sem perder nada em captação.

---

## 4. Fotos de crianças

**Decisão:** nenhuma foto de criança identificável é publicada sem autorização de uso de
imagem assinada pelo responsável legal. Nenhum nome de criança aparece no site.

**Como está implementado:**

- `assets-originais/fotos-sem-autorizacao/` está no `.gitignore`. O repositório é público,
  e uma imagem enviada ao Git permanece no histórico mesmo depois de apagada;
- apenas `assets-originais/fotos-liberadas/` é versionada;
- há um teste automatizado (`tests/site.spec.ts`) que falha se listas de alunos
  aparecerem na página, barrando o deploy.

**Base:** ECA e LGPD, que dá proteção reforçada a dados de menores.

---

## 5. Hospedagem no Cloudflare Pages

**Decisão:** Cloudflare Pages, no plano gratuito.

**Motivo:** permite uso comercial no plano gratuito, tem banda ilimitada e faz deploy
automático a partir do GitHub.

**Importante:** o plano Hobby da **Vercel proíbe uso comercial** nos termos de serviço.
Não usar para site de cliente.
