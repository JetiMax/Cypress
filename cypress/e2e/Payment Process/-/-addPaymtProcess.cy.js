describe("Add Payment Process", () => {

    it("Add Payment Process Wrong Card Number", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.wrongCardNumber()
    })

    it("Add Payment Process Wrong CVV Code", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.wrongCvv()
    })

    it("Add Payment Process card expired", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.cardExpired()
    })


    it("Input field message: invalid value", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.сharactersSpecialСharacters()
    })

    it("Len fields input", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.fieldLen()
    })


});
