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

  Cenário: Ordenar produtos por nome crescente
    Dado que acesso o SauceDemo com um usuário válido
    Quando ordeno produtos alfabeticamente de A a Z
    Então os produtos são exibidos em ordem crescente de nome

  Cenário: Ordenar produtos por preço decrescente
    Dado que acesso o SauceDemo com um usuário válido
    Quando ordeno produtos do preço mais alto para o mais baixo
    Então os produtos são exibidos em ordem decrescente de preço

  Cenário: Exibir todos os produtos do catálogo
    Dado que acesso o SauceDemo com um usuário válido
    Então o catálogo apresenta seis produtos

  Cenário: Consultar os detalhes de um produto
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes da mochila Sauce Labs
    Então vejo os detalhes da mochila Sauce Labs
    Quando volto aos produtos a partir dos detalhes
    Então retorno ao catálogo de produtos

  Cenário: Remover um produto diretamente do catálogo
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono e removo a mochila diretamente no catálogo
    Então a mochila não permanece no carrinho nem selecionada no catálogo

  Cenário: Validar checkout sem o sobrenome
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando preencho apenas o primeiro nome no checkout
    Então vejo uma mensagem informando que o sobrenome é obrigatório

  Cenário: Validar checkout sem o código postal
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando continuo o checkout sem informar o código postal
    Então vejo uma mensagem informando que o código postal é obrigatório

  Cenário: Conferir os valores do resumo da compra
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando preencho os dados e avanço para revisão do pedido
    Então o resumo da compra apresenta subtotal, imposto e total consistentes

  Cenário: Cancelar a revisão do pedido e manter o produto selecionado
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto na etapa de revisão do checkout
    Quando cancelo a revisão e volto à lista de produtos
    Então a mochila permanece selecionada no catálogo

  Cenário: Voltar ao catálogo depois de concluir a compra
    Dado que acesso o SauceDemo com um usuário válido
    Quando finalizo a compra e retorno à lista de produtos
    Então retorno ao catálogo com o carrinho vazio

  Cenário: Exibir erro ao tentar entrar sem nome de usuário
    Dado que estou na página de login do SauceDemo
    Quando tento entrar sem informar o nome de usuário
    Então vejo uma mensagem informando que o nome de usuário é obrigatório

  Cenário: Exibir erro ao tentar entrar sem senha
    Dado que estou na página de login do SauceDemo
    Quando tento entrar sem informar a senha
    Então vejo uma mensagem informando que a senha é obrigatória

  Cenário: Mascarar a senha na página de login
    Dado que estou na página de login do SauceDemo
    Então o campo de senha oculta os caracteres digitados

  Cenário: Retornar à loja a partir do carrinho vazio
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro o carrinho sem produtos
    Então o carrinho está vazio e permite continuar comprando
    Quando continuo comprando a partir do carrinho
    Então retorno à lista de produtos

  Cenário: Adicionar um produto ao carrinho a partir dos detalhes
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes da mochila e a adiciono ao carrinho
    Então os detalhes indicam que a mochila foi adicionada
    Quando volto aos produtos a partir dos detalhes
    Então a mochila continua selecionada no catálogo

  Cenário: Remover um produto e manter o outro no carrinho
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila e a luz de bicicleta e removo a mochila no carrinho
    Então a luz de bicicleta permanece como único produto no carrinho

  Cenário: Redefinir o estado da loja e esvaziar o carrinho
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila e redefino o estado da loja pelo menu
    Então o carrinho e os produtos selecionados são redefinidos

  Cenário: Cancelar o preenchimento do checkout e manter o produto no carrinho
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando cancelo o preenchimento dos dados do checkout
    Então retorno ao carrinho com a mochila Sauce Labs

  Cenário: Conferir que o preço do produto é igual nos detalhes e no catálogo
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes da mochila para conferir o preço
    Então o preço da mochila corresponde ao exibido no catálogo

  Cenário: Conferir os dois produtos na revisão do pedido
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono dois produtos e avanço para a revisão do checkout
    Então a revisão apresenta os dois produtos selecionados

  Cenário: Voltar ao catálogo usando a navegação do navegador
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes da mochila e volto pelo navegador
    Então retorno ao catálogo de produtos

  Cenário: Bloquear o acesso ao catálogo após encerrar a sessão
    Dado que acesso o SauceDemo com um usuário válido
    Quando encerro a sessão e tento abrir diretamente o catálogo
    Então sou redirecionado para a página de login

  Cenário: Entrar na loja pressionando Enter
    Dado que estou na página de login do SauceDemo
    Quando informo credenciais válidas e pressiono Enter
    Então acesso a lista de produtos

  Cenário: Exibir erro ao usar senha incorreta com usuário válido
    Dado que estou na página de login do SauceDemo
    Quando tento entrar com usuário válido e senha incorreta
    Então vejo uma mensagem de erro de autenticação

  Cenário: Conferir os dados de cada produto no catálogo
    Dado que acesso o SauceDemo com um usuário válido
    Então cada produto apresenta imagem, nome, descrição e preço

  Cenário: Conferir os detalhes de todos os produtos
    Dado que acesso o SauceDemo com um usuário válido
    Quando consulto os detalhes de cada produto
    Então cada página de detalhes corresponde ao produto selecionado

  Cenário: Adicionar todos os produtos ao carrinho
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono todos os produtos ao carrinho
    Então o carrinho contém os seis produtos do catálogo

  Cenário: Conferir o subtotal de dois produtos na revisão
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com a mochila e a luz de bicicleta
    Então o subtotal corresponde à soma dos preços dos dois produtos

  Cenário: Conferir as informações de pagamento e envio na revisão
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão do pedido com um produto
    Então vejo as informações de pagamento e envio no resumo

  Cenário: Cancelar a revisão e manter dois produtos selecionados
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com a mochila e a luz de bicicleta
    E cancelo a revisão do pedido
    Então os dois produtos continuam selecionados no catálogo

  Cenário: Manter a ordenação ao voltar dos detalhes pelo navegador
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes do primeiro produto ordenado alfabeticamente e volto pelo navegador
    Então o catálogo continua ordenado alfabeticamente

  Cenário: Fechar a mensagem de erro de login
    Dado que estou na página de login do SauceDemo
    Quando tento entrar com credenciais inválidas e fecho a mensagem de erro
    Então a mensagem de erro é ocultada e permaneço na página de login

  Cenário: Remover um produto do carrinho pela página de detalhes
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono e removo a mochila pela página de detalhes
    Então a mochila é removida e os detalhes permitem adicioná-la novamente

  Cenário: Abrir o carrinho diretamente dos detalhes do produto
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila pelos detalhes e abro o carrinho
    Então o carrinho mostra a mochila com quantidade um

  Cenário: Atualizar o contador a cada produto adicionado
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono três produtos diferentes ao carrinho
    Então o contador do carrinho acompanha cada produto adicionado

  Cenário: Manter os dados do checkout após erro de validação
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando envio o checkout com nome e sobrenome, mas sem código postal
    Então os nomes permanecem preenchidos e o erro do código postal é exibido

  Cenário: Conferir a quantidade de cada produto na revisão do checkout
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com a mochila e a luz de bicicleta
    Então cada produto da revisão apresenta quantidade um

  Cenário: Conferir os preços dos produtos na revisão do checkout
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com a mochila e a luz de bicicleta
    Então os preços da revisão correspondem aos preços do catálogo

  Cenário: Manter o produto no carrinho após atualizar a página
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila ao carrinho e atualizo a página
    Então a mochila continua no carrinho após a atualização

  Cenário: Conferir o preço do produto no carrinho
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila e abro o carrinho para conferir o preço
    Então o preço da mochila no carrinho é 29,99 dólares

  Cenário: Conferir o cálculo do imposto para dois produtos
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com a mochila e a luz de bicicleta
    Então o imposto e o total correspondem aos valores dos dois produtos

  Cenário: Conferir os valores de envio informados no resumo
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com dados de envio definidos
    Então o resumo exibe as informações de pagamento e entrega esperadas

  Cenário: Bloquear o acesso ao carrinho após encerrar a sessão
    Dado que acesso o SauceDemo com um usuário válido
    Quando encerro a sessão e tento abrir diretamente o carrinho
    Então sou redirecionado para a página de login

  Cenário: Atualizar o estado dos botões dos seis produtos ao adicioná-los
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono os seis produtos ao carrinho
    Então cada produto exibe a opção para removê-lo do carrinho

  Cenário: Exibir o catálogo inicialmente em ordem alfabética
    Dado que acesso o SauceDemo com um usuário válido
    Então o catálogo inicia ordenado alfabeticamente

  Cenário: Abrir os detalhes de um produto pela imagem
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes da mochila pela imagem
    Então vejo os detalhes da mochila Sauce Labs

  Cenário: Impedir duplicidade ao adicionar a mochila
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila e verifico a ação disponível
    Então o carrinho contém apenas uma mochila

  Cenário: Manter o produto selecionado ao alterar a ordenação
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila e ordeno os produtos por preço decrescente
    Então a mochila permanece selecionada após a ordenação

  Cenário: Atualizar o contador ao remover um produto de três
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono três produtos e removo a luz de bicicleta no carrinho
    Então o carrinho indica dois produtos restantes

  Cenário: Voltar do carrinho aos detalhes do produto pelo navegador
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes da mochila a partir do carrinho
    E volto ao carrinho pelo navegador
    Então a mochila continua no carrinho

  Cenário: Voltar do carrinho ao catálogo pelo navegador
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro o carrinho com a mochila e volto pelo navegador
    Então a mochila continua selecionada no catálogo

  Cenário: Recuperar o acesso após fechar um erro de login
    Dado que estou na página de login do SauceDemo
    Quando fecho o erro de login e entro com credenciais válidas
    Então acesso a lista de produtos

  Cenário: Corrigir o código postal após fechar o erro do checkout
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando fecho o erro de código postal e informo um código válido
    Então avanço para a revisão com a mochila no pedido

  Cenário: Retomar o checkout após cancelar o preenchimento
    Dado que acesso o SauceDemo com um usuário válido
    E tenho um produto no carrinho e inicio o checkout
    Quando cancelo o preenchimento e inicio o checkout novamente
    Então o checkout é reaberto com a mochila no carrinho

  Esquema do Cenário: Entrar com cada conta de demonstração válida
    Dado que estou na página de login do SauceDemo
    Quando entro com a conta "<usuario>"
    Então acesso a lista de produtos
    E o catálogo apresenta seis produtos

    Exemplos:
      | usuario                 |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             |

  Esquema do Cenário: Adicionar cada produto individualmente ao carrinho
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono "<produto>" ao carrinho
    Então o carrinho contém apenas "<produto>"

    Exemplos:
      | produto                        |
      | Sauce Labs Backpack            |
      | Sauce Labs Bike Light          |
      | Sauce Labs Bolt T-Shirt         |
      | Sauce Labs Fleece Jacket       |
      | Sauce Labs Onesie               |
      | Test.allTheThings() T-Shirt (Red) |

  Esquema do Cenário: Consultar os detalhes de cada produto individualmente
    Dado que acesso o SauceDemo com um usuário válido
    Quando abro os detalhes de "<produto>"
    Então os detalhes apresentam nome, imagem, descrição e preço de "<produto>"

    Exemplos:
      | produto                        |
      | Sauce Labs Backpack            |
      | Sauce Labs Bike Light          |
      | Sauce Labs Bolt T-Shirt         |
      | Sauce Labs Fleece Jacket       |
      | Sauce Labs Onesie               |
      | Test.allTheThings() T-Shirt (Red) |

  Esquema do Cenário: Conferir o cálculo do checkout para cada produto
    Dado que acesso o SauceDemo com um usuário válido
    Quando avanço para a revisão com "<produto>"
    Então o subtotal, imposto e total correspondem a "<produto>"

    Exemplos:
      | produto                        |
      | Sauce Labs Backpack            |
      | Sauce Labs Bike Light          |
      | Sauce Labs Bolt T-Shirt         |
      | Sauce Labs Fleece Jacket       |
      | Sauce Labs Onesie               |
      | Test.allTheThings() T-Shirt (Red) |

  Esquema do Cenário: Remover cada produto do catálogo
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono e removo "<produto>" no catálogo
    Então "<produto>" volta a oferecer a opção de adicionar

    Exemplos:
      | produto                        |
      | Sauce Labs Backpack            |
      | Sauce Labs Bike Light          |
      | Sauce Labs Bolt T-Shirt         |
      | Sauce Labs Fleece Jacket       |
      | Sauce Labs Onesie               |
      | Test.allTheThings() T-Shirt (Red) |

  Esquema do Cenário: Manter o produto no carrinho para cada ordenação
    Dado que acesso o SauceDemo com um usuário válido
    Quando adiciono a mochila e aplico a ordenação "<opcao>"
    Então o catálogo fica ordenado por "<opcao>" e a mochila permanece selecionada

    Exemplos:
      | opcao |
      | az    |
      | za    |
      | lohi  |
      | hilo  |

  Cenário: Finalizar a compra da luz de bicicleta
    Dado que acesso o SauceDemo com um usuário válido
    Quando finalizo a compra da luz de bicicleta
    Então a compra é confirmada e o carrinho fica vazio
