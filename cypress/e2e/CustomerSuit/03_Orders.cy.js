/// <reference types="Cypress" />

describe("Orders", () => {
    it("TC_O001 - Add to Cart", () => {
        cy.visit("https://myshop4.com/qa.team")

        // Add to cart "Test Plan Template"
        cy.get('.search-input').type('Test Plan Template')
        cy.get('.card-body').click()
        cy.get('#addToCart-button-default').click()
        cy.get('#button-source-delivery-default').click()
        
        
        // Add a Product with Multiple price to the cart
        cy.fixture("products/multipleProduct").then((prod)=>{
            cy.get('.search-input').type(prod.productName)      
        })
        cy.get('.card-body').click()
        cy.get('#addToCart-button-default').click()

        // Add a Single Product to the cart
        cy.fixture("products/singleProduct").then((prod)=>{
            cy.get('.search-input').type(prod.productName)   
        })
        cy.get('.card-body').click()
        cy.get('#addToCart-button-default').click()

        // View my cart
        cy.get('#floating-button').click()
        
        // Check products added
        cy.contains('Test plan template').should('be.visible')
        cy.contains('Lenovo Fighter Power').should('be.visible')
        cy.contains('Lenovo Thinkpad').should('be.visible')
       
        // Continue to ckeckout
        cy.get('#continueToCheckout-button-default').click()

        // Complete form
        cy.get('#Name').clear().type('Juan Manuel')
        cy.get('#Lastname').clear().type('Fernandez')
        cy.get('#Email').clear().type('mycompra@gmail.com')
        cy.get('#Phone').clear().type('3794123123')
        cy.get('#Address\\ 1').clear().type('La Madrid 825 2do A')
        cy.get('#City').clear().type('Posadas')
        cy.get('#State').clear().type('Misiones')
        cy.get('#Country').clear().type('Argentina')
        cy.get('#Checkout_form-cash-amount').clear().type('100000')
        cy.get('.helper-text').contains('Invalid minimum value')
        cy.get('#Checkout_form-cash-amount').clear().type('600000')

        // Click Checkout
        cy.get('#checkout-button-default'). click()

        // Validate Data
        cy.contains('Juan Manuel').should('be.visible')
        cy.contains('Fernandez').should('be.visible')
        cy.contains('mycompra@gmail.com').should('be.visible')
        cy.contains('3794123123').should('be.visible')
        cy.contains('Test plan template').should('be.visible')
        cy.contains('Lenovo Fighter Power').should('be.visible')
        cy.contains('Lenovo Thinkpad').should('be.visible')

        // Send Copy
        cy.get('#sendCopyToEmail-button-default').click()
        cy.get('#Email').type('rocio.gartxo@arzion.com')
        cy.get('#modal-close-button').click()

        // Back to home
        cy.get('#go-to-main-page').click()
    });  

})