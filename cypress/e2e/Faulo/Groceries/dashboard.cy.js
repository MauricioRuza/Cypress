/// <reference types="cypress" />

describe('Dashboard Page', () => {
    const baseUrl = 'http://localhost:5173/'
    const myListPath = '/grocery-list'
    const credentials = {
    username: 'admin@example.com',
    password: 'password123!'
  }
  const listName = 'Test List'
  const itemName = 'test'

  beforeEach(() => {
    cy.loginViaSession(credentials.username, credentials.password)
    cy.visit(`${baseUrl}${myListPath}`)
  })

  it('should load the dashboard page', () => {
    cy.get('[href="/dashboard"]').click()
    cy.get('#dash-product').type('test')
    cy.get('#dash-category').click()
    cy.contains('Other').click()
    cy.get('.flex-col > .inline-flex').click()
    cy.get(':nth-child(4) > .p-6').contains(itemName)
  });

});
