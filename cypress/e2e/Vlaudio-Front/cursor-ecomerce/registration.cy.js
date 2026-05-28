/// <reference types="cypress" />

describe("Testing registration",()=>{
    const baseUrl = 'http://localhost:5173'
    const loginPath = '/register'
    const credentials = {
        username: 'Test Account',
        email: 'test'+Math.floor(Math.random()*1001)+'@example.com',
        password: 'password123!',
        address: 'Rua da Padóca',
        addressNumber: '117',
        neighborhood: 'Jardim São Luís',
        complement: 'Casa',
        city: 'São Paulo',
        zip: '05857385',
        state:'SP'       
        
    }

    before(() => {
        cy.visit(`${baseUrl}${loginPath}`)
        cy.clearAllSessionStorage()
        cy.clearAllLocalStorage()
        cy.clearCookies()
    })
    it("Registration Completes without Problems",()=>{
        cy.get('[name="name"]').type(credentials.username)
        cy.get('[name="email"]').type(credentials.email)
        cy.get('[name="password"]').type(credentials.password)
        cy.get('[name="confirmPassword"]').type(credentials.password)
        cy.get('#gender').click()
        cy.get('[role="option"]').contains('Masculino').click()
        cy.get('[name="address.street"]').type(credentials.address)
        cy.get('[name="address.number"]').type(credentials.addressNumber)
        cy.get('[name="address.neighborhood"]').type(credentials.neighborhood)
        cy.get('[name="address.complement"]').type(credentials.complement)
        cy.get('[name="address.city"]').type(credentials.city)
        cy.get('#address\\.zip').type(credentials.zip)
        cy.get('[name="address.state"]').type(credentials.state)
        cy.get('button[type="submit"]').click()
    })
    it("Redirects to Login Page after Registration",()=>{
        cy.url().should('eq', `${baseUrl}/login`)
    })
    it("Login with the new account",()=>{
        cy.get('[name="email"]').type(credentials.email)
        cy.get('[name="password"]').type(credentials.password)
        cy.get('button[type="submit"]').click()
    })
    

})

