describe("win size 890/961", () => {
    it('Checking button RESET  coordinates ', () => {
        cy.viewport(890, 961)
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')
        cy.get('[type="reset"]').each(($element) => {
            const elementCoordinates = $element[0].getBoundingClientRect();
            const X = elementCoordinates.x;
            const Y = elementCoordinates.y;
            expect(Y).to.equal(1109.53125);
            expect(X).to.equal(460.328125); //fail  width and height
        })
    })

    it('Checking coordinates left name field: Free sms pack', () => {
        cy.viewport(890, 961)
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')
        cy.log('Left name field: Free sms pack ')
        cy.xpath('//*[@id="main"]/div/form/div/div[16]/h3').each(($element) => {
            const elementCoordinates = $element[0].getBoundingClientRect();
            const X = elementCoordinates.x; //height
            const Y = elementCoordinates.y; //width
            expect(Y).to.equal(713.28125);
            expect(X).to.equal(137.953125); // fail width

        })
    })


    it('Checking coordinates left name field: Local Per Minutes Charges', () => {
        cy.viewport(890, 961)
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')
        cy.log('Left name field: Local Per Minutes Charges')
        cy.xpath('//*[@id="main"]/div/form/div/div[21]/h3').each(($element) => {
            const elementCoordinates = $element[0].getBoundingClientRect();
            const X = elementCoordinates.x; //height
            const Y = elementCoordinates.y; //width
            expect(Y).to.equal(836.84375);
            expect(X).to.equal(137.953125);

        })
    })
});


// cy.get('[type="submit"]')
//     .then($el => position().left)  // get 1st top value
//     .then(left1 => {
//         cy.get('[type="reset"]')
//             .then($el => $el.position().right)  // get 2nd top value
//             .then(right2 => {
//                 expect(left1).to.be.gt(right2)
//             })



