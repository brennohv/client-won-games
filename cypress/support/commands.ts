// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library Commands
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  cy.get(`[data-cy="${selector}"]`, ...args)
})

Cypress.Commands.add('shouldRenderBanner', () => {
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
})

Cypress.Commands.add('shouldRenderShowcase', ({name, highlight = false, games = false}) => {
  cy.getByDataCy(`${name}`).within(() => {
    cy.findByRole('heading', { name }).should('exist')

    cy.getByDataCy("highlight").should(highlight ? 'exist' : 'not.exist')

    if(highlight) {
      cy.get(`[data-cy="highlight"]`).within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    if(games) {
      cy.get(`[data-cy="games"]`).should('have.length.greaterThan', 0)
    }
  })
})

Cypress.Commands.add('getFields', (fields) => {
  fields.map(({ label }) => {
    cy.findByText(label).should('exist')
  })
})


Cypress.Commands.add('shouldBeGreaterThan', (value, label) => {
  cy.findByLabelText(label)
      .invoke('text')
      .then(text => text.replace('€', ''))
      .then(parseFloat)
      .should('be.gt', value)
})

Cypress.Commands.add('shouldBeLessThan', (value, label) => {
  cy.findByLabelText(label)
      .invoke('text')
      .then(text => text.replace('€', ''))
      .then(parseFloat)
      .should('be.lt', value)
})

Cypress.Commands.add('shouldBeEqualFree', (label) => {
  cy.findByLabelText(label)
      .should('have.text', 'FREE')
})

Cypress.Commands.add('createUser', (user) => {
  cy.visit('/sign-up')

    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', {name: /sign up now/i}).click()
})

Cypress.Commands.add('signIn', (user) => {
  cy.findByPlaceholderText(/email/i).type(!!user ? user.email : 'e2e@wongames.com')
  cy.findByPlaceholderText(/password/i).type(!!user ? user.password : '123456')
  cy.findByRole('button', {name: /sign in now/i}).click()
  cy.findByRole('button', {name: !!user ? `${user.username}` : /e2eTeste/i}).should('exist')
})

Cypress.Commands.add('addToCartByIndex', (index) => {
  cy.getByDataCy('games').eq(index).within(() => {
    cy.findByLabelText('add to cart').click()
  })
})

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('games').eq(index).within(() => {
    cy.findByLabelText('remove from cart').click()
  })
})

Cypress.Commands.add('addToWishlistByIndex', (index) => {
  cy.getByDataCy('games').eq(index).within(() => {
    cy.findAllByLabelText('Add to Wishlist').click()
  })
})

Cypress.Commands.add('removeFromWishlistByIndex', (index, QuantityInWishlist) => {
  cy.getByDataCy('wishlist').within(() => {
    cy.getByDataCy('games').eq(index).should('have.length', QuantityInWishlist).within(() => {
      cy.findByLabelText('Remove from Wishlist').click()
    })
  })
})
