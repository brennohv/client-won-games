/// <reference path="../support/index.d.ts" />
import { priceFields, categoriesField, platformsFields, sortFields } from '../../src/utils/filter/fields'

describe('Games Page', () => {
  it('should render fields and headings in games page', () => {
    cy.visit('/games')

    // Headings
    cy.findByRole('heading', {name: /Sort by price/i}).should('exist')
    cy.findByRole('heading', {name: /^Price/i}).should('exist')
    cy.findByRole('heading', {name: /Platforms/i}).should('exist')
    cy.findByRole('heading', {name: /Genres/i}).should('exist')

    //Fields
    priceFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })
    categoriesField.map(({ label }) => {
      cy.findByText(label).should('exist')
    })
    platformsFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })
    sortFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })
  });
});
