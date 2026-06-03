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
    cy.get('[data-testid="event-card"]').each(($el) => {
      if ($el.find('h3').text().trim() === 'Hollywood Monsoon Night — Los Angeles') {
        cy.wrap($el).find('#book-now-btn').click()
      }
    })
    
  })
})
