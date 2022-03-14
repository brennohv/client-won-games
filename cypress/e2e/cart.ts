/// <reference path="../support/index.d.ts" />

import { first } from "cypress/types/lodash";

describe('Cart', () => {
  it('should add/remove game from cart', () => {
    cy.visit('/')

    // Adicionando o primeiro game no carrinho
    cy.getByDataCy('games').eq(0).within(() => {
      cy.findByLabelText('add to cart').click()
      cy.findByLabelText('remove from cart').should('exist')
    })

    // Verificando se aparece a quantidade de games no icone
    cy.findAllByLabelText('Cart Items')
      .first()
      .should('have.text', '1')
      .click()

    // Verificando se foi o jogo correto para o carrinho
    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /weird west/i }).should('exist')
      cy.findAllByText('€39.99').should('exist')
    })

    // Fechando o dropdown
    cy.findAllByLabelText('Cart Items').first().click()

    // Removendo do carrinho
    cy.getByDataCy('games').first().within(() => {
      cy.findByLabelText('remove from cart').click()
    })

    // Verificando se removeu do carrinho
    cy.findAllByLabelText('Cart Items')
      .should('not.exist')
  });
});
