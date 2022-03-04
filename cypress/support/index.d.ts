// load type definitions from Cypress module
/// <reference types="cypress" />

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
  }
}
