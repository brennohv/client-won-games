/// <reference path="../support/index.d.ts" />

describe('reset password', () => {
  it('should render error when password does not match', () => {
    cy.visit('/reset-password?code=123456')

    cy.findByPlaceholderText(/^Password/i).type('1234')
    cy.findByPlaceholderText(/confirm Password/i).type('4321')
    cy.findByRole('button', {name: /reset password/i}).click()

    cy.findByText(/confirm password does not match with password/i).should('exist')
  });

  it('should render error when code is invalid', () => {
    cy.intercept('POST', '**/auth/reset-password' /* URL da API */, (res) => {
      res.reply({
        body: {
          error: "Bad Request",
          message: [
            {
              messages: [
                {
                  message: "Incorrect code provided"
                }
              ]
            }
          ],
          statusCode: 400
        }
      })
    })

    cy.visit('/reset-password?code=123456')

    cy.findByPlaceholderText(/^Password/i).type('1234')
    cy.findByPlaceholderText(/confirm Password/i).type('1234')
    cy.findByRole('button', {name: /reset password/i}).click()

    cy.findByText('Incorrect code provided').should('exist')
  });

  it.only('should fill input, reset password and redirect to home', () => {
    // intercept session
    cy.intercept('GET', '**/api/auth/session', (res) => {
      res.reply({
        statusCode: 200,
        body: {
          user: {
            name: 'Brenno',
            email: 'brennovicentini@gmail.com'
          }
        }
      })
    })

    //credentials
    cy.intercept('POST', '**/api/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: { name: 'Brenno', email: 'brennovicentini@gmail.com' } }
    })

    //API
    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: {user: { name: 'Brenno', email: 'brennovicentini@gmail.com' } }
    })

    cy.visit('/reset-password?code=123456')
    cy.findByPlaceholderText(/^Password/i).type('1234')
    cy.findByPlaceholderText(/confirm Password/i).type('1234')
    cy.findByRole('button', {name: /reset password/i}).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/brenno/i).should('exist')
  });
});
