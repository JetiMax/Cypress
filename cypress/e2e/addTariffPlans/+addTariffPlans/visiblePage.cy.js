describe("AddTariffPlans visible", () =>{

    it("Visble page", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.get('[href="index.html"]')
            .should('be.visible')
    })
})