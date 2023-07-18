describe("Add Customer", () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
    });


    it("Empty Fields.cy", () => {
        cy.log("Open page");
        cy.log('button Submit')
        cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
            .click()
        cy.url()
            .should('eq', 'https://demo.guru99.com/telecom/addcustomer.php')  // fail: user goes to another page
    })

    it("negative users", () => {
        cy.log("Open page");
        cy.fixture('userFalse').then((user) => {
            cy.get('[name="fname"]').type(user.fname)
            cy.get('[name="lname"]').type(user.lname)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})

            cy.log('button Submit')
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
        })
        cy.get('selector-pop-up')
            .should('have.text', 'incorrect input'); //fail not pop-up
    })


    it('incorrect email',() =>{
        cy.fixture('userInc').then((user) => {
            cy.get('[name="fname"]').type(user.fname1)
            cy.get('[name="lname"]').type(user.lname1)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.get('selector-pop-up')
                .should('have.text', 'Часть адреса после символа @ не должна содержать @')
        })
    })

    it('incorrect First name: Field should remove the space before and after the text',() => {
        cy.fixture('userInc').then((user) => {
            cy.get('[name="fname"]').type(user.fname)
            cy.get('[name="lname"]').type(user.lname1)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[2]/td/b')
                .should('have.text', 'Please Note Down Your CustomerID')
        })
    })

    it('incorrect Last name:Field should remove the space before and after the text',() => {
        cy.fixture('userInc').then((user) => {
            cy.get('[name="fname"]').type(user.fname1)
            cy.get('[name="lname"]').type(user.lname)
            cy.get('[name="emailid"]').type(user.email)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[2]/td/b')
                .should('have.text', 'Please Note Down Your CustomerID')
        })
    })

    it('address field can be used /',() => {
        cy.fixture('userInc').then((user) => {
            cy.get('[name="fname"]').type(user.fname1)
            cy.get('[name="lname"]').type(user.lname1)
            cy.get('[name="emailid"]').type(user.email1)
            cy.get('[name="addr"]').type(user.address)
            cy.get('[name="telephoneno"]').type(user.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[2]/td/b')
                .should('have.text', 'Please Note Down Your CustomerID')
        })
    })

    it('mobile number with 1 character +',() => {
        cy.fixture('userInc').then((userInc) => {
            cy.get('[name="fname"]').type(userInc.fname1)
            cy.get('[name="lname"]').type(userInc.lname1)
            cy.get('[name="emailid"]').type(userInc.email1)
            cy.get('[name="addr"]').type(userInc.address1)
            cy.get('[name="telephoneno"]').type(userInc.mobile);
            cy.xpath('//*[@id="done"]')
                .click({force: true})
            cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
                .click()
            cy.xpath('//*[@id="main"]/div/div/table/tbody/tr[2]/td/b')
                .should('have.text', 'Please Note Down Your CustomerID')
        })
    })
});