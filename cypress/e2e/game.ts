/// <reference path="../support/index.d.ts" />

describe('Game', () => {
  it('should render game page', () => {
    cy.visit('/game/cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: 'Cyberpunk 2077'}).should('exist')
      cy.findByText('€40.19').should('exist')
      cy.findByText(/^Cyberpunk 2077 is an open-world,/i).should('exist')
      cy.findByRole('button', { name: /add to cart/i}).should('exist')
    })

    // Gallery
    cy.findAllByRole('button', { name: /Thumb/i}).should('have.length.gt', 0)

    // Content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    }).children().should('have.length.at.least', 2)
  });
});
