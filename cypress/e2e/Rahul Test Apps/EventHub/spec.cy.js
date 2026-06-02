describe('EventHub Login', function () {
  
  beforeEach(() => {
    cy.visit('https://eventhub.rahulshettyacademy.com/login')
    cy.fixture('EventHubFixture').then((data) => {
      this.data = data
    })
  })

  it('should load the login page', () => {
    cy.get('input[name="email"], input#email').should('exist').type(this.data.userEmail)
    cy.get('input[name="password"], input#password').should('exist').type(this.data.password)
    cy.get('button[type="submit"]').should('exist').click()
  })
})
