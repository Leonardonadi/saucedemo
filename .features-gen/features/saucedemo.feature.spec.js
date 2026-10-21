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

  test('Ordenar produtos por nome crescente', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('ordeno produtos alfabeticamente de A a Z', null, { page }); 
    await Then('os produtos são exibidos em ordem crescente de nome', null, { page }); 
  });

  test('Ordenar produtos por preço decrescente', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('ordeno produtos do preço mais alto para o mais baixo', null, { page }); 
    await Then('os produtos são exibidos em ordem decrescente de preço', null, { page }); 
  });

  test('Exibir todos os produtos do catálogo', async ({ Given, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await Then('o catálogo apresenta seis produtos', null, { page }); 
  });

  test('Consultar os detalhes de um produto', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('abro os detalhes da mochila Sauce Labs', null, { page }); 
    await Then('vejo os detalhes da mochila Sauce Labs', null, { page }); 
    await When('volto aos produtos a partir dos detalhes', null, { page }); 
    await Then('retorno ao catálogo de produtos', null, { page }); 
  });

  test('Remover um produto diretamente do catálogo', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono e removo a mochila diretamente no catálogo', null, { page }); 
    await Then('a mochila não permanece no carrinho nem selecionada no catálogo', null, { page }); 
  });

  test('Validar checkout sem o sobrenome', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('preencho apenas o primeiro nome no checkout', null, { page }); 
    await Then('vejo uma mensagem informando que o sobrenome é obrigatório', null, { page }); 
  });

  test('Validar checkout sem o código postal', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('continuo o checkout sem informar o código postal', null, { page }); 
    await Then('vejo uma mensagem informando que o código postal é obrigatório', null, { page }); 
  });

  test('Conferir os valores do resumo da compra', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('preencho os dados e avanço para revisão do pedido', null, { page }); 
    await Then('o resumo da compra apresenta subtotal, imposto e total consistentes', null, { page }); 
  });

  test('Cancelar a revisão do pedido e manter o produto selecionado', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto na etapa de revisão do checkout', null, { page }); 
    await When('cancelo a revisão e volto à lista de produtos', null, { page }); 
    await Then('a mochila permanece selecionada no catálogo', null, { page }); 
  });

  test('Voltar ao catálogo depois de concluir a compra', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('finalizo a compra e retorno à lista de produtos', null, { page }); 
    await Then('retorno ao catálogo com o carrinho vazio', null, { page }); 
  });

  test('Exibir erro ao tentar entrar sem nome de usuário', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('tento entrar sem informar o nome de usuário', null, { page }); 
    await Then('vejo uma mensagem informando que o nome de usuário é obrigatório', null, { page }); 
  });

  test('Exibir erro ao tentar entrar sem senha', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('tento entrar sem informar a senha', null, { page }); 
    await Then('vejo uma mensagem informando que a senha é obrigatória', null, { page }); 
  });

  test('Mascarar a senha na página de login', async ({ Given, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await Then('o campo de senha oculta os caracteres digitados', null, { page }); 
  });

  test('Retornar à loja a partir do carrinho vazio', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('abro o carrinho sem produtos', null, { page }); 
    await Then('o carrinho está vazio e permite continuar comprando', null, { page }); 
    await When('continuo comprando a partir do carrinho', null, { page }); 
    await Then('retorno à lista de produtos', null, { page }); 
  });

  test('Adicionar um produto ao carrinho a partir dos detalhes', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('abro os detalhes da mochila e a adiciono ao carrinho', null, { page }); 
    await Then('os detalhes indicam que a mochila foi adicionada', null, { page }); 
    await When('volto aos produtos a partir dos detalhes', null, { page }); 
    await Then('a mochila continua selecionada no catálogo', null, { page }); 
  });

  test('Remover um produto e manter o outro no carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila e a luz de bicicleta e removo a mochila no carrinho', null, { page }); 
    await Then('a luz de bicicleta permanece como único produto no carrinho', null, { page }); 
  });

  test('Redefinir o estado da loja e esvaziar o carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila e redefino o estado da loja pelo menu', null, { page }); 
    await Then('o carrinho e os produtos selecionados são redefinidos', null, { page }); 
  });

  test('Cancelar o preenchimento do checkout e manter o produto no carrinho', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('cancelo o preenchimento dos dados do checkout', null, { page }); 
    await Then('retorno ao carrinho com a mochila Sauce Labs', null, { page }); 
  });

  test('Conferir que o preço do produto é igual nos detalhes e no catálogo', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('abro os detalhes da mochila para conferir o preço', null, { page }); 
    await Then('o preço da mochila corresponde ao exibido no catálogo', null, { page }); 
  });

  test('Conferir os dois produtos na revisão do pedido', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono dois produtos e avanço para a revisão do checkout', null, { page }); 
    await Then('a revisão apresenta os dois produtos selecionados', null, { page }); 
  });

  test('Voltar ao catálogo usando a navegação do navegador', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('abro os detalhes da mochila e volto pelo navegador', null, { page }); 
    await Then('retorno ao catálogo de produtos', null, { page }); 
  });

  test('Bloquear o acesso ao catálogo após encerrar a sessão', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('encerro a sessão e tento abrir diretamente o catálogo', null, { page }); 
    await Then('sou redirecionado para a página de login', null, { page }); 
  });

  test('Entrar na loja pressionando Enter', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('informo credenciais válidas e pressiono Enter', null, { page }); 
    await Then('acesso a lista de produtos', null, { page }); 
  });

  test('Exibir erro ao usar senha incorreta com usuário válido', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('tento entrar com usuário válido e senha incorreta', null, { page }); 
    await Then('vejo uma mensagem de erro de autenticação', null, { page }); 
  });

  test('Conferir os dados de cada produto no catálogo', async ({ Given, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await Then('cada produto apresenta imagem, nome, descrição e preço', null, { page }); 
  });

  test('Conferir os detalhes de todos os produtos', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('consulto os detalhes de cada produto', null, { page }); 
    await Then('cada página de detalhes corresponde ao produto selecionado', null, { page }); 
  });

  test('Adicionar todos os produtos ao carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono todos os produtos ao carrinho', null, { page }); 
    await Then('o carrinho contém os seis produtos do catálogo', null, { page }); 
  });

  test('Conferir o subtotal de dois produtos na revisão', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão com a mochila e a luz de bicicleta', null, { page }); 
    await Then('o subtotal corresponde à soma dos preços dos dois produtos', null, { page }); 
  });

  test('Conferir as informações de pagamento e envio na revisão', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão do pedido com um produto', null, { page }); 
    await Then('vejo as informações de pagamento e envio no resumo', null, { page }); 
  });

  test('Cancelar a revisão e manter dois produtos selecionados', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão com a mochila e a luz de bicicleta', null, { page }); 
    await And('cancelo a revisão do pedido', null, { page }); 
    await Then('os dois produtos continuam selecionados no catálogo', null, { page }); 
  });

  test('Manter a ordenação ao voltar dos detalhes pelo navegador', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('abro os detalhes do primeiro produto ordenado alfabeticamente e volto pelo navegador', null, { page }); 
    await Then('o catálogo continua ordenado alfabeticamente', null, { page }); 
  });

  test('Fechar a mensagem de erro de login', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login do SauceDemo', null, { page }); 
    await When('tento entrar com credenciais inválidas e fecho a mensagem de erro', null, { page }); 
    await Then('a mensagem de erro é ocultada e permaneço na página de login', null, { page }); 
  });

  test('Remover um produto do carrinho pela página de detalhes', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono e removo a mochila pela página de detalhes', null, { page }); 
    await Then('a mochila é removida e os detalhes permitem adicioná-la novamente', null, { page }); 
  });

  test('Abrir o carrinho diretamente dos detalhes do produto', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila pelos detalhes e abro o carrinho', null, { page }); 
    await Then('o carrinho mostra a mochila com quantidade um', null, { page }); 
  });

  test('Atualizar o contador a cada produto adicionado', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono três produtos diferentes ao carrinho', null, { page }); 
    await Then('o contador do carrinho acompanha cada produto adicionado', null, { page }); 
  });

  test('Manter os dados do checkout após erro de validação', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await And('tenho um produto no carrinho e inicio o checkout', null, { page }); 
    await When('envio o checkout com nome e sobrenome, mas sem código postal', null, { page }); 
    await Then('os nomes permanecem preenchidos e o erro do código postal é exibido', null, { page }); 
  });

  test('Conferir a quantidade de cada produto na revisão do checkout', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão com a mochila e a luz de bicicleta', null, { page }); 
    await Then('cada produto da revisão apresenta quantidade um', null, { page }); 
  });

  test('Conferir os preços dos produtos na revisão do checkout', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão com a mochila e a luz de bicicleta', null, { page }); 
    await Then('os preços da revisão correspondem aos preços do catálogo', null, { page }); 
  });

  test('Manter o produto no carrinho após atualizar a página', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila ao carrinho e atualizo a página', null, { page }); 
    await Then('a mochila continua no carrinho após a atualização', null, { page }); 
  });

  test('Conferir o preço do produto no carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono a mochila e abro o carrinho para conferir o preço', null, { page }); 
    await Then('o preço da mochila no carrinho é 29,99 dólares', null, { page }); 
  });

  test('Conferir o cálculo do imposto para dois produtos', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão com a mochila e a luz de bicicleta', null, { page }); 
    await Then('o imposto e o total correspondem aos valores dos dois produtos', null, { page }); 
  });

  test('Conferir os valores de envio informados no resumo', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('avanço para a revisão com dados de envio definidos', null, { page }); 
    await Then('o resumo exibe as informações de pagamento e entrega esperadas', null, { page }); 
  });

  test('Bloquear o acesso ao carrinho após encerrar a sessão', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('encerro a sessão e tento abrir diretamente o carrinho', null, { page }); 
    await Then('sou redirecionado para a página de login', null, { page }); 
  });

  test('Atualizar o estado dos botões dos seis produtos ao adicioná-los', async ({ Given, When, Then, page }) => { 
    await Given('que acesso o SauceDemo com um usuário válido', null, { page }); 
    await When('adiciono os seis produtos ao carrinho', null, { page }); 
    await Then('cada produto exibe a opção para removê-lo do carrinho', null, { page }); 
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
  {"pwTestLine":81,"pickleLine":69,"tags":[],"steps":[{"pwStepLine":82,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"Quando ordeno produtos alfabeticamente de A a Z","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Então os produtos são exibidos em ordem crescente de nome","stepMatchArguments":[]}]},
  {"pwTestLine":87,"pickleLine":74,"tags":[],"steps":[{"pwStepLine":88,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"Quando ordeno produtos do preço mais alto para o mais baixo","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Então os produtos são exibidos em ordem decrescente de preço","stepMatchArguments":[]}]},
  {"pwTestLine":93,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":94,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Então o catálogo apresenta seis produtos","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":99,"gherkinStepLine":84,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"Quando abro os detalhes da mochila Sauce Labs","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Então vejo os detalhes da mochila Sauce Labs","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"Quando volto aos produtos a partir dos detalhes","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Então retorno ao catálogo de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":106,"pickleLine":90,"tags":[],"steps":[{"pwStepLine":107,"gherkinStepLine":91,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"Quando adiciono e removo a mochila diretamente no catálogo","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Então a mochila não permanece no carrinho nem selecionada no catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":112,"pickleLine":95,"tags":[],"steps":[{"pwStepLine":113,"gherkinStepLine":96,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"Quando preencho apenas o primeiro nome no checkout","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem informando que o sobrenome é obrigatório","stepMatchArguments":[]}]},
  {"pwTestLine":119,"pickleLine":101,"tags":[],"steps":[{"pwStepLine":120,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":103,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"Quando continuo o checkout sem informar o código postal","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem informando que o código postal é obrigatório","stepMatchArguments":[]}]},
  {"pwTestLine":126,"pickleLine":107,"tags":[],"steps":[{"pwStepLine":127,"gherkinStepLine":108,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":109,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"Quando preencho os dados e avanço para revisão do pedido","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Então o resumo da compra apresenta subtotal, imposto e total consistentes","stepMatchArguments":[]}]},
  {"pwTestLine":133,"pickleLine":113,"tags":[],"steps":[{"pwStepLine":134,"gherkinStepLine":114,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":115,"keywordType":"Context","textWithKeyword":"E tenho um produto na etapa de revisão do checkout","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"Quando cancelo a revisão e volto à lista de produtos","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Então a mochila permanece selecionada no catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":140,"pickleLine":119,"tags":[],"steps":[{"pwStepLine":141,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"Quando finalizo a compra e retorno à lista de produtos","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Então retorno ao catálogo com o carrinho vazio","stepMatchArguments":[]}]},
  {"pwTestLine":146,"pickleLine":124,"tags":[],"steps":[{"pwStepLine":147,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"Quando tento entrar sem informar o nome de usuário","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem informando que o nome de usuário é obrigatório","stepMatchArguments":[]}]},
  {"pwTestLine":152,"pickleLine":129,"tags":[],"steps":[{"pwStepLine":153,"gherkinStepLine":130,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":131,"keywordType":"Action","textWithKeyword":"Quando tento entrar sem informar a senha","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":132,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem informando que a senha é obrigatória","stepMatchArguments":[]}]},
  {"pwTestLine":158,"pickleLine":134,"tags":[],"steps":[{"pwStepLine":159,"gherkinStepLine":135,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Então o campo de senha oculta os caracteres digitados","stepMatchArguments":[]}]},
  {"pwTestLine":163,"pickleLine":138,"tags":[],"steps":[{"pwStepLine":164,"gherkinStepLine":139,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":140,"keywordType":"Action","textWithKeyword":"Quando abro o carrinho sem produtos","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":141,"keywordType":"Outcome","textWithKeyword":"Então o carrinho está vazio e permite continuar comprando","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":142,"keywordType":"Action","textWithKeyword":"Quando continuo comprando a partir do carrinho","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"Então retorno à lista de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":171,"pickleLine":145,"tags":[],"steps":[{"pwStepLine":172,"gherkinStepLine":146,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"Quando abro os detalhes da mochila e a adiciono ao carrinho","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Então os detalhes indicam que a mochila foi adicionada","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":149,"keywordType":"Action","textWithKeyword":"Quando volto aos produtos a partir dos detalhes","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":150,"keywordType":"Outcome","textWithKeyword":"Então a mochila continua selecionada no catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":179,"pickleLine":152,"tags":[],"steps":[{"pwStepLine":180,"gherkinStepLine":153,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":154,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila e a luz de bicicleta e removo a mochila no carrinho","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Então a luz de bicicleta permanece como único produto no carrinho","stepMatchArguments":[]}]},
  {"pwTestLine":185,"pickleLine":157,"tags":[],"steps":[{"pwStepLine":186,"gherkinStepLine":158,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":159,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila e redefino o estado da loja pelo menu","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Então o carrinho e os produtos selecionados são redefinidos","stepMatchArguments":[]}]},
  {"pwTestLine":191,"pickleLine":162,"tags":[],"steps":[{"pwStepLine":192,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"Quando cancelo o preenchimento dos dados do checkout","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Então retorno ao carrinho com a mochila Sauce Labs","stepMatchArguments":[]}]},
  {"pwTestLine":198,"pickleLine":168,"tags":[],"steps":[{"pwStepLine":199,"gherkinStepLine":169,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":170,"keywordType":"Action","textWithKeyword":"Quando abro os detalhes da mochila para conferir o preço","stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":171,"keywordType":"Outcome","textWithKeyword":"Então o preço da mochila corresponde ao exibido no catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":204,"pickleLine":173,"tags":[],"steps":[{"pwStepLine":205,"gherkinStepLine":174,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":175,"keywordType":"Action","textWithKeyword":"Quando adiciono dois produtos e avanço para a revisão do checkout","stepMatchArguments":[]},{"pwStepLine":207,"gherkinStepLine":176,"keywordType":"Outcome","textWithKeyword":"Então a revisão apresenta os dois produtos selecionados","stepMatchArguments":[]}]},
  {"pwTestLine":210,"pickleLine":178,"tags":[],"steps":[{"pwStepLine":211,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"Quando abro os detalhes da mochila e volto pelo navegador","stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Então retorno ao catálogo de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":216,"pickleLine":183,"tags":[],"steps":[{"pwStepLine":217,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":218,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"Quando encerro a sessão e tento abrir diretamente o catálogo","stepMatchArguments":[]},{"pwStepLine":219,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Então sou redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":222,"pickleLine":188,"tags":[],"steps":[{"pwStepLine":223,"gherkinStepLine":189,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":224,"gherkinStepLine":190,"keywordType":"Action","textWithKeyword":"Quando informo credenciais válidas e pressiono Enter","stepMatchArguments":[]},{"pwStepLine":225,"gherkinStepLine":191,"keywordType":"Outcome","textWithKeyword":"Então acesso a lista de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":228,"pickleLine":193,"tags":[],"steps":[{"pwStepLine":229,"gherkinStepLine":194,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":230,"gherkinStepLine":195,"keywordType":"Action","textWithKeyword":"Quando tento entrar com usuário válido e senha incorreta","stepMatchArguments":[]},{"pwStepLine":231,"gherkinStepLine":196,"keywordType":"Outcome","textWithKeyword":"Então vejo uma mensagem de erro de autenticação","stepMatchArguments":[]}]},
  {"pwTestLine":234,"pickleLine":198,"tags":[],"steps":[{"pwStepLine":235,"gherkinStepLine":199,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":236,"gherkinStepLine":200,"keywordType":"Outcome","textWithKeyword":"Então cada produto apresenta imagem, nome, descrição e preço","stepMatchArguments":[]}]},
  {"pwTestLine":239,"pickleLine":202,"tags":[],"steps":[{"pwStepLine":240,"gherkinStepLine":203,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":241,"gherkinStepLine":204,"keywordType":"Action","textWithKeyword":"Quando consulto os detalhes de cada produto","stepMatchArguments":[]},{"pwStepLine":242,"gherkinStepLine":205,"keywordType":"Outcome","textWithKeyword":"Então cada página de detalhes corresponde ao produto selecionado","stepMatchArguments":[]}]},
  {"pwTestLine":245,"pickleLine":207,"tags":[],"steps":[{"pwStepLine":246,"gherkinStepLine":208,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":247,"gherkinStepLine":209,"keywordType":"Action","textWithKeyword":"Quando adiciono todos os produtos ao carrinho","stepMatchArguments":[]},{"pwStepLine":248,"gherkinStepLine":210,"keywordType":"Outcome","textWithKeyword":"Então o carrinho contém os seis produtos do catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":251,"pickleLine":212,"tags":[],"steps":[{"pwStepLine":252,"gherkinStepLine":213,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":253,"gherkinStepLine":214,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão com a mochila e a luz de bicicleta","stepMatchArguments":[]},{"pwStepLine":254,"gherkinStepLine":215,"keywordType":"Outcome","textWithKeyword":"Então o subtotal corresponde à soma dos preços dos dois produtos","stepMatchArguments":[]}]},
  {"pwTestLine":257,"pickleLine":217,"tags":[],"steps":[{"pwStepLine":258,"gherkinStepLine":218,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":219,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão do pedido com um produto","stepMatchArguments":[]},{"pwStepLine":260,"gherkinStepLine":220,"keywordType":"Outcome","textWithKeyword":"Então vejo as informações de pagamento e envio no resumo","stepMatchArguments":[]}]},
  {"pwTestLine":263,"pickleLine":222,"tags":[],"steps":[{"pwStepLine":264,"gherkinStepLine":223,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":265,"gherkinStepLine":224,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão com a mochila e a luz de bicicleta","stepMatchArguments":[]},{"pwStepLine":266,"gherkinStepLine":225,"keywordType":"Action","textWithKeyword":"E cancelo a revisão do pedido","stepMatchArguments":[]},{"pwStepLine":267,"gherkinStepLine":226,"keywordType":"Outcome","textWithKeyword":"Então os dois produtos continuam selecionados no catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":270,"pickleLine":228,"tags":[],"steps":[{"pwStepLine":271,"gherkinStepLine":229,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":272,"gherkinStepLine":230,"keywordType":"Action","textWithKeyword":"Quando abro os detalhes do primeiro produto ordenado alfabeticamente e volto pelo navegador","stepMatchArguments":[]},{"pwStepLine":273,"gherkinStepLine":231,"keywordType":"Outcome","textWithKeyword":"Então o catálogo continua ordenado alfabeticamente","stepMatchArguments":[]}]},
  {"pwTestLine":276,"pickleLine":233,"tags":[],"steps":[{"pwStepLine":277,"gherkinStepLine":234,"keywordType":"Context","textWithKeyword":"Dado que estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":278,"gherkinStepLine":235,"keywordType":"Action","textWithKeyword":"Quando tento entrar com credenciais inválidas e fecho a mensagem de erro","stepMatchArguments":[]},{"pwStepLine":279,"gherkinStepLine":236,"keywordType":"Outcome","textWithKeyword":"Então a mensagem de erro é ocultada e permaneço na página de login","stepMatchArguments":[]}]},
  {"pwTestLine":282,"pickleLine":238,"tags":[],"steps":[{"pwStepLine":283,"gherkinStepLine":239,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":240,"keywordType":"Action","textWithKeyword":"Quando adiciono e removo a mochila pela página de detalhes","stepMatchArguments":[]},{"pwStepLine":285,"gherkinStepLine":241,"keywordType":"Outcome","textWithKeyword":"Então a mochila é removida e os detalhes permitem adicioná-la novamente","stepMatchArguments":[]}]},
  {"pwTestLine":288,"pickleLine":243,"tags":[],"steps":[{"pwStepLine":289,"gherkinStepLine":244,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":290,"gherkinStepLine":245,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila pelos detalhes e abro o carrinho","stepMatchArguments":[]},{"pwStepLine":291,"gherkinStepLine":246,"keywordType":"Outcome","textWithKeyword":"Então o carrinho mostra a mochila com quantidade um","stepMatchArguments":[]}]},
  {"pwTestLine":294,"pickleLine":248,"tags":[],"steps":[{"pwStepLine":295,"gherkinStepLine":249,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":250,"keywordType":"Action","textWithKeyword":"Quando adiciono três produtos diferentes ao carrinho","stepMatchArguments":[]},{"pwStepLine":297,"gherkinStepLine":251,"keywordType":"Outcome","textWithKeyword":"Então o contador do carrinho acompanha cada produto adicionado","stepMatchArguments":[]}]},
  {"pwTestLine":300,"pickleLine":253,"tags":[],"steps":[{"pwStepLine":301,"gherkinStepLine":254,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":302,"gherkinStepLine":255,"keywordType":"Context","textWithKeyword":"E tenho um produto no carrinho e inicio o checkout","stepMatchArguments":[]},{"pwStepLine":303,"gherkinStepLine":256,"keywordType":"Action","textWithKeyword":"Quando envio o checkout com nome e sobrenome, mas sem código postal","stepMatchArguments":[]},{"pwStepLine":304,"gherkinStepLine":257,"keywordType":"Outcome","textWithKeyword":"Então os nomes permanecem preenchidos e o erro do código postal é exibido","stepMatchArguments":[]}]},
  {"pwTestLine":307,"pickleLine":259,"tags":[],"steps":[{"pwStepLine":308,"gherkinStepLine":260,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":309,"gherkinStepLine":261,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão com a mochila e a luz de bicicleta","stepMatchArguments":[]},{"pwStepLine":310,"gherkinStepLine":262,"keywordType":"Outcome","textWithKeyword":"Então cada produto da revisão apresenta quantidade um","stepMatchArguments":[]}]},
  {"pwTestLine":313,"pickleLine":264,"tags":[],"steps":[{"pwStepLine":314,"gherkinStepLine":265,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":315,"gherkinStepLine":266,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão com a mochila e a luz de bicicleta","stepMatchArguments":[]},{"pwStepLine":316,"gherkinStepLine":267,"keywordType":"Outcome","textWithKeyword":"Então os preços da revisão correspondem aos preços do catálogo","stepMatchArguments":[]}]},
  {"pwTestLine":319,"pickleLine":269,"tags":[],"steps":[{"pwStepLine":320,"gherkinStepLine":270,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":321,"gherkinStepLine":271,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila ao carrinho e atualizo a página","stepMatchArguments":[]},{"pwStepLine":322,"gherkinStepLine":272,"keywordType":"Outcome","textWithKeyword":"Então a mochila continua no carrinho após a atualização","stepMatchArguments":[]}]},
  {"pwTestLine":325,"pickleLine":274,"tags":[],"steps":[{"pwStepLine":326,"gherkinStepLine":275,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":327,"gherkinStepLine":276,"keywordType":"Action","textWithKeyword":"Quando adiciono a mochila e abro o carrinho para conferir o preço","stepMatchArguments":[]},{"pwStepLine":328,"gherkinStepLine":277,"keywordType":"Outcome","textWithKeyword":"Então o preço da mochila no carrinho é 29,99 dólares","stepMatchArguments":[]}]},
  {"pwTestLine":331,"pickleLine":279,"tags":[],"steps":[{"pwStepLine":332,"gherkinStepLine":280,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":333,"gherkinStepLine":281,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão com a mochila e a luz de bicicleta","stepMatchArguments":[]},{"pwStepLine":334,"gherkinStepLine":282,"keywordType":"Outcome","textWithKeyword":"Então o imposto e o total correspondem aos valores dos dois produtos","stepMatchArguments":[]}]},
  {"pwTestLine":337,"pickleLine":284,"tags":[],"steps":[{"pwStepLine":338,"gherkinStepLine":285,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":339,"gherkinStepLine":286,"keywordType":"Action","textWithKeyword":"Quando avanço para a revisão com dados de envio definidos","stepMatchArguments":[]},{"pwStepLine":340,"gherkinStepLine":287,"keywordType":"Outcome","textWithKeyword":"Então o resumo exibe as informações de pagamento e entrega esperadas","stepMatchArguments":[]}]},
  {"pwTestLine":343,"pickleLine":289,"tags":[],"steps":[{"pwStepLine":344,"gherkinStepLine":290,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":345,"gherkinStepLine":291,"keywordType":"Action","textWithKeyword":"Quando encerro a sessão e tento abrir diretamente o carrinho","stepMatchArguments":[]},{"pwStepLine":346,"gherkinStepLine":292,"keywordType":"Outcome","textWithKeyword":"Então sou redirecionado para a página de login","stepMatchArguments":[]}]},
  {"pwTestLine":349,"pickleLine":294,"tags":[],"steps":[{"pwStepLine":350,"gherkinStepLine":295,"keywordType":"Context","textWithKeyword":"Dado que acesso o SauceDemo com um usuário válido","stepMatchArguments":[]},{"pwStepLine":351,"gherkinStepLine":296,"keywordType":"Action","textWithKeyword":"Quando adiciono os seis produtos ao carrinho","stepMatchArguments":[]},{"pwStepLine":352,"gherkinStepLine":297,"keywordType":"Outcome","textWithKeyword":"Então cada produto exibe a opção para removê-lo do carrinho","stepMatchArguments":[]}]},
]; // bdd-data-end