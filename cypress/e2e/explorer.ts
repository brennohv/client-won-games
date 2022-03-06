/// <reference path="../support/index.d.ts" />
import { priceFields, categoriesField, platformsFields, sortFields } from '../../src/utils/filter/fields'

describe('Games Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it.skip('should render fields and headings in games page', () => {
    // Headings
    cy.findByRole('heading', {name: /Sort by price/i}).should('exist')
    cy.findByRole('heading', {name: /^Price/i}).should('exist')
    cy.findByRole('heading', {name: /Platforms/i}).should('exist')
    cy.findByRole('heading', {name: /Genres/i}).should('exist')

    // Fields
    cy.getFields(priceFields)
    cy.getFields(categoriesField)
    cy.getFields(platformsFields)
    cy.getFields(sortFields)
  });

  it.skip('should render fifteen games and show more games when show more is clicked', () => {
    cy.getByDataCy('games').should('have.length', 15)
    cy.findByRole('button', {name: /show more/i})
      .should('exist')
      .click()
    cy.getByDataCy('games').should('have.length', 30)
  });

  it.skip('should order games when clicked Lowest/Highest', () => {
    // Lowest to highest
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'price%3Aasc')
    cy.getByDataCy('games').first().within(() => {
      cy.findByText('FREE').should('exist')
    })

    // Highest to lowest
    cy.findByText(/Highest to lowest/i).click()
    cy.location('href').should('contain', 'price%3Adesc')
    cy.getByDataCy('games').first().within(() => {
      //pegando o elemento de preço do primeiro game
      cy.shouldBeGreaterThan(0 ,'price')
    })
  });

  it.skip('should render only games that match the price select', () => {
    //Free games
    cy.findByLabelText('Free').click()
    cy.location('href').should('contain', 'price_lte=0')
    cy.getByDataCy('games').first().within( () => {
      cy.shouldBeEqualFree('price')
    })

    //$50
    cy.findByLabelText('Under $50').click()
    cy.location('href').should('contain', 'price_lte=50')
    cy.getByDataCy('games').first().within( () => {
      cy.shouldBeLessThan(50, 'price')
    })

    //$100
    cy.findByLabelText('Under $100').click()
    cy.location('href').should('contain', 'price_lte=100')
    cy.getByDataCy('games').first().within( () => {
      cy.shouldBeLessThan(100, 'price')
    })

    //$150
    cy.findByLabelText('Under $150').click()
    cy.location('href').should('contain', 'price_lte=150')
    cy.getByDataCy('games').first().within( () => {
      cy.shouldBeLessThan(150, 'price')
    })

    //$250
    cy.findByLabelText('Under $250').click()
    cy.location('href').should('contain', 'price_lte=250')
    cy.getByDataCy('games').first().within( () => {
      cy.shouldBeLessThan(250, 'price')
    })

    //$500
    cy.findByLabelText('Under $500').click()
    cy.location('href').should('contain', 'price_lte=500')
    cy.getByDataCy('games').first().within( () => {
      cy.shouldBeLessThan(500, 'price')
    })
  });

  it.skip('should order games when click platforms or genres', () => {
    cy.findByLabelText(/Windows/i).click()
    cy.findByLabelText(/Linux/i).click()
    cy.findByLabelText(/mac os/i).click()
    cy.findByLabelText(/action/i).click()
    cy.location('href').should('contain', 'platforms=windows')
    cy.location('href').should('contain', 'platforms=mac')
    cy.location('href').should('contain', 'platforms=linux')
    cy.location('href').should('contain', 'categories=action')
  });

  it('should not render games when it does not have', () => {
    cy.visit('/games')
    cy.findByLabelText(/free/i).click()
    cy.findByLabelText(/linux/i).click()
    cy.findByLabelText(/action/i).click()

    cy.getByDataCy('games').should('not.exist')
    cy.findByRole('image', {name: /A person playing video game/i}).should('exist')
  });
});
