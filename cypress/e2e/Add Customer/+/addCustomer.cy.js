describe("Add Customer", () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
    });

    it('Add Customer, Done', function () {
        cy.log('Input fields')
        cy.fixture('userTrue').then((user) => {
            cy.get('[name="fname"]').type(user.fname)
            cy.get('[name="lname"]').type(user.lname)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[1]/td[2]/h3')
                .invoke('text')
                .then((text) => {
                    {
                        CustomerID = text
                    }
                    var CustomerID = text;

                    cy.visit('https://demo.guru99.com/telecom/billing.php');
                    cy.xpath('//*[@id="customer_id"]')
                        .type(`${CustomerID}`, {delay: 100})
                    cy.xpath('//*[@id="main"]/div/form/div/div[6]/input')
                        .click()
                    cy.xpath('//*[@id="main"]/div/h3', {timeout: 10000})
                        .should(($h3) => {
                            const text = $h3.text();
                            const regex = /Customer ID:-\s*(\d+)/;
                            const match = text.match(regex);
                            console.log("Text:", text);
                            console.log('Expected: Customer ID:-' + CustomerID.trim());
                            console.log('Actual: ' + match[0]);
                            expect(match[0]).to.equal('Customer ID:-' + CustomerID.trim()
                                .replace(/\s/g, '')); //fail +__ CustomerID
                        })
                })
        })
    });

    it('Add Customer, Pending', function () {
        cy.log('Input fields')
        cy.fixture('userTrue').then((user) => {
            cy.get('[name="fname"]').type(user.fname)
            cy.get('[name="lname"]').type(user.lname)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="pending"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.log('contain, <srtong> Please Note Down Your CustomerID </srtong>')
            cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[2]/td/b')
                .should('be.visible').and('contain', 'Please Note Down Your CustomerID')
        })
    })

    it("Pending & CheckingID.cy", () => {
        cy.log("radiobutton visible");
        cy.xpath('//*[@id="main"]/div/form/div/div[1]/label').as('DoneBtn')
            .click()
        cy.get('@DoneBtn')
            .should('be.visible');
    });

    it("Checking click empty area", () => {
        const x = 300;
        const y = 350;
        cy.get('body').click(x, y);
        cy.url()
            .should('eq', 'https://demo.guru99.com/telecom/addcustomer.php')
    })// fail


    it("Checking the field length (min/max)", () => {
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
                maxLenght: 10
            },
            {
                selector: '[name="addr"]',
                minLength: 3,
                maxLenght: 10
            },
            {
                selector: '[name="telephoneno"]',
                minLength: 3,
                maxLenght: 12
            }
        ];

        fields.forEach((field) => {
            cy.log("minLength");
            cy.get(field.selector)
                .should('be.visible')
                .clear()
                .type('a'.repeat(field.minLength - 1))
                .should('not.have.value', 'aa'
                    .repeat(field.minLength - 1))
        })

        fields.forEach((field) => {
            cy.log("maxLength");
            cy.get(field.selector)
                .should('be.visible')
                .clear()
                .type('a'.repeat(field.maxLenght + 1))
                .should('not.have.value', 'aaaaaaaaaaa'.repeat(field.maxLenght + 1))
        })
    }) // Переделать  через for


    it("Checking that the Button Reset clears the Input Fields on the Backend", function () {
        cy.fixture('userTrue').then((user) => {
            cy.get('[name="fname"]').type(user.fname)
            cy.get('[name="lname"]').type(user.lname)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);

            cy.xpath('//*[@id="done"]').click({force: true})
            cy.log('reset button')
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[2]/input').click()
            cy.log('submit button')
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input').click()
            cy.get('selector-pop-up')
                .should('have.text', 'incorrect input'); //fail not pop-up
        })
    });


    it("Left Menu open", () => {
        cy.log("Left Menu");
        cy.xpath('//*[@id="header"]/nav/a[1]').click()
        cy.get('nav[id="menu"]')
            .should('be.visible');
    })


    it("Notification when entering characters in the input field", () => {
        cy.log('field First name')
        cy.get('[name="fname"]')
            .type('12321')
        cy.xpath('//*[@id="message"]')
            .should('have.text', 'Numbers are not allowed')
        cy.focused().clear()
        cy.get('[name="fname"]')
            .type('+')
        cy.xpath('//*[@id="message"]')
            .should('have.text', 'Special characters are not allowed')
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
    })
});