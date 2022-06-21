/// <reference types="Cypress" />

describe("Products", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('.uk-flex > .uk-button').click();
    })

    it("TC_P001 - Add a Product", ()=> {
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
         cy.fixture("products/singleProduct").then((prod)=>{
            cy.get('#addProduct-name').type(prod.productName)
            cy.get('#addProduct-description').type(prod.productDescription)     
        })
         cy.fixture("products/categories").then((cat)=>{
            cy.get('select').select(cat.editedCategory)
        })
        cy.fixture("products/singleProduct").then((prod)=>{
            cy.get('#addProduct-price').type(prod.productPrice)
            cy.get('#addProduct-stock').type(prod.productStock)
        })
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
        cy.fixture("products/multipleProduct").then((prod)=>{
            cy.get('#addProduct-name').type(prod.productName)
            cy.get('#addProduct-description').type(prod.productDescription)     
        })
        cy.fixture("products/categories").then((cat)=>{
            cy.get('select').select(cat.editedCategory)
        })
        cy.get('#addProduct-2 > .chip').click()
        cy.fixture("products/multipleProduct").then((prod)=>{
            cy.get('#addProduct-title-group-prices').type(prod.groupTitle)
            cy.get('#addProduct-presentation-name0').type(prod.firstProductName)
            cy.get('#addProduct-presentation-price0').type(prod.firstProductPrice)
            cy.get('#addProduct-stock-0').type(prod.firstProductStock)
            cy.get('#addProduct-presentation-name1').type(prod.secondProductName)
            cy.get('#addProduct-presentation-price1').type(prod.secondProductPrice)
            cy.get('#addProduct-stock-1').type(prod.secondProductStock)      
        })
        cy.get('.select').attachFile('images/smartPhone.jpeg')
        cy.get('#addProduct-primary-button').click({force: true})

        // Add a Product with Discount
        cy.get('#add-button').click()
        cy.fixture("products/discountProduct").then((prod)=>{
           cy.get('#addProduct-name').type(prod.productName)
           cy.get('#addProduct-description').type(prod.productDescription)     
       })
        cy.fixture("products/categories").then((cat)=>{
        cy.get('select').select(cat.editedCategory)
        })
        cy.get('#addProduct-has-discount').click({force: true})
        cy.fixture("products/discountProduct").then((prod)=>{
            cy.get('#addProduct-discounted-price').type(prod.productWithDiscount)
            cy.get('#addProduct-price').type(prod.productPrice)
            cy.get('#addProduct-stock').type(prod.productStock)
        })
        cy.get('#addProduct-images').attachFile('images/smartPhone.jpeg')
        cy.get('#addProduct-primary-button').click({force: true})
    });
    
    it("TC_P002 - Edit a Product", ()=> {
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
        })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
        })
        cy.get('.table-actions').eq(1).find('button').last().click()
        cy.fixture("products/editSingleProduct").then((prod)=>{
            cy.get('#editProduct-name').clear().type(prod.productNameEdited)
            cy.get('#editProduct-primary-button').click()                
        })
    });

    it("TC_P003 - Filter a Product", () => {
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
        cy.fixture("products/categories").then((cat)=>{
            cy.get('.is-selected > .form-field-input > #table-products-filter-category-id').select(cat.editedCategory)
            
        })
        cy.get('#table-products-filter-primary-button').click({force: true})
    
        // 5.e. - Count Number of Results
        cy.get("#table-products").then($body => {
            cy.log(`Resultados encontrados: ${$body.find('tbody tr').length}`);
        });
        
    });

    it("TC_P004 - Delete a Product (Discount price)", () => {
        cy.fixture("credentials/admin").then((user) =>{
            cy.get('#signIn-email').type(user.email)
            cy.get('#signIn-password').type(user.password)
            })  
        cy.get('#signIn-primary-button').click()
        cy.fixture("linksButtons/buttons").then((buttons)=>{
            cy.get(buttons.goProducts).click({force: true})
        })
        cy.fixture("products/discountProduct").then((prod)=>{
            cy.get('#search-mobile').type(prod.productName)    
        })
        cy.contains('Remove').click({force: true})
        cy.get('#modal-close-button').click()
        cy.reload()
    })

    it("TC_P005 - Count number of products", () => {
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
    it("TC_P006 - Share products", () => {
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