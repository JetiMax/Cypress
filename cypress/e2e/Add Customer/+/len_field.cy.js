describe("len add Customer", () => {
    it("len)", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addcustomer.php")
        cy.len()
    })
});