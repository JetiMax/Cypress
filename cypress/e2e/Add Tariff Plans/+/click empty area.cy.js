describe("empty area", () => {

    it("Checking click empty area ", () => {
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php');
        const x = 300;
        const y = 300;
        cy.get('body').click(x, y);
        cy.url()
            .should('https://demo.guru99.com/telecom/addtariffplans.php')
    })
});