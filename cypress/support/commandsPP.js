require('@cypress/xpath');

Cypress.Commands.add('getCorrectPP',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('4532375619520872')
    cy.xpath('//*[@id="cvv_code"]')
        .type('754')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')

 })


Cypress.Commands.add('expiration',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="month"]').select('Month')
        .should('not.be.selected', 'Month')
    cy.xpath('//*[@id="year"]').select('Year')
        .should('not.be.selected', 'Year')
})


Cypress.Commands.add('wrongCardValue',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('4532375619520872')
    cy.xpath('//*[@id="cvv_code"]')
        .type('167')
    cy.xpath('//*[@id="month"]').select('11')
        .should('have.value', '11')
    cy.xpath('//*[@id="year"]').select('2022')
        .should('have.value', '2022')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')

})


Cypress.Commands.add('americanExpress',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('375987654321001')
    cy.xpath('//*[@id="cvv_code"]')
        .type('754')
    cy.xpath('//*[@id="month"]').select('01')
        .should('have.value', '1')
    cy.xpath('//*[@id="year"]').select('2024')
        .should('have.value', '2024')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')


})

require('@cypress/xpath');

Cypress.Commands.add('getColorPP',(elementName, pageLink) => {

    cy.xpath('//*[@id="three"]/div/form/div[1]/div/font[1]') //Payment Process
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#9a9a9a')

    cy.xpath('//*[@id="three"]/div/form/div[1]/div/font[1]') //Pay Ammount
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#9a9a9a')

    cy.xpath('//*[@id="three"]/div/form/div[1]/div/font[2]') // $ Value
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#ff0000')

    cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[1]/h4') //We accept
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#555')

    cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[3]/h4') // Card Number
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#555')

    cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[5]/h4') //Expiration Month
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#555')


    cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[7]/h4') // Expiration Year
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#555')

    cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[9]/h4')// SVV Code
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#555')

    //
    // cy.xpath('//*[@id="main"]/div/form/div/div[16]/h3')
    //     .should('be.visible')
    //     .should('have.css', 'color').and('be.colored', '#25a2c3')
    //
    // cy.xpath('//*[@id="main"]/div/form/div/div[21]/h3')
    //     .should('be.visible')
    //     .should('have.css', 'color').and('be.colored', '#25a2c3')
    //
    // cy.xpath('//*[@id="main"]/div/form/div/div[26]/h3')
    //     .should('be.visible')
    //     .should('have.css', 'color').and('be.colored', '#25a2c3')
    //
    // cy.xpath('//*[@id="main"]/div/form/div/div[31]/h3')
    //     .should('be.visible')
    //     .should('have.css', 'color').and('be.colored', '#25a2c3')
    //
    // // cy.xpath('//*[@id="main"]/div/form/div/div[36]/ul/li[1]/input') //Button Submit
    // //     .should('be.visible')
    // //     .should('have.css', 'background-color')
    // //     .and('be.colored', '#f6755e')
    //
    // // cy.xpath('//*[@id="main"]/div/form/div/div[36]/ul/li[2]/input') //Button Reset
    // //     .should('be.visible')
    // //     .should('have.css', 'background-color')
    // //     .and('be.colored', '#ffffff')
    //
    // cy.xpath('//*[@id="navbar-brand-centered"]') //Header
    //     .should('be.visible')
    //     .should('have.css', 'color').and('be.colored', '#767d85')
});


Cypress.Commands.add('letters&SpecialCharacters',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('gkkpsf-/-')
    cy.xpath('//*[@id="cvv_code"]')
        .type('*+/-')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('fieldLen(max+1)',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('37598765432100100')
    cy.xpath('//*[@id="cvv_code"]')
        .type('9784')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('fieldLen(min)',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('3')
    cy.xpath('//*[@id="cvv_code"]')
        .type('9')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})
