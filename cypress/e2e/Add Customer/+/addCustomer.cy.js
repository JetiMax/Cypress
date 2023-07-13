describe("Add Customer", () => {

    it("Add Customer Done & CheckingID.cy", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.log('Input fields')
        cy.addcustomerDone()
    })

    it("Add Customer Pending & CheckingID.cy", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.log('Input fields')
        cy.addcustomerPending()
    })

    it("Checking click empty area", () => {
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
        const x = 300;
        const y = 300;
        cy.get('body').click(x, y);
        cy.url()
            .should('eq', 'https://demo.guru99.com/telecom/addcustomer.php')
    })

    it("Checking the field length (min/max)", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.len()
    })

    it("Pressed Done visible", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.done()
    })

    it("Checking that the Button Reset clears the Input Fields on the Backend", () => {
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.buttonReset()
    })

    it("Left Menu open",() =>{
        cy.log("Open page");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.leftMenu()
    })
})