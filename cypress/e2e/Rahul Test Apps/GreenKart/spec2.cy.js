/// <reference types="cypress" />

describe("My first Test Suite",()=>{

    it("First Test Case",()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(1000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
            const productName = $el.find('h4.product-name').text()
            if(productName.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview').find('button').click()
        cy.contains('Place Order').click()
        cy.get('select')
    })
    

})