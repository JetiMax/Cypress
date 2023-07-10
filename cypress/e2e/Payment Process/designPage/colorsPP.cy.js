import chaiColors from 'chai-colors'
chai.use(chaiColors)


describe("Ui color", () => {

    it("color", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php");
        cy.log('page')
        cy.getColorPP()
    })
})
