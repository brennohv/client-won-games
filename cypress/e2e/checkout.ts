/// <reference path="../support/index.d.ts" />

import { CreateUser, User } from "../support/generate";
describe('Checkout', () => {
  let user: User
  describe('Free games', () => {
    before(() => {
      user = CreateUser()
    })

    it('should buy free games', () => {
      cy.viewport(1300, 660)
      cy.visit('sign-up')

      // criar um usuario
      cy.createUser(user)

      // clicando em explore
      cy.findAllByRole('link', { name: /Store/i}).first().click()

      // Filtrando por jogos Free
      cy.findByLabelText('Free').click()

      //Adicionando no carrinho
      cy.wait(1000)
      cy.addToCartByIndex(0)
      cy.addToCartByIndex(1)

      // Efetuando a compra
      cy.wait(1000)
      cy.findAllByLabelText('Cart Items').first().click()
      cy.getByDataCy('cart-list').within(() => {
        cy.findByRole('link', { name: /buy it now/i }).click()
      })
      cy.findByText(/Somente jogos gratuitos, clique em comprar e se divirta/i).should('exist')
      cy.findByRole('button', { name: /buy now/i }).click()

      // Verificando se salvou os jogos no profile
      cy.wait(1000)
      cy.findByRole('link' , { name: /Orders List/i }).click()
      cy.getByDataCy('game item').should('have.length', 2)
    });
  });

  describe.only('Paid Games', () => {
    before(() => {
      user = CreateUser()
    })

    it('should buy paid Games', () => {
      cy.viewport(1300, 660)
      cy.visit('sign-up')

      // criar um usuario
      cy.createUser(user)

      // clicando em explore
      cy.findAllByRole('link', { name: /Store/i}).first().click()

      // Filtrando por jogos Free
      cy.findByLabelText('Highest to lowest').click()

      //Adicionando no carrinho
      cy.wait(3000)
      cy.addToCartByIndex(0)
      cy.addToCartByIndex(1)

      // Efetuando a compra
      cy.wait(3000)
      cy.findAllByLabelText('Cart Items').first().click()
      cy.getByDataCy('cart-list').within(() => {
        cy.findByRole('link', { name: /buy it now/i }).click()
      })

      // Botão disabilitado
      cy.findByRole('button', { name: /buy now/i }).should('have.attr', 'disabled')

      // Preenchendo cartão de credito com cypress-plugin-stripe-elements
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1025')
      cy.fillElementsInput('cardCvc', '123')

      cy.findByRole('button', { name: /buy now/i }).click()


      // Verificando se salvou os jogos no profile
      cy.wait(4000)
      cy.findByRole('link' , { name: /Orders List/i }).click()
      cy.wait(2000)
      cy.getByDataCy('game item').should('have.length', 2)
    });
  });
});

