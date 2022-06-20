/// <reference types="Cypress" />

describe("Products", () => {
    it("TC_P001 - Add a Product", ()=> {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
       
        // Add a Product with Unit price (thro PANEL PRODUCTS)
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
        })
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
   
        // Add a Product with Multiple Price
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
        cy.get('.select').attachFile('images/smartPhone.jpeg')
        cy.get('#addProduct-primary-button').click({force: true})
    });
    
    it("TC_P002 - Edit a Product", ()=> {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
        })
        cy.get('.table-actions').eq(1).find('button').last().click()
        cy.get('#editProduct-name').clear().type('Lenovo Fighter Edited')
        cy.get('#editProduct-primary-button').click()
    });

    it("TC_P003 - Filter a Product", () => {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
        })
        cy.get('#table-products-search').click()
        cy.get('#table-products-filter-category-id-check').click({force: true})
        cy.get('.is-selected > .form-field-input > #table-products-filter-category-id').select('Laptos7 Re-New')
        cy.get('#table-products-filter-primary-button').click({force: true})
    
        // 5.e. - Count Number of Results
        cy.get("#table-products").then($body => {
            cy.log(`Resultados encontrados: ${$body.find('tbody tr').length}`);
        });
        
    });

    it("TC_P004 - Delete a Product", () => {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
            })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
            })

        cy.get('#search-mobile').type('Lenovo Fighter Edited')
        cy.contains('Remove').click({force: true})
        cy.get('#modal-close-button').click()
        cy.reload()
    })

    it("TC_P005 - Count number of products", () => {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
            })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
            })

        cy.get("#table-products").then($body => {
            var countNumber = 0
            cy.log(`Number of Proudcts found: ${countNumber = $body.find('tbody tr').length}`);
            cy.fixture("linksButtons/buttons").then((buttons)=>{
                cy.get(buttons.goDashboard).click({force: true})
                })
            cy.get('.card-dishes-quantity').should('contain.text', countNumber)
        });  
    })

    // TODO: Pending SHARE: save data into a file.
    it.only("TC_P006 - Share products", () => {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
            })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goDashboard).click({force: true})
            })
    })

})