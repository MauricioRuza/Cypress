/// <reference types="cypress" />

describe("Testing registration",()=>{
    const baseUrl = 'http://localhost:5173/'
    const loginPath = '/register'
    const credentials = {
        username: 'Test Account',
        email: 'test'+Math.floor(Math.random()*1001)+'@example.com',
        password: 'password123!',
        address: 'Rua da Padóca',
        city: 'São Paulo',
        zip: '05857385',
        state:'SP'       
        
    }

    beforeEach(() => {
        cy.visit(`${baseUrl}${loginPath}`)
    })
    it("Registration Completes without Problems",()=>{
        cy.get('[name="name"]').type(credentials.username)
        cy.get('[name="email"]').type(credentials.email)
        cy.get('[name="password"]').type(credentials.password)
        cy.get('#gender').click()
        cy.get('[aria-labelledby="radix-:r41:"]').click()
        cy.get('[name="address.street"]').type(credentials.address)
        cy.get('[name="address.city"]').type(credentials.city)
        cy.get('#address\\.zip').type(credentials.zip)
        cy.get('div form div div select[aria-hidden="true"]').select(credentials.state,{force: true})
        cy.get('.inline-flex').click()

    })
    

})

