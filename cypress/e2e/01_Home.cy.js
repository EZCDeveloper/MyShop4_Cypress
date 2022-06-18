/// <reference types="Cypress" />

describe("Admin Suite", () => {
    it("TC_MS001 - Validate page's Title", () => {
        cy.visit("/")
        cy.title().should('include', 'MS4 Herramientas que potencian tu negocio')
        cy.contains('h1', 'Bienvenidos a MyShop4')
    });
})