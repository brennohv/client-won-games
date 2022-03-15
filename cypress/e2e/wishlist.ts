/// <reference path="../support/index.d.ts" />

describe('wishlist', () => {
  it('should redirect to sign-in page when access wishlist without logged in', () => {
    //Acessar a pagina sem estar logado
    cy.visit('/wishlist')

    // Verificando se foi redirecionado para a pagina de sign-in
    cy.location('href').should('contain', 'sign-in?callbackUrl=/wishlist')

    //Fazendo o sign-in
    cy.signIn()

    //Verificando a Url
    cy.url().should('eq', `${Cypress.config().baseUrl}/wishlist`)

    // Nao deve ter jogos
    cy.findByRole('heading', { name: /nenhum resultado encontrado/i })

    //Adicionando o jogo no wishlist
    // cy.getByDataCy('You may like these games').within(() => {
    // })

    cy.addToWishlistByIndex(0)

    // Removendo do Wishlist
    cy.removeFromWishlistByIndex(0, 1)

    //Verificando se nao há jogos na wishlist
    cy.getByDataCy('wishlist').should('not.exist')
  });
});



