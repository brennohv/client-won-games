/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it.skip('should go to go Google', () => {
    cy.google()
  })

  it('should visit url, then change dark or ligth theme', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  });
})
