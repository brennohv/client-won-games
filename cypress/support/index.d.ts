// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
  games?: boolean
}

type DataCyAtributes = {
  selector: string
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


  }
}
