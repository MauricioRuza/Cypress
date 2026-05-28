/// <reference types="cypress" />
const calendar = {
    month: '6',
    date: '15',
    year: '2027'
}
const expectedList = [calendar.month,calendar.date,calendar.year]

describe("My first Test Suite", () => {


    it("First Test Case", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('Ca');
        cy.wait(2000)

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const productName = $el.find('h4.product-name').text()
            if (productName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.brand').then((logoElement) => {
            cy.log(logoElement.text())
        })

        cy.get('.brand').should('have.text', 'GREENKART')

        cy.get('[href="#/offers"]').invoke('removeAttr', 'target').click()

        cy.get('[class="react-date-picker__inputGroup"]').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button", calendar.year).click()
        // cy.contains("button", calendar.month).click()
        // cy.contains("button", calendar.date).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(calendar.month)-1).click()
        cy.contains("abbr", calendar.date).click()
        cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>{
            cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })


    })


})