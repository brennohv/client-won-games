/// <reference path="../support/index.d.ts" />

describe('Game', () => {

  before(() => {
    cy.visit('/game/cyberpunk-2077')
  })

  it.skip('should render game page', () => {
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

  it('should add/remove to cart when click', () => {
    // Adicionando no carrinho
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', {name: /add to cart/i}).click()
      cy.findByRole('button', {name : /remove from cart/i}).should('exist')
    })

    // Abrindo Cart-list
    cy
      .findAllByRole('button', {name: /cart items/i})
      .first()
      .should('have.text', 1)
      .click()

    // Verificando se há o jogo no carrinho
    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', {name: /Cyberpunk 2077/i}).should('exist')
      cy.findByRole('button', {name: /Remove/i}).should('exist')
      cy.findByRole('heading', {name: /You do not have games on cart/i}).should('not.exist')
    })

    // Fechando Cart-list
    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    // Removendo do carrinho
    cy.findByRole('button', {name: /remove from cart/i}).click()

    cy.findByRole('button', {name: /add to cart/i}).should('exist')
  });
});
