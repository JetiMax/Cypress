describe("Payment Process", () => {

    it("Correct Payment Process", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.getCorrectPP()
    })

    it("Checking, click empty area", () => {
        cy.visit('https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
        const x = 300;
        const y = 300;
        cy.get('body').click(x, y);
        cy.url()
            .should('https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
    })

    it("Correct Payment Process AmericanExpress ", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.americanExpress()
    })

    it("Dropdown expiration yard & month no clicable", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.expiration()
    })

    it("fieldLen(max+1)", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.fieldLen(max+1)()
    })

    it("fieldLen(min)", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.fieldLen(min)()
    })
});

