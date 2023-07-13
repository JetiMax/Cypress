describe("Reset", () => {
    it("ResetClearField", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.getResetClearFieldDropdown('Button reset clear field on frontend')

    })
});
