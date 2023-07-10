describe("Radiobutton", () => {

    it("Pressed Done", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.log('Input fields')
        cy.done('Correct Add Customer')
    })
})