/// <reference path="../support/index.d.ts" />

describe('user', () => {
  it('should create user', () => {
    cy.visit('/sign-up')


    cy.findByPlaceholderText(/username/i).type('teste')
    cy.findByPlaceholderText(/email/i).type('brennovicentini@gmail.com')
    cy.findByPlaceholderText(/^password/i).type('1234')
    cy.findByPlaceholderText(/confirm password/i).type('1234')
    cy.findByRole('button', {name: /sign up now/i}).click()
  });
});
