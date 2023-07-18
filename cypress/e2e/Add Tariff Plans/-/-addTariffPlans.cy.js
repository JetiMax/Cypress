describe("-Add Tariff Plans", () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php');
    });

    // it("Add Tariff Plans,empty field", () => {
    //     cy.get('[type="submit"]')
    //         .click();
    //     cy.log("pop-up visible")
    //     cy.get('selector-pop-up')
    //         .should('have.text', 'incorrect input'); //fail
    // })
    //
    //
    // it("ATP, special characters & character", () => {
    //     cy.get('input[type="text"]').should('be.visible')
    //         .each(($input) => {
    //             cy.wrap($input)
    //                 .type('+f"d')
    //             cy.get('[type="submit"]')
    //                 .should('be.visible').click();
    //             cy.get('selector-pop-up')
    //                 .should('have.text', 'wrong map value'); //fail
    //         })
    // })

    // it("limitation of input characters in the field", () => {
    //     cy.get('input[type="text"]').should('be.visible')
    //         .each(($input) => {
    //             cy.wrap($input)
    //                 .type('1579468')
    //                 .should('not.have.type.value', '1579468');
    //         })
    // })

    it("check. you cannot add a tariff plan with negative numbers", () => {
        const fields = [
            {selector: '[name="rental"]', value: '-1'},
            {selector: '[name="sms_pack"]', value: '-1'},
            {selector: '[name="sms_charges"]', value: '-1'},
            {selector: '[name="local_minutes"]', value: '-1'},
            {selector: '[name="inter_minutes"]', value: '-1'},
            {selector: '[name="inter_charges"]', value: '-1'},
            {selector: '[name="minutes_charges"]', value: '-1'}
        ];
        fields.forEach((field) => {
            cy.get(field.selector)
                .type(field.value);
            cy.get('[type="submit"]')
                .click()
            cy.url()
                .should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
            cy.xpath('//*[@id="main"]/div/form/div/div[1]/h3') //Monthly Rental
                .should('be.visible')

            // cy.on('window:alert',(txt)=>{
            //     expect(txt).to.contains('Input field notice: negative numbers not allowed');
        })
    })

    it("check. you can not add a tariff plan with a zero value", () => {
        const fields = [
            {selector: '[name="rental"]', value: '0'},
            {selector: '[name="sms_pack"]', value: '0'},
            {selector: '[name="sms_charges"]', value: '0'},
            {selector: '[name="local_minutes"]', value: '0'},
            {selector: '[name="inter_minutes"]', value: '0'},
            {selector: '[name="inter_charges"]', value: '0'},
            {selector: '[name="minutes_charges"]', value: '0'}
        ];
        fields.forEach((field) => {
            cy.get(field.selector)
                .type(field.value);
            cy.get('[type="submit"]')
                .click()
            cy.url()
                .should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
            cy.xpath('//*[@id="main"]/div/form/div/div[1]/h3') //Monthly Rental
                .should('be.visible')
        })
    })

    it("Check. You can't add a plan with a + sign", () => {
        const fields = [
            {selector: '[name="rental"]', value: '+1'},
            {selector: '[name="sms_pack"]', value: '+1'},
            {selector: '[name="sms_charges"]', value: '+1'},
            {selector: '[name="local_minutes"]', value: '+1'},
            {selector: '[name="inter_minutes"]', value: '+1'},
            {selector: '[name="inter_charges"]', value: '+1'},
            {selector: '[name="minutes_charges"]', value: '+1'}
        ];
        fields.forEach((field) => {
            cy.get(field.selector)
                .type(field.value);
            cy.get('[type="submit"]')
                .click()
            cy.url()
                .should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
            cy.xpath('//*[@id="main"]/div/form/div/div[1]/h3') //Monthly Rental
                .should('be.visible')
        })
    })
})
