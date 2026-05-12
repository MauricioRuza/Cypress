describe('Meu Primeiro teste', () => {
    beforeEach(() => { 
        cy.visit('http://localhost:5173/home')
        
    })

    it('Deve exibir o título correto', () => {
        cy.title().should('eq', 'PDC Books')
    })

    it('Deve fazer login', () => {
        // cy.get('#radix-«r0»-trigger-radix-«r1»').trigger('mouseover')
        cy.get('#radix-«r0»-trigger-radix-«r1»').click()
        cy.get('.space-y-4 > .w-full').should('be.visible') 
        cy.get('.w-full max-w-xs py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition').click()
        // cy.get('input[name="email"]').type('user@example.com')
        // cy.get('input[name="password"]').type('password123')
        // cy.get('button[type="submit"]').click()
    })

})