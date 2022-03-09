/// <reference path="../support/index.d.ts" />

import { CreateUser } from './../support/generate';

const user = CreateUser()

describe('user', () => {
  it.skip('should sign-up', () => {
    cy.createUser(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button' , {name: user.username}).should('exist')
  });

  it('should sign-in', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/password/i).type('123456')

    cy.findByRole('button', {name: /sign in now/i}).click()
    cy.findByRole('button', {name: /e2eTeste/i}).should('exist').click()

    cy.findAllByRole('button', {name: /^sign out/i}).first().should('exist').click()
    cy.findByRole('link', {name: /sign in/i}).should('exist')
  });
});
