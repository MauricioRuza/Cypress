describe('test e2e ecommerce site', function() {

    before(() => {
        cy.fixture('CommerceFixture').as('data')
        Cypress.config('defaultCommandTimeout',8000)
    })

    it('Submit Order', function() {
        const productName = this.data.product
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('[name="username"]').type(this.data.userName)
        cy.get('[name="password"]').type(this.data.password)
        cy.get(':nth-child(1) > .checkmark').click()
        cy.get('[name="terms"]').click()
        cy.get('[name="signin"]').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length',4)
        cy.get('app-card').filter(`:contains("${productName}")`).then($el=>{
            cy.wrap($el).find('button', 'Add').click()
        })
        cy.get('app-card').each(($el, index, $list)=>{
            const productName = $el.find('h4.card-title').text()
            if (productName.includes('Nokia Edge')) {
                cy.wrap($el).find('button', 'Add').click()
            }
        })
        cy.contains('a','Checkout').click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each($el=>{

            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount
        }).then(()=>{
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button','Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain','Success!')

    })

})