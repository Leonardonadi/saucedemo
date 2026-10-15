# language: pt

Funcionalidade: Compra de produtos no SauceDemo
  Usuários podem acessar a loja e conferir os produtos selecionados no carrinho.

  Cenário: Entrar na loja e consultar os produtos
    Dado que acesso o SauceDemo com um usuário válido
    Então vejo a lista de produtos disponíveis

  Cenário: Adicionar um produto ao carrinho
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila Sauce Labs ao carrinho
    Então encontro a mochila Sauce Labs no carrinho

  Cenário: Ordenar produtos por preço crescente
    Dado que acesso o SauceDemo com um usuário válido
    Quando ordeno os produtos do menor para o maior preço
    Então os produtos são exibidos em ordem crescente de preço

  Cenário: Ordenar produtos por nome decrescente
    Dado que acesso o SauceDemo com um usuário válido
    Quando ordeno os produtos de Z a A
    Então os produtos são exibidos em ordem decrescente de nome

  Cenário: Remover um produto do carrinho
    Dado que acesso o SauceDemo com um usuário válido
    E adiciono a mochila Sauce Labs ao carrinho
    Quando removo a mochila Sauce Labs do carrinho
    Então o carrinho fica vazio

  Cenário: Continuar comprando sem perder os produtos selecionados
    Dado que acesso o SauceDemo com um usuário válido
    E adiciono a mochila Sauce Labs ao carrinho
    Quando continuo comprando a partir do carrinho
    Então retorno à lista de produtos com a mochila ainda selecionada

  Cenário: Validar checkout sem o primeiro nome
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando continuo o checkout sem informar o primeiro nome
    Então vejo uma mensagem informando que o primeiro nome é obrigatório

  Cenário: Finalizar uma compra com sucesso
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando preencho os dados de entrega e confirmo o pedido
    Então vejo a confirmação de que o pedido foi concluído

  Cenário: Encerrar a sessão da loja
    Dado que acesso o SauceDemo com um usuário válido
    Quando encerro minha sessão
    Então retorno à página de login

  Cenário: Exibir erro para credenciais inválidas
    Dado que estou na página de login do SauceDemo
    Quando tento entrar com credenciais inválidas
    Então vejo uma mensagem de erro de autenticação

  Cenário: Impedir o acesso de um usuário bloqueado
    Dado que estou na página de login do SauceDemo
    Quando tento entrar com o usuário bloqueado
    Então vejo uma mensagem informando que o usuário está bloqueado

  Cenário: Atualizar o carrinho ao adicionar dois produtos
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila Sauce Labs e a luz de bicicleta ao carrinho
    Então o carrinho indica dois produtos e contém ambos
