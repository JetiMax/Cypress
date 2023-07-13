describe("placeholder", () => {

    it("getplaceholder", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('placeholder')
        cy.getplaceholder('text placeholder', 'https://demo.guru99.com/insurance/v1/index.php')
    })
});
