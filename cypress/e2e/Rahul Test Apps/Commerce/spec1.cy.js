describe(`test e2e ecommerce site`,()=>{
    const login = 'rahulshettyacademy'
    const pwd = 'Learning@830$3mK2'

    it('Submit Order',()=>{
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('[name="username"]').type(login)
        cy.get('[name="password"]').type(pwd)
        cy.get(':nth-child(1) > .checkmark').click()
        cy.get('[name="terms"]').click()
        cy.get('[name="signin"]').click()
        cy.contains('Shop Name').should('be.visible')

    })



})