const { expect } = require('@playwright/test')
const { createBdd } = require('playwright-bdd')

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
