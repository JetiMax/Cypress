describe("Reset", () => {
    it("ResetClearField", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.getResetClearFieldDropdown('Button reset clear field on frontend')
        cy.url().should('eq','https://demo.guru99.com/telecom/addtariffplans.php')
        cy.xpath('//*[@id="main"]/div/form/div/div[1]/h3') // Monthly Rental
            .should('be.visible')
    })
});
