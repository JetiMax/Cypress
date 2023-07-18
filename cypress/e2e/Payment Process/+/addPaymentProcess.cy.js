describe("Payment Process", () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    });

    it("Correct Payment Process", () => {
        cy.fixture('userTrue')
            .then((user) => {
                cy.get('[name="card_nmuber"]').type(user.CardNumber)
                cy.get('[name="cvv_code"]').type(user.CVV)
                cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
                cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
                cy.get('[name="submit"]')
                    .click()
                cy.log('contain, <srtong> Please Note Down Your OrderID </srtong>')
                cy.xpath('//*[@id="three"]/div/div/table/tbody/tr[2]/td/strong')
                    .should('be.visible').and('contain', 'Please Note Down Your OrderID')
            })
    })

    it("Checking, click empty area", () => {
        const x = 300;
        const y = 300;
        cy.get('body').click(x, y);
        cy.url()
            .should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
    })


    it("Correct Payment Process AmericanExpress ", () => {
        cy.fixture('cardAmericanExp').then((user) => {
            cy.log('input field')
            cy.get('[name="card_nmuber"]').type(user.CardNumber)
            cy.get('[name="cvv_code"]').type(user.CVV)
            cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
            cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
            cy.get('[name="submit"]')
                .click()
            cy.get('https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
            cy.log('contain, <srtong> Please Note Down Your OrderID </srtong>')
            cy.xpath('//*[@id="three"]/div/div/table/tbody/tr[2]/td/strong')
                .should('be.visible')
                .and('contain', 'Please Note Down Your OrderID')
        })
    })

    it("Dropdown expiration yard & month no clicable", () => {
        cy.xpath('//*[@id="month"]').select('Month')
            .should('not.be.select', 'Month')
        cy.xpath('//*[@id="year"]').select('Year')
            .should('not.be.select', 'Year')
    });// ????

    it("Input field message: invalid value", () => {
        cy.log('input card num')
        cy.xpath('//*[@id="card_nmuber"]')
            .click({force: true})
            .type('-/-')
        cy.xpath('//*[@id="message1"]')
            .should('have.text', 'Special characters are not allowed')
        cy.focused().clear()
        cy.xpath('//*[@id="card_nmuber"]')
            .type('fff')
        cy.xpath('//*[@id="message1"]')
            .should('have.text', 'Characters are not allowed')
        cy.log('input cvv code')
        cy.xpath('//*[@id="cvv_code"]')
            .click({force: true})
            .type('-/-')
        cy.xpath('//*[@id="message1"]')
            .should('have.text', 'Characters are not allowed')
        cy.focused().clear()
        cy.xpath('//*[@id="cvv_code"]')
            .type('fff')
        cy.xpath('//*[@id="message2"]')
            .should('have.text', 'Characters are not allowed');
    });

    it("Field dropdown Len(min/max) Expiration: Month,Year", () => {
        cy.get('select[name="month"]')
        cy.wrap({option: 'value'})
            .its('option')
            .should('eq', 'value')

        cy.get('select[name="year"]')
        cy.wrap({option: 'value'})
            .its('option')
            .should('eq', 'value')
    })

    it("сharactersSpecialСharacters", () => {
        cy.log('input card num')
        cy.xpath('//*[@id="card_nmuber"]')
            .click({force: true})
            .type('-/-')
        cy.xpath('//*[@id="message1"]')
            .should('have.text', 'Special characters are not allowed')
        cy.focused().clear()
        cy.xpath('//*[@id="card_nmuber"]')
            .type('fff')
        cy.xpath('//*[@id="message1"]')
            .should('have.text', 'Characters are not allowed')
        cy.log('input cvv code')
        cy.xpath('//*[@id="cvv_code"]')
            .click({force: true})
            .type('-/-')
        cy.xpath('//*[@id="message1"]')
            .should('have.text', 'Characters are not allowed')
        cy.focused().clear()
        cy.xpath('//*[@id="cvv_code"]')
            .type('fff')
        cy.xpath('//*[@id="message2"]')
            .should('have.text', 'Characters are not allowed');
    })

    it("check the location of objects on the page, win size 890/961", () => {
        cy.viewport(890, 961)
        cy.log('location')
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[1]/h4')
            .should('have.css','left'); // Проверяем значение свойства 'left' элемента We accept
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[3]/h4')
            .should('have.css','left'); // Проверяем значение свойства 'left' элемента Card Number
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[5]/h4')
            .should('have.css','left'); // Проверяем значение свойства 'left' элемента Expiration Month
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[7]/h4')
            .should('have.css','left'); // Проверяем значение свойства 'left' элемента Expiration Year
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/div[9]/h4')
            .should('have.css','left'); // Проверяем значение свойства 'left' элемента CVV Code
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
            .should('have.css','left'); // Проверяем значение свойства 'left' элемента button pay
        cy.get('[name="card_nmuber"]')
            .should('have.css', 'position', 'static'); // Проверяем значение свойства 'position' field card number
        cy.get('[name="month"]')
            .should('have.css', 'position', 'static');// Проверяем значение свойства 'position' элемента month
        cy.get('[name="year"]')
            .should('have.css', 'position', 'static'); // Проверяем значение свойства 'position' элемента dropdown year
        cy.get('[name="cvv_code"]')
            .should('have.css', 'position', 'static'); // Проверяем значение свойства 'position' элемента field css
        cy.xpath('//*[@id="three"]/div/header/h2')
            .should('have.css', 'position', 'static');//Проверяем значение свойства 'position' элемента Payment Process
    })
});


