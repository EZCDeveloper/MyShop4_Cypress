// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("purchase_Form_Submission", (firstName, lastName, email, phone, address, city, state, country, miniumAmount, invalidValue, aboveAmount) => {
    cy.get('#Name').clear().type(firstName)
    cy.get('#Lastname').clear().type(lastName)
    cy.get('#Email').clear().type(email)
    cy.get('#Phone').clear().type(phone)
    cy.get('#Address\\ 1').clear().type(address)
    cy.get('#City').clear().type(city)
    cy.get('#State').clear().type(state)
    cy.get('#Country').clear().type(country)
    cy.get('#Checkout_form-cash-amount').clear().type(miniumAmount)
    cy.get('.helper-text').contains(invalidValue)
    cy.get('#Checkout_form-cash-amount').clear().type(aboveAmount) 
}) 

/* Cypress.Commands.add("prod_default", (firstName) => {
    cy.contains(firstName).should('be.visible') 
})  */


//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';