describe('EventHub Login', function () {
  
  beforeEach(() => {
    cy.fixture('EventHubFixture').then((data) => {
      this.data = data})
  })

  it('should add an event', () => {
    cy.visit('https://eventhub.rahulshettyacademy.com/login')
    cy.get('input[name="email"], input#email').should('exist').type(this.data.userEmail)
    cy.get('input[name="password"], input#password').should('exist').type(this.data.password)
    cy.get('button[type="submit"]').should('exist').click()
    cy.get('#nav-events').click()
    cy.get('[href="/admin/events"]').click()
    cy.get('[data-testid="event-title-input"]').type('Test Event')
    cy.get('[data-testid="event-description-input"]').type('This is a test event created by Cypress.')
    cy.get('[data-testid="event-date-input"]').type('2024-12-31')
    cy.get('[data-testid="event-time-input"]').type('18:00')
    cy.get('[data-testid="event-location-input"]').type('Test Location')
    cy.get('[data-testid="event-category-select"]').select('Conference')
    cy.get('[data-testid="create-event-button"]').click()
    cy.contains('Test Event').should('be.visible')

  })
})
