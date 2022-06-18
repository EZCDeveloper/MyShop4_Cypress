/// <reference types="Cypress" />

describe("Admin Suite", () => {
    it("TC_MS002 - Trying to Login with wrong information", ()=> {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/failLogin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })
        cy.get('#signIn-primary-button').click()
        cy.get('.alert').should('be.visible', 'Error Credenciales inválidas')
        //cy.get('.alert').should('have.text', 'ErrorCredenciales inválidas')
        cy.log("ERROR Credenciales Inválidas");

    }); 
    // TODO: clear INPUT first
    it("TC_MS003 - Login Successfully", ()=> {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
    });         
}); 
        
   
    
       

    
