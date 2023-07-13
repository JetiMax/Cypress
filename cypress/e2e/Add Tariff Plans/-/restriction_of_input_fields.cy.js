describe("Restriction of input fields", () => {

    it("Restriction of input fields, special characters are not allowed", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('specialСharacters')
        cy.specialСharacters()
    })

    it("Restriction of input fields, characters are not allowed", () => {
        cy.log("Characters are not allowed ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('characters')
        cy.letters()
    })
});