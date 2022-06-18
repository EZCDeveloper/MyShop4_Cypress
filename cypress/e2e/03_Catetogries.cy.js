/// <reference types="Cypress" />

describe("Admin Suite", () => {
    it("TC_MS003 - Add a New Category", () => {    
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
             cy.get('#signIn-email').type(user.email)
             cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
        cy.get('.sidebar > .sidebar-links-wrapper > #lista-1 > :nth-child(5) > .sidebar-links-item > #sidebar-categories').click()
        cy.get('#button-add-category').click()
        cy.get('#category-name').type('Laptops7')
        cy.get('.select').click()
   
    // Attaching File
        cy.get('#category-image').attachFile('images/laptops.png') 
        cy.get('#modal-close-button').click()
        cy.get('#category-add').click()

    // Edit Category --> With CCS Ranorex Selector
        cy.get('.card-extra-actions').find('.button-dropdown').last().click()
        cy.get("ul:nth-of-type(6) > li:nth-of-type(2)").click({force: true})
        cy.get('#category-name').clear().type('Laptos7 Re-New')
        cy.get("button#category-add").click()
    })
})