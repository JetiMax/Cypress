describe("-Add Tariff Plans", () => {
    it("Digits in correct length (Digits.len+1)", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.maxLenField()
    })
});