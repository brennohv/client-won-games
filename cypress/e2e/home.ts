/// <reference path="../support/index.d.ts" />

describe('Home', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

    cy.shouldRenderShowcase({ name: 'News', games: true })
    cy.shouldRenderShowcase({ name: 'Most popular', highlight: true, games: true })
    cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true })
    cy.shouldRenderShowcase({ name: 'Free games' , highlight: true, games: true })
  });
});
