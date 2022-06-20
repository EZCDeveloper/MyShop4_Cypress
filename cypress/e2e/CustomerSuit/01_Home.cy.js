/// <reference types="Cypress" />

describe("Visit Catalog", () => {
    it("TC_V001 - Title", () => {
        cy.visit("https://myshop4.com/qa.team")
        cy.contains('QA TEAM').should('be.visible') 
    });
})