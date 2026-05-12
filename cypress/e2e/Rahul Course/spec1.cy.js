/// <reference types="cypress" />

describe("My first Test Suite",()=>{

    it("First Test Case",()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('')
    })
    

})