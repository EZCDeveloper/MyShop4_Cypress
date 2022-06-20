/// <reference types="Cypress" />

describe("Categories", () => {
    it("TC_C001 - Add a New Category", () => {    
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
             cy.get('#signIn-email').type(user.email)
             cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goCategories).click({force: true})
        })
        cy.get('#button-add-category').click()
        cy.get('#category-name').type('SmartPhones')
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