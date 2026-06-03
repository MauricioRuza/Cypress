describe('EventHub event creation', function () {
  
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
    cy.get('textarea').type('This is a test event created by Cypress.')
    cy.get('[id="price-($)"]').type('455.00')
    cy.get('#total-seats').type('100')
    cy.get('#city').type('Test Location')
    cy.get('#venue').type('Test Location')
    cy.get('#category').select('Conference')
    cy.get('[id="event-date-&-time"]').type('2027-12-31T18:00')
    cy.get('#add-event-btn').click()
    cy.contains('Test Event').should('be.visible')
    cy.get('#delete-event-btn').click()
    cy.get('#confirm-dialog-yes').click()
  })
})
