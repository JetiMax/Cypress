require('@cypress/xpath');




// describe("-Add Tariff Plans", () => {
//     it("Special characters", () => {
//         cy.log("Open AddTariffPlans");
//         cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
//         cy.get('[name="rental"]')
//             .should('be.visible')
//             .type('+')
//         cy.get('[name="local_minutes"]')
//             .should('be.visible')
//             .type('-')
//         cy.get('[name="inter_minutes"]')
//             .should('be.visible')
//             .type('/')
//         cy.get('[name="sms_pack"]')
//             .should('be.visible')
//             .type('+')
//         cy.get('[name="minutes_charges"]')
//             .should('be.visible')
//             .type('@')
//         cy.get('[name="inter_charges"]')
//             .should('be.visible')
//             .type('!')
//         cy.get('[name="sms_charges"]')
//             .should('be.visible')
//             .type('&')
//         cy.get('[type="submit"]')
//             .should('be.visible').click();
//     })
// })
//
//
// describe("- in correct str", () => {
//     it("Monthly Rental/Special symbol ", () => {
//         cy.log("Open AddTariffPlans");
//         cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
//
//         cy.get('[name="rental"]')
//             .should('be.visible')
//             .type('12321')
//         cy.get('[type="submit"]')
//             .should('be.visible')
//             .click()
//         cy.get('[type="submit"]')
//             .should('be.visible')
//             .click()
//         //Running the code snippet to generate the Popup button
//         cy.get('#runbtn', {timeout: 90000}).click();
//         //Accessing the popup button iframe and clicking the popup activation button
//         cy.xpath('//iframe[@id="iframeResult"]').its('0.contentDocument.body').then(cy.wrap).xpath('//button[text()="Try it"]').click();
//         // Checking the window alert text
//         cy.on('window:alert', (txt) => {
//             //Assertion
//         expect(txt).to.contains('please fill all fields Correct Value')
//
//         })
//     })
//
//
//
// describe("- in correct str *", () => {
//     it("Free Local Minutes/Special symbol ", () => {
//         cy.log("Open AddTariffPlans");
//         cy.visit("https://demo.guru99.com/telecom/addtariffplans.php")
//         cy.get('[name="local_minutes"]')
//             .should('be.visible')
//             .type('*')
//         cy.get('[name="inter_minutes"]')
//             .should('be.visible')
//             .click()
//         cy.get('[type="submit"]')
//             .should('be.visible')
//             .click()
//         //Running the code snippet to generate the Popup button
//         cy.get('#runbtn', {timeout: 90000}).click();
//         //Accessing the popup button iframe and clicking the popup activation button
//         cy.xpath('//iframe[@id="iframeResult"]').its('0.contentDocument.body').then(cy.wrap).xpath('//button[text()="Try it"]').click();
//     })
// })   });
//

