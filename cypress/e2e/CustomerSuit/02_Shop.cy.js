/// <reference types="Cypress" />

describe("Visit Catalog", () => {
    it("TC_V001 - Shop Data", () => {
        cy.visit("https://myshop4.com/qa.team")
        cy.get(':nth-child(1) > .button').click()
        cy.get('#address').contains('7 n 539, 742 Evergreen Terrace, La Plata, Buenos Aires, AR.').should('be.visible')
        cy.get('#mail-link').contains('qa@arzion.com').should('be.visible')
    });

    it("TC_V002 - Open hours", () => {
        cy.visit("https://myshop4.com/qa.team")
        cy.get(':nth-child(1) > .button').click()
        cy.get('#tab-1 > .tab-title').click()
        cy.get('#\\+info-content').contains('Monday').should('be.visible')
        cy.get('#\\+info-content').contains('Tuesday').should('be.visible')
        cy.get('#\\+info-content').contains('Wednesday').should('be.visible')
        cy.get('#\\+info-content').contains('Thursday').should('be.visible')
        cy.get('#\\+info-content').contains('Friday').should('be.visible')
        cy.get('#\\+info-content').contains('Saturday').should('exist')
        cy.get('#\\+info-content').contains('09:00 - 18:00').should('be.visible')
        cy.get('#\\+info-content').contains('09:00 - 13:00').should('exist')
        cy.get('#modal-cancel-button').click()
    });

    it.only("TC_V003 - Searchings", () => {
        cy.visit("https://myshop4.com/qa.team")
        cy.get('.search-input').type('test')
        cy.get(".mobile-menu-body ").then($main => {
           var countResults = 0
           cy.log(`Proudcts found: ${countResults = $main.find('a').length}`);     
        });

    });   

})