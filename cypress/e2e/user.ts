/// <reference path="../support/index.d.ts" />

import { CreateUser } from './../support/generate';

const user = CreateUser()

describe('user', () => {
  it('should create user', () => {
    cy.createUser(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByRole('button' , {name: user.username}).should('exist')
  });
});
