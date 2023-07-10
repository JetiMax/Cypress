import chaiColors from 'chai-colors'
chai.use(chaiColors)


describe("Ui color", () => {

    it("color", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('page')
        cy.getColor('color', 'https://demo.guru99.com/insurance/v1/index.php')
    })
})
