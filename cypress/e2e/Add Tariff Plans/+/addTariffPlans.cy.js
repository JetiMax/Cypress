describe("Add Tariff Plans", () => {

    it("Add Tariff Plans", () => {
        cy.log("AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.log('Input fields')
        cy.getFieldInputATP()
    })

    it("Checking click empty area ", () => {
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php');
        const x = 300;
        const y = 340;
        cy.get('body').click(x, y);
        cy.url()
            .should('eq','https://demo.guru99.com/telecom/addtariffplans.php')
    })

    it("getplaceholder", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('placeholder')
        cy.getplaceholder('text placeholder', 'https://demo.guru99.com/insurance/v1/index.php')
    })

    it("ResetClearField", () => {
        cy.log("Open AddTariffPlans");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
        cy.getResetClearFieldDropdown('Button reset clear field on frontend')
    })
});