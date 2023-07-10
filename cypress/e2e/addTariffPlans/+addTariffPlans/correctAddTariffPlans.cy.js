describe("+Add Tariff Plans", () => {

    it("Digits correct length", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.log('Input fields')
        cy.getFieldInputATP('Congratulation you add Tariff Plan')
    })
})