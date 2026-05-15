/// <reference types="cypress" />

describe("My fifth Test Suite",()=>{

    it("First fifth test Case",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>{
            const courseItem = $e1.text()
            if(courseItem.includes('Python')){
                cy.wrap($e1).next().then((price)=>{
                   const priceTextWrap = price.text()
                   expect(priceTextWrap).to.equal('25')
                })
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                   const priceText = price.text()
                   expect(priceText).to.equal('25')
                })
            }
        })
        // cy.get('div .mouse-hover-content').invoke('show')
        cy.contains('Top').click() 
        cy.url().should('include','top')
        cy.contains('Reload').click({force: true}) 

    })
    

})