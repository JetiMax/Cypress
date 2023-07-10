Cypress.Commands.add('getNavbarElement',(elementName, pageLink) => {
    cy.get('#navbar-brand-centered').then(jqElement => {
        cy.contains('a',elementName).click();
        cy.url().should('eq',pageLink);
        cy.go('back');
    })
})


require('@cypress/xpath');
Cypress.Commands.add('getDropdown', (elementName,pageName,ref,pageLink) => {
    cy.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/a',{timeout: 2000}).click();
    cy.get('[class="dropdown-menu"]').children().contains('a',pageName)
        .should('be.visible').and('have.attr','href',ref)
        .click()
    cy.url().should('eq',pageLink);
    cy.go('back');
})


Cypress.Commands.add('SEONavbarDropdown', (elementName,pageName,ref,pageLink) => {
    cy.xpath('//*[@id="navbar-brand-centered"]/ul/li[11]/a',{timeout: 2000}).click();
    cy.get('[class="dropdown-menu"]').children().contains('a',pageName)
        .should('be.visible').and('have.attr','href',ref)
        .click()
    cy.url().should('eq',pageLink);
    cy.go('back');
})


Cypress.Commands.add('getFieldInputATP',() => {
    cy.get('[name="rental"]')
        .should('be.visible')
        .type('12321')
    cy.get('[name="local_minutes"]')
        .should('be.visible')
        .type('12326')
    cy.get('[name="inter_minutes"]')
        .should('be.visible')
        .type('00000')
    cy.get('[name="sms_pack"]')
        .should('be.visible')
        .type('00000')
    cy.get('[name="minutes_charges"]')
        .should('be.visible')
        .type('012')
    cy.get('[name="inter_charges"]')
        .should('be.visible')
        .type('123')
    cy.get('[name="sms_charges"]')
        .should('be.visible')
        .type('0')
    cy.get('[type="submit"]')
        .should('be.visible').click();
    cy.go('back');
})


Cypress.Commands.add('getResetClearFieldDropdown',() => {
    cy.get('[name="rental"]')
        .should('be.visible')
        .type('12321')
    cy.get('name=["local_minutes"]')
        .should('be.visible')
        .type('12326')
        .should('have.value', '12326')
    cy.get('name=["inter_minutes"]')
        .should('be.visible')
        .type('00000')
    cy.get('[name="sms_pack"]')
        .should('be.visible')
        .type('00000')
    cy.get('[name="minutes_charges"]')
        .should('be.visible')
        .type('012')
    cy.get('[name="inter_charges"]')
        .should('be.visible')
        .type('123')
    cy.get('[name="sms_charges"]')
        .should('be.visible')
        .type('0')
    cy.get('[type="reset"]')
        .should('be.visible')
        .click()
    cy.get('[type="submit"]')
        .should('be.visible')
        .click();
})


Cypress.Commands.add('getColor',(elementName, pageLink) => {

    cy.xpath('//*[@id="header"]/nav/a[2]') //Guru 99 telecom
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#f6755e')

    cy.xpath('//*[@id="main"]/div/header/h1') //Add Tariff Plans
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[1]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[6]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[11]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[16]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[16]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[21]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[26]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    cy.xpath('//*[@id="main"]/div/form/div/div[31]/h3')
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#25a2c3')

    // cy.xpath('//*[@id="main"]/div/form/div/div[36]/ul/li[1]/input') //Button Submit
    //     .should('be.visible')
    //     .should('have.css', 'background-color')
    //     .and('be.colored', '#f6755e')

    // cy.xpath('//*[@id="main"]/div/form/div/div[36]/ul/li[2]/input') //Button Reset
    //     .should('be.visible')
    //     .should('have.css', 'background-color')
    //     .and('be.colored', '#000000')

    cy.xpath('//*[@id="navbar-brand-centered"]') //Header
        .should('be.visible')
        .should('have.css', 'color').and('be.colored', '#767d85')
});


Cypress.Commands.add('getplaceholder', (elementName, pageLink) => {
    cy.get('input[type="text"]')
        .each(($input) => {
            cy.wrap($input)
        })
        .should('be.visible')
        .should('have.attr', 'placeholder').and('not.be.empty')
});


Cypress.Commands.add('maxLenField', (elementName, pageLink) => {
    cy.get('input[type="text"]').should('be.visible')
        .each(($input) => {
            cy.wrap($input)
                .type('1579468')
            // .invoke('text').then((string) => {
            // expect(string.length).to.be.at.lessThan(5)
            // const val = $input
            //     expect(val.length).to.be.lessThan(4)
            // .should('have.value');

        })
});

Cypress.Commands.add('specialСharacters', (elementName, pageLink) => {
    cy.get('input[type="text"]').should('be.visible')
        .each(($input) => {
            cy.wrap($input)
                .type('+/-')
                .should('not.have.value', '+/-');
        })
});

Cypress.Commands.add('letters', (elementName, pageLink) => {
    cy.get('input[type="text"]').should('be.visible')
        .each(($input) => {
            cy.wrap($input)
                .type('Jok')
                .should('not.have.value', 'Jok')
        })

});