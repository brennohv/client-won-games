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
});
