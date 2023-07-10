describe("Payment Process", () => {

    it("fieldLen(max+1)", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.fieldLen(max+1)()
    })
});