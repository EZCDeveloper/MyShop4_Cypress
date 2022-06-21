/// <reference types="Cypress" />

describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
    })

    it("TC_L001 - Trying to Login with wrong information", ()=> {
        cy.fixture("credentials/failLogin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })
        cy.get('#signIn-primary-button').click()
        cy.get('.alert').should('be.visible', 'Error Credenciales inválidas')
        cy.log("ERROR Credenciales Inválidas");

    }); 
    
    it("TC_L002 - Login Successfully", ()=> {
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()

    });         
}); 
        
   
    
       

    
