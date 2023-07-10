// describe("Tours page", () =>{
//
//     it("T123 Login Tours", () => {
//         cy.log("Open Tours page");
//         cy.visit("https://demo.guru99.com/test/newtours/");
//         cy.get('[name="userName"]')
//             .should('be.visible')
//             .type('Text')
//         cy.get('[href="index.html"]')
//             .should('be.visible')
//             .type('123456')
//         cy.get('[name="submit"]')
//             .should('be.visible')
//             .should('have.value','Submit')
//             .click();
//             // .should('have.css','color', 'rgb (51, 51, 51)');
//
//     })
// })


describe("placeholder", () => {

    it("getplaceholder", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('placeholder')
        cy.getplaceholder('text placeholder', 'https://demo.guru99.com/insurance/v1/index.php')
    })
});



