describe("Payment Process", () => {

    it("Correct Payment Process", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
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
        cy.americanExpress()
    })

    it("Dropdown expiration yard & month no clicable", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.expiration()
    })

    it("field Len(min/max) Card Number,CVV Code", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.lenPP()
    })

    it("Field dropdown Len(min/max) Expiration: Month,Year", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.lenMonthYear()
    })

});

