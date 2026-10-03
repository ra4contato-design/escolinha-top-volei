/* ============================================================================
   PADRÃO DAS MENSAGENS DE COMMIT (Conventional Commits)
   ----------------------------------------------------------------------------
   Formato:  tipo: descrição em minúscula, no imperativo

   Exemplos válidos:
     feat: adiciona contagem regressiva da Copinha
     fix: corrige link do WhatsApp no rodapé
     docs: atualiza instruções de publicação
     style: ajusta espaçamento da seção de apoio
     chore: atualiza dependências

   Exemplos inválidos:
     Adicionei a contagem      (sem tipo)
     feat: Adiciona contagem.  (maiúscula e ponto final)
   ============================================================================ */

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // nova funcionalidade
        "fix", // correção de problema
        "docs", // documentação
        "style", // formatação e ajuste visual, sem mudar comportamento
        "refactor", // reorganização técnica, sem mudar comportamento
        "perf", // melhoria de desempenho
        "test", // testes
        "build", // build e dependências
        "ci", // integração contínua
        "chore", // manutenção geral
        "revert", // desfaz um commit anterior
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
};
