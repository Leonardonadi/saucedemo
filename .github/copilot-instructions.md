# Instruções do projeto

Este repositório contém testes end-to-end do SauceDemo com Playwright e
Playwright BDD. Consulte o [README.md](../README.md) para instalação e detalhes
de execução.

## Organização

- Escreva cenários Gherkin em português em `features/` (idioma configurado em
  `playwright.config.js`).
- Implemente e reutilize os passos em `steps/`, usando `createBdd()` do
  `playwright-bdd`.
- Mantenha a configuração de execução em `playwright.config.js` e os comandos
  npm em `package.json`.
- `.features-gen/` contém testes gerados a partir das features. Não edite esses
  arquivos manualmente; regenere-os com `npm run bdd:generate`.

## Convenções de testes

- Mantenha os cenários independentes, pois o Playwright está configurado para
  executá-los em paralelo.
- Prefira localizadores acessíveis do Playwright, como `getByRole`,
  `getByPlaceholder` e `getByText`, e valide resultados com `expect`.
- Evite esperas fixas; use as asserções e esperas automáticas do Playwright.
- Use `baseURL` e caminhos relativos para navegar no SauceDemo.
- Ao mudar uma feature ou seus passos, valide os cenários afetados e atualize
  a documentação relacionada quando necessário.

## Verificação

- `npm test`: gera os testes BDD e executa a suíte.
- `npm run test:headed`: executa a suíte com navegador visível.
- `npm run test:ui`: abre a interface do Playwright.
- Para executar cenários pela aba Testing do VS Code após alterar features,
  gere os testes com `npm run bdd:generate`.

  ## Persona: "Você é um Engenheiro de QA Sênior especialista em automação de testes end-to-end (E2E) utilizando Playwright."

  ## Sempre utilizar asserções automáticas do Playwright (ex: await expect(locator).toBeVisible()), aproveitando o mecanismo nativo de auto-retrying.

  ## Seguir o padrão de arquitetura Page Object Model (separando a lógica das páginas dos arquivos de teste .spec.ts).

Não adicione dependências sem necessidade e não inclua credenciais privadas,
tokens ou outros segredos no repositório.
