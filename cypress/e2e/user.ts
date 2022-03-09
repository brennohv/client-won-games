/// <reference path="../support/index.d.ts" />

import { CreateUser } from './../support/generate';

const user = CreateUser()

describe('user', () => {
  it('should sign-up', () => {
    cy.createUser(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button' , {name: user.username}).should('exist')
  });

  it('should sign-in', () => {
    cy.visit('/sign-in')

    cy.signIn()

    cy.findByRole('button', {name: /e2eTeste/i}).click()
    cy.findAllByRole('button', {name: /^sign out/i}).should('exist').click()
    cy.findByRole('link', {name: /sign in/i}).should('exist')
  });

  it.only('should access protected path without sign-in', () => {
    cy.visit('/profile/me')

    cy.url().should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`)
    cy.signIn()

    cy.url().should('eq', `${Cypress.config().baseUrl}/profile/me`)
    cy.findByLabelText(/username/i).should('have.value', 'e2eTeste')
    cy.findByLabelText(/email/i).should('have.value', 'e2e@wongames.com')
  });
});
