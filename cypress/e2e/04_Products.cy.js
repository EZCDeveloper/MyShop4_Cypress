/// <reference types="Cypress" />

describe("Products", () => {
    it("TC_MS004 - Add a Product", ()=> {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
       
        // Add a Product with Unit price (thro PANEL PRODUCTS)
         cy.get('.sidebar > .sidebar-links-wrapper > #lista-1 > :nth-child(3) > .sidebar-links-item').click()
         cy.get('#add-button').click()
         cy.get('#addProduct-name').type('Lenovo Thinkpad')
         cy.get('#addProduct-description').type('With Intel7 chip integrated')
         cy.get('select').select('Laptos7 Re-New')
         cy.get('#addProduct-price').type('120000')
         cy.get('#addProduct-stock').type('500')
         cy.get('#addProduct-images').attachFile('images/lenovohero2.png')
         cy.get('#addProduct-primary-button').click({force: true})

        // Add a Product (thro Category Page)
        /*  cy.get('div:nth-of-type(4) > .card.categories-card.is-horizontal  .card-extra-actions > button:nth-of-type(2)').click()
        cy.get('#addProduct-name').type('Lenovo Thinkpad')
        cy.get('#addProduct-description').type('With Intel7 chip integrated')
        cy.get('#addProduct-price').type('120000')
        cy.get('#addProduct-stock').type('500')
        cy.get('#addProduct-images').attachFile('images/lenovothinkpad1.png')
        cy.get('#addProduct-primary-button').click({force: true}) */
   
        // TODO: Mark multiple price
        // Add a Product with Multiple Price
        //cy.get('.sidebar > .sidebar-links-wrapper > #lista-1 > :nth-child(3) > .sidebar-links-item').click()
        cy.get('#add-button').click()
        cy.get('#addProduct-name').type('Lenovo Fighter Plus')
        cy.get('#addProduct-description').type('Qauntum processor integrated')
        cy.get('select').select('Laptos7 Re-New')
        cy.get('#addProduct-2 > .chip').click()
        cy.get('#addProduct-title-group-prices').type('Coolers')
        cy.get('#addProduct-presentation-name0').type('SuperCooler')
        cy.get('#addProduct-presentation-price0').type('350000')
        cy.get('#addProduct-stock-0').type('10')
        cy.get('#addProduct-presentation-name1').type('HighCooler Panel')
        cy.get('#addProduct-presentation-price1').type('450000')
        cy.get('#addProduct-stock-1').type('21')
        cy.get('.select').attachFile('images/lenovohero3.png')
        cy.get('#addProduct-primary-button').click({force: true})
    }); 


})