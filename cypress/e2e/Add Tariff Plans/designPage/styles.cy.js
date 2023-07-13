describe("Styles", () => {

    it("Checking color,font-size, font-weight, line-height, font-family", () => {
        cy.log("Home page open ");
        cy.viewport(1280, 1080); // Устанавливаем размер окна
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php');
        cy.log('page')
        cy.styleATP('top', 'https://demo.guru99.com/telecom/addtariffplans.php')
    })
})
