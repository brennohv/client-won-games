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

    // GameDetails
    cy.getByDataCy('game-detail').within(() => {
      cy.findByRole('heading', {name: /game deatails/i}).should('exist')
      cy.findByRole('heading', {name: /Developer/i}).should('exist')
      cy.findByRole('heading', {name: /Editor/i}).should('exist')
      cy.findByRole('heading', {name: /Rating/i}).should('exist')
      cy.findByRole('heading', {name: /Realease date/i}).should('exist')
      cy.findByRole('heading', {name: /Platforms/i}).should('exist')
      cy.findByRole('heading', {name: /Genre/i}).should('exist')

      cy.findAllByText('CD PROJEKT RED').should('exist')
      cy.findByText('Dec 9, 2020').should('exist')
      cy.findByText('18+').should('exist')
      cy.findByText('Role-playing / Action / Sci-fi').should('exist')
      cy.findByLabelText('Windows').should('exist')
    })

    //Showcase
    cy.shouldRenderShowcase({name:"Upcoming", highlight: true})
    cy.shouldRenderShowcase({name:"You may like these games", games: true})
  });
});
