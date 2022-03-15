// load type definitions from Cypress module
/// <reference types="cypress" />

type Users = {
  username: string
  email: string
  password: string
}

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
  games?: boolean
}

type DataCyAttributes = {
  selector: string
}

type GetFieldsAttributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
      */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
     * Custom command to add game to cart
     * @example cy.addToCart('0')
     */
    addToCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command to add game to wishlist
     * @example cy.addToWishlistByIndex('0')
     */
     addToWishlistByIndex(index: number): Chainable<Element>

    /**
     * Custom command to remove game from cart
     * @example cy.removeToCart('0')
     */
    removeFromCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command to remove game from wishlist
     * @example
     *  cy.removeFromWishlistByIndex(1, 3)
     *  cy.getByDataCy('wishlist').within(() => {
     *     cy.getByDataCy('games').eq(1).should('have.length', 3).within(() => {
     *      cy.findByLabelText('Remove from Wishlist').click()
           })
        })
     *
     */
    removeFromWishlistByIndex(index: number, QuantityInWishlist: number): Chainable<Element>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
     getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to sign-up rand()
     * @example cy.createUser(user: {
     *  username:
     *  email:
     *  password:
     * })
     */
    createUser(user: Users): Chainable<Element>

    /**
     * Custom command to sign-in(`user?`).
     *
     * `Default:*`
     *
     *  email: e2e@wongames.com,
     *
     *  password: 123456,
     *
     *  username: e2eTeste
     * @example cy.signIn(user?: {username:, email:, password: })
     */
    signIn(user?: Users): Chainable<Element>

    /**
     * Custom command to render banner elements
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to do map in fields
     * @example cy.getFields([
          { label: 'Lowest to highest', name: 'price:asc' },
          { label: 'Highest to lowest', name: 'price:desc' }
      ])
     */
    getFields(fields: GetFieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to check price greatherthan
     * @example cy.shouldBeGreatherThan(number, label) => {
     *   cy.findByLabelText(label).should('be.gt', value)
     * }
     */
    shouldBeGreaterThan(value: number, label: string): Chainable<Element>

    /**
     * Custom command to check price lessthan
     * @example cy.shouldBelessThan(number, label) => {
     *  cy.findByLabelText(label).should('be.lt', value)
     * }
     */
    shouldBeLessThan(value: number, label: string): Chainable<Element>

    /**
     * Custom command to check price lessthan
     * @example cy.shouldBeEqualFree( label) => {
     *  cy.findByLabelText(label).should( 'have.text', 'FREE' )
     * }
     */
    shouldBeEqualFree(label: string): Chainable<Element>
  }
}
