const { expect } = require('@playwright/test')
const { createBdd } = require('playwright-bdd')
const { SauceDemoPage } = require('../pages/SauceDemoPage')

const { Given, When, Then } = createBdd()

Given('que acesso o SauceDemo com um usuário válido', async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).toHaveURL(/inventory\.html/)
})

Then('vejo a lista de produtos disponíveis', async ({ page }) => {
  await expect(page.getByText('Products', { exact: true })).toBeVisible()
  await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible()
})

When('adiciono a mochila Sauce Labs ao carrinho', async ({ page }) => {
  const backpack = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack',
  })
  await backpack.getByRole('button', { name: 'Add to cart' }).click()
  await page.getByRole('button', { name: 'Cart, 1' }).click()
})

Then('encontro a mochila Sauce Labs no carrinho', async ({ page }) => {
  await expect(page).toHaveURL(/cart\.html/)
  await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible()
})

When('ordeno os produtos do menor para o maior preço', async ({ page }) => {
  await page.getByRole('combobox').selectOption('lohi')
})

Then('os produtos são exibidos em ordem crescente de preço', async ({ page }) => {
  const prices = await page.locator('.inventory_item_price').allTextContents()
  const numericPrices = prices.map((price) => Number(price.replace('$', '')))

  expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b))
})

When('ordeno os produtos de Z a A', async ({ page }) => {
  await page.getByRole('combobox').selectOption('za')
})

Then('os produtos são exibidos em ordem decrescente de nome', async ({ page }) => {
  const names = await page.locator('.inventory_item_name').allTextContents()

  expect(names).toEqual([...names].sort((a, b) => b.localeCompare(a)))
})

When('removo a mochila Sauce Labs do carrinho', async ({ page }) => {
  const backpack = page.locator('.cart_item').filter({
    hasText: 'Sauce Labs Backpack',
  })
  await backpack.getByRole('button', { name: 'Remove' }).click()
})

Then('o carrinho fica vazio', async ({ page }) => {
  await expect(page.locator('.cart_item')).toHaveCount(0)
})

When('continuo comprando a partir do carrinho', async ({ page }) => {
  await page.getByRole('button', { name: 'Continue Shopping' }).click()
})

Then('retorno à lista de produtos com a mochila ainda selecionada', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/)
  await expect(page.getByRole('button', { name: 'Cart, 1' })).toBeVisible()
  await expect(
    page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' })
      .getByRole('button', { name: 'Remove' }),
  ).toBeVisible()
})

Given('tenho um produto no carrinho e inicio o checkout', async ({ page }) => {
  const backpack = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack',
  })
  await backpack.getByRole('button', { name: 'Add to cart' }).click()
  await page.locator('.shopping_cart_link').click()
  await page.getByRole('button', { name: 'Checkout' }).click()
})

When('continuo o checkout sem informar o primeiro nome', async ({ page }) => {
  await page.getByRole('button', { name: 'Continue' }).click()
})

Then('vejo uma mensagem informando que o primeiro nome é obrigatório', async ({ page }) => {
  await expect(page.locator('[data-test="error"]')).toContainText('First Name is required')
})

When('preencho os dados de entrega e confirmo o pedido', async ({ page }) => {
  await page.getByPlaceholder('First Name').fill('Ada')
  await page.getByPlaceholder('Last Name').fill('Lovelace')
  await page.getByPlaceholder('Zip/Postal Code').fill('12345')
  await page.getByRole('button', { name: 'Continue' }).click()
  await page.getByRole('button', { name: 'Finish' }).click()
})

Then('vejo a confirmação de que o pedido foi concluído', async ({ page }) => {
  await expect(page.getByText('Thank you for your order!', { exact: true })).toBeVisible()
})

When('encerro minha sessão', async ({ page }) => {
  await page.getByRole('button', { name: 'Open Menu' }).click()
  await page.getByRole('button', { name: 'Logout' }).click()
})

Then('retorno à página de login', async ({ page }) => {
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
})

Given('que estou na página de login do SauceDemo', async ({ page }) => {
  await page.goto('/')
})

When('tento entrar com credenciais inválidas', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('usuario_invalido')
  await page.getByPlaceholder('Password').fill('senha_invalida')
  await page.getByRole('button', { name: 'Login' }).click()
})

Then('vejo uma mensagem de erro de autenticação', async ({ page }) => {
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match')
})

When('tento entrar com o usuário bloqueado', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('locked_out_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button', { name: 'Login' }).click()
})

Then('vejo uma mensagem informando que o usuário está bloqueado', async ({ page }) => {
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Sorry, this user has been locked out')
})

When('adiciono a mochila Sauce Labs e a luz de bicicleta ao carrinho', async ({ page }) => {
  for (const productName of ['Sauce Labs Backpack', 'Sauce Labs Bike Light']) {
    const product = page.locator('.inventory_item').filter({ hasText: productName })
    await product.getByRole('button', { name: 'Add to cart' }).click()
  }
  await page.locator('.shopping_cart_link').click()
})

Then('o carrinho indica dois produtos e contém ambos', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Cart, 2' })).toBeVisible()
  await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible()
  await expect(page.getByText('Sauce Labs Bike Light', { exact: true })).toBeVisible()
})

When('ordeno produtos alfabeticamente de A a Z', async ({ page }) => {
  await new SauceDemoPage(page).sortProducts('az')
})

Then('os produtos são exibidos em ordem crescente de nome', async ({ page }) => {
  await new SauceDemoPage(page).expectProductNamesSorted('asc')
})

When('ordeno produtos do preço mais alto para o mais baixo', async ({ page }) => {
  await new SauceDemoPage(page).sortProducts('hilo')
})

Then('os produtos são exibidos em ordem decrescente de preço', async ({ page }) => {
  await new SauceDemoPage(page).expectPricesSorted('desc')
})

Then('o catálogo apresenta seis produtos', async ({ page }) => {
  await new SauceDemoPage(page).expectProductCount(6)
})

When('abro os detalhes da mochila Sauce Labs', async ({ page }) => {
  await new SauceDemoPage(page).openBackpackDetails()
})

Then('vejo os detalhes da mochila Sauce Labs', async ({ page }) => {
  await expect(page.locator('.inventory_details_name'))
    .toHaveText('Sauce Labs Backpack')
  await expect(page.locator('.inventory_details_desc')).toBeVisible()
  await expect(page.locator('.inventory_details_price')).toBeVisible()
})

When('volto aos produtos a partir dos detalhes', async ({ page }) => {
  await new SauceDemoPage(page).returnToProducts()
})

Then('retorno ao catálogo de produtos', async ({ page }) => {
  await expect(page.locator('.inventory_item')).toHaveCount(6)
})

When('adiciono e removo a mochila diretamente no catálogo', async ({ page }) => {
  await new SauceDemoPage(page).addAndRemoveBackpackFromCatalog()
})

Then('a mochila não permanece no carrinho nem selecionada no catálogo', async ({ page }) => {
  const backpack = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack',
  })
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0)
  await expect(backpack.getByRole('button', { name: 'Add to cart' })).toBeVisible()
})

When('preencho apenas o primeiro nome no checkout', async ({ page }) => {
  await new SauceDemoPage(page).fillFirstNameAndContinue()
})

Then('vejo uma mensagem informando que o sobrenome é obrigatório', async ({ page }) => {
  await new SauceDemoPage(page).expectCheckoutError('Last Name is required')
})

When('continuo o checkout sem informar o código postal', async ({ page }) => {
  await new SauceDemoPage(page).fillNameAndContinueWithoutPostalCode()
})

Then('vejo uma mensagem informando que o código postal é obrigatório', async ({ page }) => {
  await new SauceDemoPage(page).expectCheckoutError('Postal Code is required')
})

When('preencho os dados e avanço para revisão do pedido', async ({ page }) => {
  await new SauceDemoPage(page).fillCheckoutDetailsAndContinue()
})

Then('o resumo da compra apresenta subtotal, imposto e total consistentes', async ({ page }) => {
  await new SauceDemoPage(page).expectConsistentOrderTotals()
})

Given('tenho um produto na etapa de revisão do checkout', async ({ page }) => {
  await new SauceDemoPage(page).openBackpackOrderReview()
})

When('cancelo a revisão e volto à lista de produtos', async ({ page }) => {
  await new SauceDemoPage(page).cancelOrderReview()
})

Then('a mochila permanece selecionada no catálogo', async ({ page }) => {
  const backpack = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack',
  })
  await expect(page).toHaveURL(/inventory\.html/)
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
  await expect(backpack.getByRole('button', { name: 'Remove' })).toBeVisible()
})

When('finalizo a compra e retorno à lista de produtos', async ({ page }) => {
  await new SauceDemoPage(page).completeOrderAndReturnToProducts()
})

Then('retorno ao catálogo com o carrinho vazio', async ({ page }) => {
  await new SauceDemoPage(page).expectEmptyCatalogCart()
})

When('tento entrar sem informar o nome de usuário', async ({ page }) => {
  await new SauceDemoPage(page).attemptLoginWithoutUsername()
})

Then('vejo uma mensagem informando que o nome de usuário é obrigatório', async ({ page }) => {
  await new SauceDemoPage(page).expectLoginError('Username is required')
})

When('tento entrar sem informar a senha', async ({ page }) => {
  await new SauceDemoPage(page).attemptLoginWithoutPassword()
})

Then('vejo uma mensagem informando que a senha é obrigatória', async ({ page }) => {
  await new SauceDemoPage(page).expectLoginError('Password is required')
})

Then('o campo de senha oculta os caracteres digitados', async ({ page }) => {
  await new SauceDemoPage(page).expectPasswordMasked()
})

When('abro o carrinho sem produtos', async ({ page }) => {
  await new SauceDemoPage(page).openEmptyCart()
})

Then('o carrinho está vazio e permite continuar comprando', async ({ page }) => {
  await new SauceDemoPage(page).expectEmptyCartCanContinueShopping()
})

Then('retorno à lista de produtos', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/)
  await expect(page.getByText('Products', { exact: true })).toBeVisible()
})

When('abro os detalhes da mochila e a adiciono ao carrinho', async ({ page }) => {
  await new SauceDemoPage(page).addBackpackFromDetails()
})

Then('os detalhes indicam que a mochila foi adicionada', async ({ page }) => {
  const details = page.locator('div.inventory_details')
  await expect(details).toBeVisible()
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
  await expect(details.getByRole('button', { name: 'Remove' })).toBeVisible()
})

Then('a mochila continua selecionada no catálogo', async ({ page }) => {
  await new SauceDemoPage(page).expectBackpackSelectedInCatalog()
})

When('adiciono a mochila e a luz de bicicleta e removo a mochila no carrinho', async ({ page }) => {
  await new SauceDemoPage(page).removeBackpackFromTwoItemCart()
})

Then('a luz de bicicleta permanece como único produto no carrinho', async ({ page }) => {
  await new SauceDemoPage(page).expectBikeLightIsOnlyCartItem()
})

When('adiciono a mochila e redefino o estado da loja pelo menu', async ({ page }) => {
  await new SauceDemoPage(page).resetStoreState()
})

Then('o carrinho e os produtos selecionados são redefinidos', async ({ page }) => {
  await new SauceDemoPage(page).expectStoreStateReset()
})

When('cancelo o preenchimento dos dados do checkout', async ({ page }) => {
  await new SauceDemoPage(page).cancelCheckoutInformation()
})

Then('retorno ao carrinho com a mochila Sauce Labs', async ({ page }) => {
  await expect(page).toHaveURL(/cart\.html/)
  await expect(page.locator('.cart_item').filter({
    hasText: 'Sauce Labs Backpack',
  })).toBeVisible()
})

When('abro os detalhes da mochila para conferir o preço', async ({ page }) => {
  await new SauceDemoPage(page).openBackpackDetails()
})

Then('o preço da mochila corresponde ao exibido no catálogo', async ({ page }) => {
  await new SauceDemoPage(page).expectBackpackPriceMatchesCatalog()
})

When('adiciono dois produtos e avanço para a revisão do checkout', async ({ page }) => {
  await new SauceDemoPage(page).addTwoProductsAndOpenOrderReview()
})

Then('a revisão apresenta os dois produtos selecionados', async ({ page }) => {
  await new SauceDemoPage(page).expectBothProductsInOrderReview()
})

When('abro os detalhes da mochila e volto pelo navegador', async ({ page }) => {
  await new SauceDemoPage(page).returnToCatalogWithBrowserBack()
})

When('encerro a sessão e tento abrir diretamente o catálogo', async ({ page }) => {
  await new SauceDemoPage(page).logoutAndOpenCatalogDirectly()
})

Then('sou redirecionado para a página de login', async ({ page }) => {
  await new SauceDemoPage(page).expectLoginPage()
})

When('informo credenciais válidas e pressiono Enter', async ({ page }) => {
  await new SauceDemoPage(page).loginUsingEnter()
})

Then('acesso a lista de produtos', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/)
  await expect(page.getByText('Products', { exact: true })).toBeVisible()
})

When('tento entrar com usuário válido e senha incorreta', async ({ page }) => {
  await new SauceDemoPage(page).attemptLoginWithWrongPassword()
})

Then('cada produto apresenta imagem, nome, descrição e preço', async ({ page }) => {
  await new SauceDemoPage(page).expectEveryProductHasCatalogDetails()
})

When('consulto os detalhes de cada produto', async ({ page }) => {
  await new SauceDemoPage(page).inspectEveryProductDetails()
})

Then('cada página de detalhes corresponde ao produto selecionado', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/)
  await expect(page.locator('.inventory_item')).toHaveCount(6)
})

When('adiciono todos os produtos ao carrinho', async ({ page }) => {
  await new SauceDemoPage(page).addAllProductsToCart()
})

Then('o carrinho contém os seis produtos do catálogo', async ({ page }) => {
  await expect(page).toHaveURL(/cart\.html/)
  await expect(page.locator('.cart_item')).toHaveCount(6)
})

When('avanço para a revisão com a mochila e a luz de bicicleta', async ({ page }) => {
  await new SauceDemoPage(page).openTwoProductOrderReview()
})

Then('o subtotal corresponde à soma dos preços dos dois produtos', async ({ page }) => {
  await new SauceDemoPage(page).expectTwoProductSubtotal()
})

When('avanço para a revisão do pedido com um produto', async ({ page }) => {
  await new SauceDemoPage(page).openOneProductOrderReview()
})

Then('vejo as informações de pagamento e envio no resumo', async ({ page }) => {
  await new SauceDemoPage(page).expectPaymentAndShippingInformation()
})

When('cancelo a revisão do pedido', async ({ page }) => {
  await new SauceDemoPage(page).cancelOrderReviewAndReturnToCatalog()
})

Then('os dois produtos continuam selecionados no catálogo', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/)
  await expect(page.getByRole('button', { name: 'Cart, 2' })).toBeVisible()
  for (const name of ['Sauce Labs Backpack', 'Sauce Labs Bike Light']) {
    await expect(page.locator('.inventory_item').filter({ hasText: name })
      .getByRole('button', { name: 'Remove' })).toBeVisible()
  }
})

When('abro os detalhes do primeiro produto ordenado alfabeticamente e volto pelo navegador',
  async ({ page }) => {
    const sauceDemo = new SauceDemoPage(page)
    await sauceDemo.sortAlphabeticallyAndOpenFirstProduct()
    await sauceDemo.returnToAlphabeticallySortedCatalogWithBrowserBack()
  })

Then('o catálogo continua ordenado alfabeticamente', async ({ page }) => {
  await expect(page.getByRole('combobox')).toHaveValue('az')
  await new SauceDemoPage(page).expectProductNamesSorted('asc')
})

When('tento entrar com credenciais inválidas e fecho a mensagem de erro', async ({ page }) => {
  await new SauceDemoPage(page).attemptLoginWithInvalidCredentialsAndDismissError()
})

Then('a mensagem de erro é ocultada e permaneço na página de login', async ({ page }) => {
  await new SauceDemoPage(page).expectLoginErrorDismissed()
  await expect(page).toHaveURL('/')
})

When('adiciono e removo a mochila pela página de detalhes', async ({ page }) => {
  await new SauceDemoPage(page).addAndRemoveBackpackOnDetails()
})

Then('a mochila é removida e os detalhes permitem adicioná-la novamente', async ({ page }) => {
  await new SauceDemoPage(page).expectBackpackRemovedOnDetails()
})

When('adiciono a mochila pelos detalhes e abro o carrinho', async ({ page }) => {
  await new SauceDemoPage(page).addBackpackOnDetailsAndOpenCart()
})

Then('o carrinho mostra a mochila com quantidade um', async ({ page }) => {
  await new SauceDemoPage(page).expectBackpackCartQuantityOne()
})

When('adiciono três produtos diferentes ao carrinho', async ({ page }) => {
  await new SauceDemoPage(page).addThreeProductsAndCheckBadge()
})

Then('o contador do carrinho acompanha cada produto adicionado', async ({ page }) => {
  await expect(page.locator('.shopping_cart_badge')).toHaveText('3')
})

When('envio o checkout com nome e sobrenome, mas sem código postal', async ({ page }) => {
  await new SauceDemoPage(page).submitCheckoutWithoutPostalCode()
})

Then('os nomes permanecem preenchidos e o erro do código postal é exibido', async ({ page }) => {
  await new SauceDemoPage(page).expectCheckoutNamesPreservedAndPostalError()
})

Then('cada produto da revisão apresenta quantidade um', async ({ page }) => {
  await new SauceDemoPage(page).expectEachReviewItemQuantityOne()
})

Then('os preços da revisão correspondem aos preços do catálogo', async ({ page }) => {
  await new SauceDemoPage(page).expectReviewPricesMatchCatalog()
})
