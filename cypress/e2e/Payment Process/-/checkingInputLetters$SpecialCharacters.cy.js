describe("Payment Process", () => {

    it("Letters&SpecialCharacters", () => {
        cy.log("Open Payment Process");
        cy.visit("https://demo.guru99.com/payment-gateway/process_purchasetoy.php")
        cy.log('Input fields')
        cy.letters&SpecialCharacters()
    })
})