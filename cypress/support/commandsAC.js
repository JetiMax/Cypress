Cypress.Commands.add('addcustomerDone',(elementName,pageName,pageLink) => {

    cy.xpath('//*[@id="main"]/div/form/div/div[1]/label')
        .should('be.visible')
        .click()

    cy.xpath('//*[@id="fname"]')
        .type('Jekson')

    cy.xpath('//*[@id="lname"]')
        .type('Pollock')

    cy.xpath('//*[@id="email"]')
        .type('Jekpoll@yahoo.com')

    cy.xpath('//*[@id="main"]/div/form/div/div[7]')
        .type('47 Horatio Street ')

    cy.xpath('//*[@id="telephoneno"]')
        .type('+54929821234')

    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
        .should('be.visible')
        .click()
    cy.log("There is a uid in the address bar")
    cy.url()
        .should('include', 'uid')

    cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[1]/td[2]/h3')
        .invoke('text')
        .then((text) => {
            {CustomerID = text}
            var CustomerID = text;

            cy.visit('https://demo.guru99.com/telecom/billing.php');
            cy.xpath('//*[@id="customer_id"]')
                .type(`${CustomerID}`, {delay: 100})

            cy.xpath('//*[@id="main"]/div/form/div/div[6]/input')
                .click()

            cy.xpath('//*[@id="main"]/div/h3',{ timeout: 10000 })
                .should(($h3) => {
                    const text = $h3.text().trim();
                    const regex = /Customer ID:-\s*(\d+)/;
                    const match = text.match(regex);
                    expect(match[0]).to.equal( 'Customer ID:-' + CustomerID);
                })
        })
});


Cypress.Commands.add('addcustomerPending', (elementName, pageName, pageLink) => {

    cy.xpath('///*[@id="pending"]')
        .should('be.visible')
        .click({force: true})

    cy.xpath('//*[@id="fname"]')
        .type('Jekson')

    cy.xpath('//*[@id="lname"]')
        .type('Pollock')

    cy.xpath('//*[@id="email"]')
        .type('Jekpoll@yahoo.com')

    cy.xpath('//*[@id="main"]/div/form/div/div[7]')
        .type('47 Horatio Street ')

    cy.xpath('//*[@id="telephoneno"]')
        .type('+54929821234')

    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
        .should('be.visible')
        .click()
    cy.log("There is a uid in the address bar")

    cy.url().should('include', 'uid')
    cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[1]/td[2]/h3')
        .invoke('text')
        .then((text) => {
            {CustomerIDPend = text}

            var CustomerIDPend = text;

            cy.visit('https://demo.guru99.com/telecom/billing.php');
            cy.xpath('//*[@id="customer_id"]')
                .type(`${CustomerIDPend}`, {delay: 100})

            cy.xpath('//*[@id="main"]/div/form/div/div[6]/input')
                .click()

            cy.xpath('//*[@id="main"]/div/h3')
                .should(($h3) => {
                    const text = $h3.text().trim();
                    const regex = /Customer ID:-\s*(\d+)/;
                    const match = text.match(regex);
                    expect(match[0]).to.equal('Customer ID:-' + CustomerIDPend);
                })
        })
});


Cypress.Commands.add('done', (elementName, pageName, pageLink) => {
    cy.log("radiobutton visible");
    cy.xpath('//*[@id="main"]/div/form/div/div[1]/label').as('DoneBtn')
        .click()
    cy.get('@DoneBtn')
        .should('be.visible');
});


Cypress.Commands.add('len', (elementName, pageLink) => {

    const fields = [
        {
            selector: '[name="fname"]',
            minLength: 3,
            maxLenght: 10
        },
        {
            selector: '[name="lname"]',
            minLength: 3,
            maxLenght: 10
        },
        {
            selector: '[name="emailid"]',
            minLength: 3,
            maxLenght: 25
        },
        {
            selector: '[name="addr"]',
            minLength: 3,
            maxLenght: 137
        },
        {
            selector: '[name="telephoneno"]',
            minLength: 3,
            maxLenght: 14
        }
    ];

    fields.forEach((field) => {
        cy.log("minLength");
        cy.get(field.selector)
            .should('be.visible')
            .clear()
            .type('aaa'.repeat(field.minLength - 1))
            .should('not.have.value', 'aa'
                .repeat(field.minLength - 1))

        fields.forEach((field) => {
            cy.log("maxLength");
            cy.get(field.selector)
                .should('be.visible')
                .clear()
                .type('aaa'.repeat(field.minLength + 1))
                .should('not.have.value', 'a'.repeat(field.minLength + 1))
        })
    })
});

Cypress.Commands.add('num&spec', (elementName, pageLink) => {

    cy.log('field First name')
    cy.get('[name="fname"]')
        .should('be.visible')
        .type('12321')
    cy.xpath('//*[@id="message"]')
        .should('have.text', 'Numbers are not allowed')
    cy.focused().clear()
    cy.get('[name="fname"]')
        .type('+')
    cy.xpath('//*[@id="message"]')
        .should('have.text', 'Special characters are not allowed')

    cy.log('field Last name')
    cy.get('[name="lname"]')
        .should('be.visible')
        .type('12321')
    cy.xpath('//*[@id="message50"]')
        .should('have.text', 'Numbers are not allowed')
    cy.focused().clear()
    cy.get('[name="lname"]')
        .type('+')
    cy.xpath('//*[@id="message"]')
        .should('have.text', 'Special characters are not allowed')

    cy.log('field email')
    cy.get('[name="emailid"]')
        .should('be.visible')
        .type('12321')
    cy.get('[id="message9"]')
        .should('have.text', 'Email-ID is not valid')
    cy.focused().clear()
    cy.get('[name="emailid"]')
        .type('+-+')
    cy.xpath('//*[@id="message"]')
        .should('have.text', 'Special characters are not allowed')

    cy.log('field tel number')
    cy.get('[name="telephoneno"]')
        .should('be.visible')
        .type('a')
    cy.xpath('//*[@id="message7"]')
        .should('have.text', 'Characters are not allowed')
    cy.focused().clear()
    cy.get('[name="telephoneno"]')
        .type('///')
    cy.xpath('//*[@id="message"]')
        .should('have.text', 'Special characters are not allowed')

    cy.log('field address')
    cy.get('[name="addr"]')
        .should('be.visible')
        .type('----')
    cy.xpath('//*[@id="message7"]')
        .should('have.text', 'Special characters are not allowed')
});


Cypress.Commands.add('buttonReset', (elementName, pageName, pageLink) => {

    cy.xpath('//*[@id="main"]/div/form/div/div[1]/label')
        .should('be.visible')
        .click()

    cy.log('Entry field')
    cy.xpath('//*[@id="fname"]')
        .type('Jekson')

    cy.xpath('//*[@id="lname"]')
        .type('Pollock')

    cy.xpath('//*[@id="email"]')
        .type('Jekpoll@yahoo.com')

    cy.xpath('//*[@id="main"]/div/form/div/div[7]')
        .type('47 Horatio Street ')

    cy.xpath('//*[@id="telephoneno"]')
        .type('+54929821234')

    cy.log('button Reset')
    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[2]/input')
        .should('be.visible')
        .click()

    cy.log('button Submit')
    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
        .should('be.visible')
        .click()
    cy.log("Checking that we are on the page")
    cy.url()
        .should('https://demo.guru99.com/telecom/addcustomer.php')
});


Cypress.Commands.add('emptyField', (elementName, pageName, pageLink) => {
    cy.log('button Submit')
    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
        .should('be.visible')
        .click()
    cy.log("Checking that we are on the page")
    cy.url()
        .should('https://demo.guru99.com/telecom/addcustomer.php')
});


Cypress.Commands.add('top',(elementName, pageLink) => {

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

    cy.log('Add Customer')
    cy.xpath('//*[@id="main"]/div/header/h1')
        .should('have.css', 'font-size', '29px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '38px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

    cy.log('Background Check')
    cy.xpath('//*[@id="main"]/div/form/h3')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '27px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

    cy.log('Billing address')
    cy.xpath('//*[@id="main"]/div/form/div/div[3]/h3')
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
        .should('have.css', 'font-size', '28px')
        .should('have.css', 'font-weight', '700')
        .should('have.css', 'line-height', '84px')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(222, 225, 227)');


    cy.log('radiobutton Done')
    cy.xpath('//*[@id="done"]')
        .should('have.css', 'font-size', '15px')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'line-height', 'normal')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(118, 125, 133)');


    cy.log('radiobutton Pending')
    cy.xpath('//*[@id="pending"]')
        .should('have.css', 'font-size', '15px')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'line-height', 'normal')
        .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(118, 125, 133)');

    cy.log('button Reset')
    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[2]/input')
        .should('have.css', 'font-size', '15px')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'line-height', '52.5px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'border-bottom-color', 'rgb(114, 122, 130)');


    cy.log('button SUBMIT')
    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
        .should('have.css', 'font-size', '15px')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'line-height', '52.5px')
        .should('have.css', 'font-family', 'Montserrat, sans-serif')
        .should('have.css', 'background-color', 'rgb(246, 117, 94)')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)')

    cy.log('Input fields')
    cy.get('input[type="text"]')
        .each(($input) => {
            cy.wrap($input)
                .should('have.css', 'border-top-color', 'rgb(222, 225, 227)')
                .should('have.css', 'background-color', 'rgba(144, 144, 144, 0.075)');
        })
});

Cypress.Commands.add('leftMenu', (elementName, pageName, pageLink) => {
    cy.log("radiobutton visible");
    cy.xpath('//*[@id="header"]/nav/a[1]')
        .click()
        cy.get('nav[id="menu"]')
        .should('be.visible');
});