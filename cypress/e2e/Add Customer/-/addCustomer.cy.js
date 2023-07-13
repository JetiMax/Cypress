describe("Add Customer", () => {

    it("Add Customer With Empty Fields.cy", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.clearCookies()
        cy.log('Input fields')
        cy.getEmptyField()
    })
});

describe("Add Customer", () => {
    it("Notification when entering characters in the input field", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.log('Input fields')
        cy.numSpec()
    })
});