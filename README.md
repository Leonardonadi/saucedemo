# Testes Playwright do SauceDemo

Projeto independente para testes end-to-end do [SauceDemo](https://www.saucedemo.com/).
Os cenários são escritos em Gherkin e executados com Playwright BDD. A configuração,
as dependências e os testes ficam separados do projeto do QuintoAndar.

## Estrutura do projeto

```text
saucedemo-playwright/
├── features/
│   └── saucedemo.feature       # Cenários BDD em Gherkin
├── steps/
│   └── saucedemo.steps.js      # Implementação dos passos dos cenários
├── playwright.config.js        # Configuração do Playwright e do BDD
├── package.json                # Dependências e comandos
└── README.md
```

No VS Code, expanda a pasta `saucedemo-playwright` no Explorer. Para abrir o projeto
como uma janela separada, use **File > Open Folder...** e selecione essa pasta.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

No PowerShell, acesse esta pasta e instale as dependências e o Chromium:

```powershell
npm install
npx playwright install chromium
```

## Executar os testes

```powershell
npm test
```

O comando `npm test` gera o relatório HTML em `playwright-report`. Para abri-lo
depois que a execução terminar, use:

```powershell
npm run test:report
```

`npx playwright show-report` também abre o relatório, mas só funciona depois
que uma execução de testes tiver gerado a pasta `playwright-report`.
O script `npm run test:report` usa a porta `9324` para evitar conflito quando
a porta padrão `9323` já estiver ocupada.

Para executar com o navegador visível ou abrir a interface interativa:

```powershell
npm run test:headed
npm run test:ui
```

## Executar cenários individualmente no VS Code

Instale a extensão recomendada **Playwright Test for VS Code** e gere os testes
Playwright a partir das features:

```powershell
npm run bdd:generate
```

Depois, abra a aba **Testing** do VS Code para localizar e executar cenários
individualmente pelo botão de execução. Se alterar uma feature, gere os testes
novamente antes de executá-los por essa aba.

Os botões não aparecem diretamente no arquivo `.feature`: o Playwright executa
os testes JavaScript gerados em `.features-gen`. Para executar a suíte completa,
`npm test` continua gerando os testes e executando-os em sequência.

Os cenários ficam em [features/saucedemo.feature](features/saucedemo.feature) e os
passos correspondentes em [steps/saucedemo.steps.js](steps/saucedemo.steps.js).
Eles usam a conta pública de demonstração `standard_user` / `secret_sauce`.
