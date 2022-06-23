/// <reference types="Cypress" />

describe("Orders", () => {
    before(function() {
        cy.fixture("shopper/customer1").then(function(data) {
          //this.data = data;
          globalThis.data = data;
        })
        cy.fixture("products/defaultProduct").then(function(defProd) {
          //this.data = data;
          globalThis.defProd = defProd;
         })
        cy.fixture("products/multipleProduct").then(function(mulProd) {
          //this.data = data;
          globalThis.mulProd = mulProd;
        })
        cy.fixture("products/singleProduct").then(function(singProd) {
            //this.data = data;
            globalThis.singProd = singProd;
        })

    })

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

        // Complete form (with Custom Commands)
        cy.purchase_Form_Submission(data.firstName, data.lastName, data.email, data.phone, data.address, data.city, data.state, data.country, data.miniumAmount, data.invalidValue, data.aboveAmount)

        // Click Checkout
        cy.get('#checkout-button-default'). click()

        // Validate Data
        cy.contains(data.firstName).should('be.visible')
        cy.contains(data.lastName).should('be.visible')
        cy.contains(data.email).should('be.visible')
        cy.contains(data.phone).should('be.visible')
        cy.contains(defProd.productName).should('be.visible')
        cy.contains(mulProd.productName).should('be.visible')
        cy.contains(singProd.productName).should('be.visible')

        // Send Copy
        cy.get('#sendCopyToEmail-button-default').click()
        cy.get('#Email').type('emanuel.zini@gmail.com')
        cy.get('#modal-close-button').click()

        // Succes Aler
        cy.get('#Success-alert-content').contains('The email was sended successfully').should('be.visible')

        // Back to home
        cy.get('#go-to-main-page').click()
    });  

})