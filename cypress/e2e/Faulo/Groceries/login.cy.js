describe('Login Page', () => {
  const baseUrl = 'http://localhost:5173/'
  const loginPath = '/login'
  const credentials = {
    username: 'admin@example.com',
    password: 'password123!'
  }

  beforeEach(() => {
    cy.visit(`${baseUrl}${loginPath}`)
  })

  it('should display the login form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('button[type="submit"]').should('be.visible')
  })

    it('should show an error for invalid credentials', () => {
    cy.get('input[name="email"]').type('invalid@example.com')
    cy.get('input[name="password"]').type('wrongpass')
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid email or password').should('be.visible')
  })

  it('should allow user to login with valid credentials', () => {
    cy.get('input[name="email"]').type(credentials.username)
    cy.get('input[name="password"]').type(credentials.password)
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', loginPath)
    cy.url().should('include', '/grocery-list')
  })

})
