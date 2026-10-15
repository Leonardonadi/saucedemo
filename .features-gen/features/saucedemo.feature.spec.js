// Generated from: features\saucedemo.feature
import { test } from "playwright-bdd";

test.describe('Compra de produtos no SauceDemo', () => {

  test('Entrar na loja e consultar os produtos', async ({ Given, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await Then('vejo a lista de produtos disponíveis', null, { page }); 
  });

  test('Adicionar um produto ao carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila Sauce Labs ao carrinho', null, { page }); 
    await Then('encontro a mochila Sauce Labs no carrinho', null, { page }); 
  });

  test('Ordenar produtos por preço crescente', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('ordeno os produtos do menor para o maior preço', null, { page }); 
    await Then('os produtos são exibidos em ordem crescente de preço', null, { page }); 
  });

  test('Ordenar produtos por nome decrescente', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('ordeno os produtos de Z a A', null, { page }); 
    await Then('os produtos são exibidos em ordem decrescente de nome', null, { page }); 
  });

  test('Remover um produto do carrinho', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('adiciono a mochila Sauce Labs ao carrinho', null, { page }); 
    await When('removo a mochila Sauce Labs do carrinho', null, { page }); 
    await Then('o carrinho fica vazio', null, { page }); 
  });

  test('Continuar comprando sem perder os produtos selecionados', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('adiciono a mochila Sauce Labs ao carrinho', null, { page }); 
    await When('continuo comprando a partir do carrinho', null, { page }); 
    await Then('retorno à lista de produtos com a mochila ainda selecionada', null, { page }); 
  });

  test('Validar checkout sem o primeiro nome', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('continuo o checkout sem informar o primeiro nome', null, { page }); 
    await Then('vejo uma mensagem informando que o primeiro nome é obrigatório', null, { page }); 
  });

  test('Finalizar uma compra com sucesso', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('preencho os dados de entrega e confirmo o pedido', null, { page }); 
    await Then('vejo a confirmação de que o pedido foi concluído', null, { page }); 
  });

  test('Encerrar a sessão da loja', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('encerro minha sessão', null, { page }); 
    await Then('retorno à página de login', null, { page }); 
  });

  test('Exibir erro para credenciais inválidas', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('tento entrar com credenciais inválidas', null, { page }); 
    await Then('vejo uma mensagem de erro de autenticação', null, { page }); 
  });

  test('Impedir o acesso de um usuário bloqueado', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('tento entrar com o usuário bloqueado', null, { page }); 
    await Then('vejo uma mensagem informando que o usuário está bloqueado', null, { page }); 
  });

  test('Atualizar o carrinho ao adicionar dois produtos', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila Sauce Labs e a luz de bicicleta ao carrinho', null, { page }); 
    await Then('o carrinho indica dois produtos e contém ambos', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\saucedemo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Então vejo a lista de produtos disponíveis","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila Sauce Labs ao carrinho","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Então encontro a mochila Sauce Labs no carrinho","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"Quando ordeno os produtos do menor para o maior preço","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Então os produtos são exibidos em ordem crescente de preço","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"Quando ordeno os produtos de Z a A","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Então os produtos são exibidos em ordem decrescente de nome","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"E adiciono a mochila Sauce Labs ao carrinho","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"Quando removo a mochila Sauce Labs do carrinho","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Então o carrinho fica vazio","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"E adiciono a mochila Sauce Labs ao carrinho","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"Quando continuo comprando a partir do carrinho","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Então retorno à lista de produtos com a mochila ainda selecionada","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"Quando continuo o checkout sem informar o primeiro nome","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem informando que o primeiro nome é obrigatório","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":51,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"Quando preencho os dados de entrega e confirmo o pedido","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Então vejo a confirmação de que o pedido foi concluído","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":58,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"Quando encerro minha sessão","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Então retorno à página de login","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":64,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"Quando tento entrar com credenciais inválidas","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem de erro de autenticação","stepMatchArguments":[]}]},
  {"pwTestLine":69,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":70,"gherkinStepLine":60,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"Quando tento entrar com o usuário bloqueado","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem informando que o usuário está bloqueado","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":76,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila Sauce Labs e a luz de bicicleta ao carrinho","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Então o carrinho indica dois produtos e contém ambos","stepMatchArguments":[]}]},
]; // bdd-data-end