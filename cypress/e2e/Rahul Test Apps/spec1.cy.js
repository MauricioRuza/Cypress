/// <reference types="cypress" />

describe("My first Test Suite",()=>{

    it("First Test Case",()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000)

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
            const productName = $el.find('h4.product-name').text()
            if(productName.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').then((logoElement)=>{
            cy.log(logoElement.text())
        })

        cy.get('.brand').should('have.text', 'GREENKART')



    })
    

})