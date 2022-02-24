/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

    // within é uma callback que cria um escopo dentro do elemento anterior */
    cy.get('.slick-slider').within(() => {
      // aqui procuro dentro do .slick-slider se há algum <a> com buy now
      cy.findByRole('link', { name: /buy now/i})
      // procurando headings com cyperpunk dentro do .slick-slider
      cy.findAllByRole('heading', { name: /cyberpunk/i})
      // procurando o button de trocar o banner e clicando nele
      cy.get('.slick-dots > :nth-child(2) > button').click()
      // esperando o tempo que leva a mudança do banner em milisegundos
      cy.wait(500)
      cy.findByRole('link', { name: /buy now/i})
      cy.findAllByRole('heading', { name: /the witcher/i})

      cy.get('.slick-dots > :nth-child(3) > button').click()

      cy.findByRole('link', { name: /buy now/i})
      cy.findAllByRole('heading', { name: /tomb raider/i})
    })
  });
});
