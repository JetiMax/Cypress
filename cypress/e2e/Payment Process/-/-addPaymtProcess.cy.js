describe("Add Payment Process", () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    });

    it("Add Payment Process Wrong Card Number", () => {
        cy.fixture('userFalse').then((user) => {
            cy.log('input fields')
            cy.get('[name="card_nmuber"]').type(user.CardNumber)
            cy.get('[name="cvv_code"]').type(user.CVV)
            cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
            cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
            cy.get('[name="submit"]')
                .click()
            cy.get('selector-pop-up')
                .should('have.text', 'wrong map value'); // fail not pop-up
        })
    });

    it("Add Payment Process Wrong CVV Code", () => {
        cy.xpath('//*[@id="card_nmuber"]').click({force: true})
            .type('4532375619520872')
        cy.xpath('//*[@id="cvv_code"]')
            .type('16')
        cy.get('[name="month"]')
            .select('11')
            .should('have.value', '11')
        cy.get('[name="year"]')
            .select('2022')
            .should('have.value', '2022')
        cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
            .should('be.visible').click()
        cy.get('selector-pop-up')
            .should('have.text', 'wrong map value'); // fail not pop-up
    });


    it("Add Payment Process card expired", () => {
        cy.fixture('expiredCard').then((user) => {
            cy.log('input fields')
            cy.get('[name="card_nmuber"]').type(user.CardNumber)
            cy.get('[name="cvv_code"]').type(user.CVV)
            cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
            cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
            cy.get('[name="submit"]')
                .click()
            cy.get('selector-pop-up')
                .should('have.text', 'cardExpired'); // fail not pop-up
        })
    });

    it("check. 15-digit card number with a space at the end", () => {
        cy.fixture('expiredCard').then((user) => {
            cy.log('input fields')
            cy.get('[name="card_nmuber"]').type(user.CardNumberWhitespace1)
            cy.get('[name="cvv_code"]').type(user.CVV)
            cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
            cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
            cy.get('[name="submit"]')
                .click()
            cy.url()
                .should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
        })
    });

    it("Add Payment with Pay Ammount $0.00", () => {
        cy.clearCookies()
        cy.fixture('userFalse').then((user) => {
            cy.log('input fields')
            cy.get('[name="card_nmuber"]').type(user.CardNumber)
            cy.get('[name="cvv_code"]').type(user.CVV)
            cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
            cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
            cy.get('[name="submit"]')
                .click()
            cy.get('selector-pop-up')
                .should('have.text', 'add the product to add'); // fail not pop-up
        })
    })

    it("check. two-digit SVV code with a White space at the beginning", () => {
        cy.fixture('expiredCard').then((user) => {
            cy.log('input fields')
            cy.get('[name="card_nmuber"]').type(user.CardNumber)
            cy.get('[name="cvv_code"]').type(user.CVVZero)
            cy.xpath('//*[@id="month"]').select(user.ExpirationMonth)
            cy.xpath('//*[@id="year"]').select(user.ExpirationYear)
            cy.get('[name="submit"]')
                .click()
            cy.url()
                .should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
        })
    });
});



