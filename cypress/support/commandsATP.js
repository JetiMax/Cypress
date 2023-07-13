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


Cypress.Commands.add('styleATP',(elementName, pageLink) => {

    cy.log('Logo GURU99')
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div[1]/a/img')
        .should('have.css', 'font-size', '14px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '20px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');


    cy.log('Demo Site')
    cy.xpath('//*[@id="site-name"]/a')
        .should('have.css', 'font-size', '32px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '45.7143px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 51, 51)');

    cy.log('GURU99 telekom')
    cy.xpath('//*[@id="header"]/nav/a[2]')
        .should('have.css', 'font-size', '37px')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'line-height', '88px')
        .should('have.css', 'font-family', 'Pacifico, cursive')
        .should('have.css', 'border-bottom-color', 'rgb(246, 117, 94)');

    cy.log('Add Tariff Plans')
    cy.xpath('//*[@id="main"]/div/header/h1')
        .should('have.css', 'font-size', '29px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '38px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');


    cy.log('Monthly Rental')
    cy.xpath('//*[@id="main"]/div/form/div/div[1]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

    cy.log('Free Local Minutes')
    cy.xpath('//*[@id="main"]/div/form/div/div[6]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');


    cy.log('Free International Minutes')
    cy.xpath('//*[@id="main"]/div/form/div/div[11]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');


    cy.log('Local Per Minutes Charges')
    cy.xpath('//*[@id="main"]/div/form/div/div[21]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');


    cy.log('International Per Minutes Charges')
    cy.xpath('//*[@id="main"]/div/form/div/div[26]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color','rgb(37, 162, 195)');


    cy.log('SMS Per Charges')
    cy.xpath('//*[@id="main"]/div/form/div/div[31]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');


    cy.log('Free SMS Pack')
    cy.xpath('//*[@id="main"]/div/form/div/div[16]/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

    cy.log('dropdown')
    cy.get('li[class="dropdown"]')
        .each(($li) => {
            cy.wrap($li)
        })
        .should('have.css', 'font-size', '14px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '20px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(118, 125, 133)');

    cy.log('Testing')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[1]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '25.7143px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');


    cy.log('Selenium')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[2]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '25.7143px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Live Project')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[3]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '25.7143px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Java')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[4]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '25.7143px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Left menu')
    cy.xpath('//*[@id="header"]/nav/a[1]')
        .should('be.visible')
        .should('have.css', 'font-size', '28px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '84px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(222, 225, 227)');

    cy.log('button Reset')
    cy.xpath('//*[@id="main"]/div/form/div/div[36]/ul/li[2]/input')
        .should('be.visible')
        .should('have.css', 'font-size', '14px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '49px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'border-bottom-color', 'rgb(114, 122, 130)');


    cy.log('button SUBMIT')
    cy.xpath('//*[@id="main"]/div/form/div/div[36]/ul/li[1]/input')
        .should('be.visible')
        .should('have.css', 'font-size', '14px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '49px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'background-color', 'rgb(246, 117, 94)')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)');

    cy.log('Input fields')
    cy.get('input[type="text"]')
        .each(($input) => {
            cy.wrap($input)
                .should('have.css', 'border-top-color', 'rgb(222, 225, 227)')
                .should('have.css', 'background-color', 'rgba(144, 144, 144, 0.075)');
        })
});