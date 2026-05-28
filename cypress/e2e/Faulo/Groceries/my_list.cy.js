describe('My List Page', () => {
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

    it('should display the grocery list', () => {
    cy.get('.mt-6').find('li').should('exist')
    cy.get('.mt-6').find('li').should('have.length.greaterThan', 0)
  })

  it('should allow adding a new list', () => {
    cy.get('[name="name"]').type(listName)
    cy.get('.mt-6').find('li').its('length').then((size) => {
      cy.get('.grid > .inline-flex').click()
      cy.get('.mt-6').find('li').should('have.length', size + 1)
    })
    cy.get('.mt-6').find('li').should('contain',listName)
  })

  it('should delete a list', ()=>{
    cy.get('ul li').contains(listName).closest('li').find('button').click()
    cy.contains('Delete').click()
    cy.get('.flex-col-reverse > .shadow').click()
  })

  it('should add items to a list then delete the list', () => {
    cy.get('[name="name"]').type(listName)
    cy.get('.mt-6').find('li').its('length').then((size) => {
      cy.get('.grid > .inline-flex').click()
      cy.get('.mt-6').find('li').should('have.length', size + 1)
    })
    cy.get('ul li').contains(listName).closest('li').find('a').click()
    cy.get('input[aria-autocomplete="list"]').type(itemName)
    cy.get('[name="value"]').type("26.32")
    cy.get(':nth-child(3) > .grid > .inline-flex').click()
    cy.get('.flex > .grid').click()
    cy.get('.rounded-xl > .flex > .inline-flex').click()
    cy.get('#grocery-end-location').type('Casa do Teste')
    cy.get('.flex-col-reverse > .bg-primary').click()
    cy.contains('View').click()
    cy.get('input[type="number"]').type("12.36")
    cy.contains('Groceries').click()
    // cy.get('ul li').contains(listName).closest('li').find('button').click()
    // cy.contains('Delete').click()
    // cy.get('.flex-col-reverse > .shadow').click()
  })

})