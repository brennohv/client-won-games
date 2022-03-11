/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill input and success response ', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('e2e@wongames.com')
    })

    cy.visit('/forgot-password')
    cy.findByPlaceholderText(/email/i).type('e2e@wongames.com')
    cy.findByRole('button', {name: /send email/i}).click()

    cy.findByText(/O email para recuperar sua senha foi enviado/i).should('exist')
  });

  it('should fill input and  does not success response', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        body: {
          statusCode: 400,
          error: 'Bad Request',
          message: [{
            messages: [{
              message: 'This email does not exist'
            }]
          }]
        }
      })
    })

    cy.visit('/forgot-password')
    cy.findByPlaceholderText(/email/i).type('false@wongames.com')
    cy.findByRole('button', {name: /send email/i}).click()

    cy.findByText(/This email does not exist/i).should('exist')
  });
});
