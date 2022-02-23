/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

    //within é uma callback que cria um escopo dentro do elemento anterior */
    cy.get('.slick-slider').within(() => {
      // aqui procuro dentro do .slick-slider se há algum <a> com buy now
      cy.findByRole('link', { name: /buy now/i})
      // procurando headings com cyperpunk dentro do .slick-slider
      cy.findAllByRole('heading', { name: /cyberpunk/i})
    })
  });
});
