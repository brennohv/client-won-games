/// <reference path="../support/index.d.ts" />
import { priceFields, categoriesField, platformsFields, sortFields } from '../../src/utils/filter/fields'

describe('Games Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render fields and headings in games page', () => {
    // Headings
    cy.findByRole('heading', {name: /Sort by price/i}).should('exist')
    cy.findByRole('heading', {name: /^Price/i}).should('exist')
    cy.findByRole('heading', {name: /Platforms/i}).should('exist')
    cy.findByRole('heading', {name: /Genres/i}).should('exist')

    // Fields
    cy.getFields(priceFields)
    cy.getFields(categoriesField)
    cy.getFields(platformsFields)
    cy.getFields(sortFields)
  });

  it('should render fifteen games and show more games when show more is clicked', () => {
    cy.getByDataCy('games').should('have.length', 15)
    cy.findByRole('button', {name: /show more/i})
      .should('exist')
      .click()
    cy.getByDataCy('games').should('have.length', 30)
  });
});
