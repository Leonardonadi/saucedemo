const { expect } = require('@playwright/test')

class SauceDemoPage {
  constructor(page) {
    this.page = page
  }

  async sortProducts(option) {
    await this.page.getByRole('combobox').selectOption(option)
  }

  async expectProductNamesSorted(direction) {
    const names = await this.page.locator('.inventory_item_name').allTextContents()
    const sortedNames = [...names].sort((a, b) => a.localeCompare(b))
    if (direction === 'desc') sortedNames.reverse()
    expect(names).toEqual(sortedNames)
  }

  async expectPricesSorted(direction) {
    const prices = await this.page.locator('.inventory_item_price').allTextContents()
    const amounts = prices.map((price) => Number(price.replace('$', '')))
    const sortedAmounts = [...amounts].sort((a, b) => a - b)
    if (direction === 'desc') sortedAmounts.reverse()
    expect(amounts).toEqual(sortedAmounts)
  }

  async expectProductCount(count) {
    await expect(this.page.locator('.inventory_item')).toHaveCount(count)
  }

  async openBackpackDetails() {
    await this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).getByText('Sauce Labs Backpack', { exact: true }).click()
    await expect(this.page).toHaveURL(/inventory-item\.html/)
    await expect(this.page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible()
  }

  async returnToProducts() {
    await this.page.getByRole('button', { name: 'Back to products' }).click()
    await expect(this.page).toHaveURL(/inventory\.html/)
    await expect(this.page.getByText('Products', { exact: true })).toBeVisible()
  }

  async addAndRemoveBackpackFromCatalog() {
    const backpack = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await backpack.getByRole('button', { name: 'Add to cart' }).click()
    await backpack.getByRole('button', { name: 'Remove' }).click()
    await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0)
    await expect(backpack.getByRole('button', { name: 'Add to cart' })).toBeVisible()
  }

  async fillFirstNameAndContinue() {
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByRole('button', { name: 'Continue' }).click()
  }

  async fillNameAndContinueWithoutPostalCode() {
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByRole('button', { name: 'Continue' }).click()
  }

  async expectCheckoutError(message) {
    await expect(this.page.locator('[data-test="error"]')).toContainText(message)
  }

  async fillCheckoutDetailsAndContinue() {
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await this.page.getByRole('button', { name: 'Continue' }).click()
    await expect(this.page).toHaveURL(/checkout-step-two\.html/)
  }

  async expectConsistentOrderTotals() {
    const subtotalText = await this.page.locator('.summary_subtotal_label').textContent()
    const taxText = await this.page.locator('.summary_tax_label').textContent()
    const totalText = await this.page.locator('.summary_total_label').textContent()
    const amount = (text) => Number(text.match(/\$([\d.]+)/)[1])
    const subtotal = amount(subtotalText)
    const tax = amount(taxText)
    const total = amount(totalText)

    expect(Math.round((subtotal + tax) * 100)).toBe(Math.round(total * 100))
  }

  async openBackpackOrderReview() {
    await this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).getByRole('button', { name: 'Add to cart' }).click()
    await this.page.locator('.shopping_cart_link').click()
    await this.page.getByRole('button', { name: 'Checkout' }).click()
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await this.page.getByRole('button', { name: 'Continue' }).click()
    await expect(this.page).toHaveURL(/checkout-step-two\.html/)
  }

  async cancelOrderReview() {
    await this.page.getByRole('button', { name: 'Cancel' }).click()
    await expect(this.page).toHaveURL(/inventory\.html/)
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1')
    await expect(this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).getByRole('button', { name: 'Remove' })).toBeVisible()
  }

  async completeOrderAndReturnToProducts() {
    await this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).getByRole('button', { name: 'Add to cart' }).click()
    await this.page.locator('.shopping_cart_link').click()
    await this.page.getByRole('button', { name: 'Checkout' }).click()
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await this.page.getByRole('button', { name: 'Continue' }).click()
    await this.page.getByRole('button', { name: 'Finish' }).click()
    await expect(this.page.getByText('Thank you for your order!', { exact: true })).toBeVisible()
    await this.page.getByRole('button', { name: 'Back Home' }).click()
  }

  async expectEmptyCatalogCart() {
    await expect(this.page).toHaveURL(/inventory\.html/)
    await expect(this.page.getByText('Products', { exact: true })).toBeVisible()
    await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0)
  }

  async attemptLoginWithoutUsername() {
    await this.page.getByPlaceholder('Password').fill('secret_sauce')
    await this.page.getByRole('button', { name: 'Login' }).click()
  }

  async attemptLoginWithoutPassword() {
    await this.page.getByPlaceholder('Username').fill('standard_user')
    await this.page.getByRole('button', { name: 'Login' }).click()
  }

  async expectLoginError(message) {
    await expect(this.page.locator('[data-test="error"]')).toContainText(message)
  }

  async expectPasswordMasked() {
    await expect(this.page.getByPlaceholder('Password')).toHaveAttribute('type', 'password')
  }

  async openEmptyCart() {
    await this.page.locator('.shopping_cart_link').click()
    await expect(this.page).toHaveURL(/cart\.html/)
    await expect(this.page.locator('.cart_item')).toHaveCount(0)
  }

  async expectEmptyCartCanContinueShopping() {
    await expect(this.page.locator('.cart_item')).toHaveCount(0)
    await expect(this.page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible()
  }

  async addBackpackFromDetails() {
    await this.openBackpackDetails()
    const details = this.page.locator('div.inventory_details')
    await expect(details).toBeVisible()
    await details.getByRole('button', { name: 'Add to cart' }).click()
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1')
    await expect(details.getByRole('button', { name: 'Remove' })).toBeVisible()
  }

  async expectBackpackSelectedInCatalog() {
    const backpack = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1')
    await expect(backpack.getByRole('button', { name: 'Remove' })).toBeVisible()
  }

  async removeBackpackFromTwoItemCart() {
    for (const name of ['Sauce Labs Backpack', 'Sauce Labs Bike Light']) {
      const product = this.page.locator('.inventory_item').filter({ hasText: name })
      await product.getByRole('button', { name: 'Add to cart' }).click()
    }
    await this.page.locator('.shopping_cart_link').click()
    const backpack = this.page.locator('.cart_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await backpack.getByRole('button', { name: 'Remove' }).click()
  }

  async expectBikeLightIsOnlyCartItem() {
    await expect(this.page.locator('.cart_item')).toHaveCount(1)
    await expect(this.page.locator('.cart_item').getByText('Sauce Labs Bike Light', {
      exact: true,
    })).toBeVisible()
    await expect(this.page.getByText('Sauce Labs Backpack', { exact: true })).toHaveCount(0)
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1')
  }

  async resetStoreState() {
    const backpack = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await backpack.getByRole('button', { name: 'Add to cart' }).click()
    await this.page.getByRole('button', { name: 'Open Menu' }).click()
    await this.page.getByRole('button', { name: 'Reset App State' }).click()
    await this.page.getByRole('button', { name: 'Close Menu' }).click()
  }

  async expectStoreStateReset() {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0)
    await this.page.reload()
    await expect(this.page).toHaveURL(/inventory\.html/)
    await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0)
    await expect(this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).getByRole('button', { name: 'Add to cart' })).toBeVisible()
  }

  async cancelCheckoutInformation() {
    await this.page.getByRole('button', { name: 'Cancel' }).click()
    await expect(this.page).toHaveURL(/cart\.html/)
    await expect(this.page.locator('.cart_item').filter({
      hasText: 'Sauce Labs Backpack',
    })).toBeVisible()
  }

  async getBackpackCatalogPrice() {
    return this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).locator('.inventory_item_price').textContent()
  }

  async expectBackpackPriceMatchesCatalog() {
    await this.returnToProducts()
    const catalogPrice = await this.getBackpackCatalogPrice()
    await this.openBackpackDetails()
    await expect(this.page.locator('.inventory_details_price')).toHaveText(catalogPrice)
  }

  async addTwoProductsAndOpenOrderReview() {
    for (const name of ['Sauce Labs Backpack', 'Sauce Labs Bike Light']) {
      const product = this.page.locator('.inventory_item').filter({ hasText: name })
      await product.getByRole('button', { name: 'Add to cart' }).click()
    }
    await this.page.locator('.shopping_cart_link').click()
    await this.page.getByRole('button', { name: 'Checkout' }).click()
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await this.page.getByRole('button', { name: 'Continue' }).click()
    await expect(this.page).toHaveURL(/checkout-step-two\.html/)
  }

  async expectBothProductsInOrderReview() {
    await expect(this.page.locator('.cart_item')).toHaveCount(2)
    await expect(this.page.locator('.cart_item').getByText('Sauce Labs Backpack', {
      exact: true,
    })).toBeVisible()
    await expect(this.page.locator('.cart_item').getByText('Sauce Labs Bike Light', {
      exact: true,
    })).toBeVisible()
  }

  async returnToCatalogWithBrowserBack() {
    await this.openBackpackDetails()
    await this.page.goBack()
    await expect(this.page).toHaveURL(/inventory\.html/)
  }

  async logoutAndOpenCatalogDirectly() {
    await this.page.getByRole('button', { name: 'Open Menu' }).click()
    await this.page.getByRole('button', { name: 'Logout' }).click()
    await this.page.goto('/inventory.html')
  }

  async expectLoginPage() {
    await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible()
    await expect(this.page).toHaveURL('/')
  }

  async loginUsingEnter() {
    await this.page.getByPlaceholder('Username').fill('standard_user')
    await this.page.getByPlaceholder('Password').fill('secret_sauce')
    await this.page.getByPlaceholder('Password').press('Enter')
    await expect(this.page).toHaveURL(/inventory\.html/)
  }

  async attemptLoginWithWrongPassword() {
    await this.page.getByPlaceholder('Username').fill('standard_user')
    await this.page.getByPlaceholder('Password').fill('senha_incorreta')
    await this.page.getByRole('button', { name: 'Login' }).click()
  }

  async expectEveryProductHasCatalogDetails() {
    const products = this.page.locator('.inventory_item')
    await expect(products).toHaveCount(6)
    for (let index = 0; index < 6; index += 1) {
      const product = products.nth(index)
      await expect(product.locator('img')).toBeVisible()
      await expect(product.locator('.inventory_item_name')).toBeVisible()
      await expect(product.locator('.inventory_item_desc')).toHaveText(/\S+/)
      await expect(product.locator('.inventory_item_price')).toBeVisible()
    }
  }

  async inspectEveryProductDetails() {
    const names = await this.page.locator('.inventory_item_name').allTextContents()
    for (const name of names) {
      const product = this.page.locator('.inventory_item').filter({ hasText: name })
      const catalogPrice = await product.locator('.inventory_item_price').textContent()
      await product.getByText(name, { exact: true }).click()
      await expect(this.page.locator('.inventory_details_name')).toHaveText(name)
      await expect(this.page.locator('.inventory_details_price')).toHaveText(catalogPrice)
      await this.returnToProducts()
    }
  }

  async addAllProductsToCart() {
    const products = this.page.locator('.inventory_item')
    const names = await this.page.locator('.inventory_item_name').allTextContents()
    for (let index = 0; index < names.length; index += 1) {
      await products.nth(index).getByRole('button', { name: 'Add to cart' }).click()
    }
    await this.page.locator('.shopping_cart_link').click()
    await expect(this.page.locator('.cart_item')).toHaveCount(names.length)
    for (const name of names) {
      await expect(this.page.locator('.cart_item').getByText(name, { exact: true }))
        .toBeVisible()
    }
  }

  async openTwoProductOrderReview() {
    for (const name of ['Sauce Labs Backpack', 'Sauce Labs Bike Light']) {
      const product = this.page.locator('.inventory_item').filter({ hasText: name })
      await product.getByRole('button', { name: 'Add to cart' }).click()
    }
    await this.page.locator('.shopping_cart_link').click()
    await this.page.getByRole('button', { name: 'Checkout' }).click()
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await this.page.getByRole('button', { name: 'Continue' }).click()
    await expect(this.page).toHaveURL(/checkout-step-two\.html/)
  }

  async expectTwoProductSubtotal() {
    const priceTexts = await this.page.locator('.cart_item .inventory_item_price').allTextContents()
    expect(priceTexts).toHaveLength(2)
    const itemPrices = priceTexts.map((price) => Number(price.replace('$', '')))
    const subtotalText = await this.page.locator('.summary_subtotal_label').textContent()
    const subtotal = Number(subtotalText.match(/\$([\d.]+)/)[1])
    expect(Math.round(subtotal * 100)).toBe(
      Math.round(itemPrices.reduce((sum, price) => sum + price, 0) * 100),
    )
  }

  async openOneProductOrderReview() {
    const product = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await product.getByRole('button', { name: 'Add to cart' }).click()
    await this.page.locator('.shopping_cart_link').click()
    await this.page.getByRole('button', { name: 'Checkout' }).click()
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await this.page.getByRole('button', { name: 'Continue' }).click()
    await expect(this.page).toHaveURL(/checkout-step-two\.html/)
  }

  async expectPaymentAndShippingInformation() {
    await expect(this.page.locator('.summary_info')).toContainText('Payment Information')
    await expect(this.page.locator('.summary_info')).toContainText('Shipping Information')
    const values = this.page.locator('.summary_value_label')
    await expect(values).toHaveCount(2)
    for (let index = 0; index < 2; index += 1) {
      await expect(values.nth(index)).toHaveText(/\S+/)
    }
  }

  async cancelOrderReviewAndReturnToCatalog() {
    await this.page.getByRole('button', { name: 'Cancel' }).click()
    await expect(this.page).toHaveURL(/inventory\.html/)
    await expect(this.page.getByRole('button', { name: 'Cart, 2' })).toBeVisible()
    for (const name of ['Sauce Labs Backpack', 'Sauce Labs Bike Light']) {
      await expect(this.page.locator('.inventory_item').filter({ hasText: name })
        .getByRole('button', { name: 'Remove' })).toBeVisible()
    }
  }

  async sortAlphabeticallyAndOpenFirstProduct() {
    await this.sortProducts('az')
    const firstName = (await this.page.locator('.inventory_item_name').first().textContent()).trim()
    const product = this.page.locator('.inventory_item').filter({ hasText: firstName })
    await product.getByText(firstName, { exact: true }).click()
    await expect(this.page.locator('.inventory_details_name')).toHaveText(firstName)
  }

  async returnToAlphabeticallySortedCatalogWithBrowserBack() {
    await this.page.goBack()
    await expect(this.page).toHaveURL(/inventory\.html/)
    await expect(this.page.getByRole('combobox')).toHaveValue('az')
    await this.expectProductNamesSorted('asc')
  }

  async attemptLoginWithInvalidCredentialsAndDismissError() {
    await this.page.getByPlaceholder('Username').fill('usuario_invalido')
    await this.page.getByPlaceholder('Password').fill('senha_invalida')
    await this.page.getByRole('button', { name: 'Login' }).click()
    await expect(this.page.locator('[data-test="error"]')).toBeVisible()
    await this.page.locator('[data-test="error-button"]').click()
  }

  async expectLoginErrorDismissed() {
    await expect(this.page.locator('[data-test="error"]')).toHaveCount(0)
    await expect(this.page.getByRole('button', { name: 'Login' })).toBeVisible()
  }

  async addAndRemoveBackpackOnDetails() {
    await this.openBackpackDetails()
    const details = this.page.locator('div.inventory_details')
    await details.getByRole('button', { name: 'Add to cart' }).click()
    await expect(details.getByRole('button', { name: 'Remove' })).toBeVisible()
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1')
    await details.getByRole('button', { name: 'Remove' }).click()
  }

  async expectBackpackRemovedOnDetails() {
    const details = this.page.locator('div.inventory_details')
    await expect(details.getByRole('button', { name: 'Add to cart' })).toBeVisible()
    await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0)
  }

  async addBackpackOnDetailsAndOpenCart() {
    await this.openBackpackDetails()
    const details = this.page.locator('div.inventory_details')
    await details.getByRole('button', { name: 'Add to cart' }).click()
    await this.page.locator('.shopping_cart_link').click()
    await expect(this.page).toHaveURL(/cart\.html/)
  }

  async expectBackpackCartQuantityOne() {
    const backpack = this.page.locator('.cart_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await expect(this.page.locator('.cart_item')).toHaveCount(1)
    await expect(backpack.locator('.cart_quantity')).toHaveText('1')
  }

  async addThreeProductsAndCheckBadge() {
    const names = [
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
    ]
    for (let index = 0; index < names.length; index += 1) {
      const product = this.page.locator('.inventory_item').filter({
        hasText: names[index],
      })
      await product.getByRole('button', { name: 'Add to cart' }).click()
      await expect(this.page.locator('.shopping_cart_badge')).toHaveText(String(index + 1))
    }
  }

  async submitCheckoutWithoutPostalCode() {
    await this.page.getByPlaceholder('First Name').fill('Ada')
    await this.page.getByPlaceholder('Last Name').fill('Lovelace')
    await this.page.getByRole('button', { name: 'Continue' }).click()
  }

  async expectCheckoutNamesPreservedAndPostalError() {
    await this.expectCheckoutError('Postal Code is required')
    await expect(this.page.getByPlaceholder('First Name')).toHaveValue('Ada')
    await expect(this.page.getByPlaceholder('Last Name')).toHaveValue('Lovelace')
    await expect(this.page.getByPlaceholder('Zip/Postal Code')).toHaveValue('')
  }

  async expectEachReviewItemQuantityOne() {
    const items = this.page.locator('.cart_item')
    await expect(items).toHaveCount(2)
    for (let index = 0; index < 2; index += 1) {
      await expect(items.nth(index).locator('.cart_quantity')).toHaveText('1')
    }
  }

  async expectReviewPricesMatchCatalog() {
    const expectedPrices = new Map([
      ['Sauce Labs Backpack', '$29.99'],
      ['Sauce Labs Bike Light', '$9.99'],
    ])
    const items = this.page.locator('.cart_item')
    await expect(items).toHaveCount(expectedPrices.size)
    for (const [name, price] of expectedPrices) {
      const item = items.filter({ hasText: name })
      await expect(item.locator('.inventory_item_price')).toHaveText(price)
    }
  }

  async addBackpackAndReloadCatalog() {
    const backpack = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await backpack.getByRole('button', { name: 'Add to cart' }).click()
    await this.page.reload()
    await expect(this.page).toHaveURL(/inventory\.html/)
  }

  async expectBackpackStillInCartAfterReload() {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1')
    await expect(this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    }).getByRole('button', { name: 'Remove' })).toBeVisible()
    await this.page.locator('.shopping_cart_link').click()
    await expect(this.page.locator('.cart_item').filter({
      hasText: 'Sauce Labs Backpack',
    })).toBeVisible()
  }

  async addBackpackAndOpenCart() {
    const backpack = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await backpack.getByRole('button', { name: 'Add to cart' }).click()
    await this.page.locator('.shopping_cart_link').click()
    await expect(this.page).toHaveURL(/cart\.html/)
  }

  async expectBackpackCartPrice() {
    const backpack = this.page.locator('.cart_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await expect(backpack.locator('.inventory_item_price')).toHaveText('$29.99')
  }

  async expectTwoProductTaxAndTotal() {
    const subtotalText = await this.page.locator('.summary_subtotal_label').textContent()
    const taxText = await this.page.locator('.summary_tax_label').textContent()
    const totalText = await this.page.locator('.summary_total_label').textContent()
    const amount = (text) => Number(text.match(/\$([\d.]+)/)[1])
    const subtotal = amount(subtotalText)
    const tax = amount(taxText)
    const total = amount(totalText)
    const expectedTax = Math.round(subtotal * 0.08 * 100) / 100

    expect(subtotal).toBe(39.98)
    expect(tax).toBe(expectedTax)
    expect(total).toBe(Math.round((subtotal + expectedTax) * 100) / 100)
  }

  async openOrderReviewWithShippingDetails() {
    await this.openOneProductOrderReview()
  }

  async expectExpectedPaymentAndShippingDetails() {
    await expect(this.page.locator('.summary_value_label').nth(0))
      .toHaveText('SauceCard #31337')
    await expect(this.page.locator('.summary_value_label').nth(1))
      .toHaveText('Free Pony Express Delivery!')
  }

  async logoutAndOpenCartDirectly() {
    const backpack = this.page.locator('.inventory_item').filter({
      hasText: 'Sauce Labs Backpack',
    })
    await backpack.getByRole('button', { name: 'Add to cart' }).click()
    await this.page.getByRole('button', { name: 'Open Menu' }).click()
    await this.page.getByRole('button', { name: 'Logout' }).click()
    await this.page.goto('/cart.html')
  }

  async addAllProductsAndCheckRemoveButtons() {
    const products = this.page.locator('.inventory_item')
    const count = await products.count()
    for (let index = 0; index < count; index += 1) {
      await products.nth(index).getByRole('button', { name: 'Add to cart' }).click()
    }
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(String(count))
  }

  async expectAllProductsCanBeRemoved() {
    const products = this.page.locator('.inventory_item')
    await expect(products).toHaveCount(6)
    for (let index = 0; index < 6; index += 1) {
      await expect(products.nth(index).getByRole('button', { name: 'Remove' }))
        .toBeVisible()
    }
  }
}

module.exports = { SauceDemoPage }
