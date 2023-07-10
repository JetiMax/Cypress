describe("Add Customer", () => {

    it("Correct Add Customer", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.log('Input fields')
        cy.addcustomer('Correct Add Customer')
    })
})