/// <reference types="Cypress" />

describe("Home", () => {
    it("TC_H001 - Validate page's Title", () => {
        cy.visit("/")
        cy.title().should('include', 'MS4 Herramientas que potencian tu negocio')
        cy.contains('h1', 'Bienvenidos').should('be.visible')
    });
})