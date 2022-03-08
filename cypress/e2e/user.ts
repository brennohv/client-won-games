/// <reference path="../support/index.d.ts" />

import { CreateUser } from './../support/generate';

const user = CreateUser()

describe('user', () => {
  it('should create user', () => {
    cy.visit('/sign-up')


    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', {name: /sign up now/i}).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button' , {name: user.username}).should('exist')
  });
});
