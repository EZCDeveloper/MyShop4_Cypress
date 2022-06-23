/// <reference types="Cypress" />

describe("Products", () => {
    
    const filePath = 'cypress/fixtures/products/writeRead.json'
    
    beforeEach(() => {
        cy.visit("/")
        cy.get('.uk-flex > .uk-button').click()
        cy.fixture("credentials/admin").then(function(datok) {
            //this.data = data;
            globalThis.datok = datok;
          })
    })
    
    it("TC_D001 - Dashboard", () => {
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
        cy.get('#sidebar-dashboard').click({force: true});
        
        // When press SHARE, write into a file
        cy.get('.button-primary').contains("Share").click()

        // Save Product's Data into Jason file
        cy.request({
            method: 'GET',
            url: 'https://api.myshop4.com/catalogs/50/products',
            failOnStatusCode: false,
            headers: {
                accept: "application/json",
                Authorization: datok.token
            }
        })
            .then(response => {
                let body = JSON.parse(JSON.stringify(response.body))  
                //cy.log(body)
                cy.wait(1000)
                cy.writeFile(filePath, body)
            })
        
        cy.get('#modal-cancel-button').click()
    })

})