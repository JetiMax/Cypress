describe("+Add Tariff Plans", () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php');
    });

    it("Add Tariff Plans", () => {
        cy.fixture('fieldTariffPlansTrue').then((user) => {
            cy.get('[name="rental"]').type(user.rental)
            cy.get('[name="local_minutes"]').type(user.local_minutes)
            cy.get('[name="inter_minutes"]').type(user.inter_minutes)
            cy.get('[name="sms_pack"]').type(user.sms_pack)
            cy.get('[name="minutes_charges"]').type(minutes_charges)
            cy.get('[name="inter_charges"]').type(user.inter_charges)
            cy.get('[name="sms_charges"]').type(user.sms_charges);
            cy.get('[type="submit"]')
                .click();
            cy.xpath('//*[@id="main"]/div/h2')
                .should('be.visible');
        })

    })

    it("Checking click empty area ", () => {
        const x = 300;
        const y = 340;
        cy.get('body').click(x, y);
        cy.url()
            .should('eq', 'https://demo.guru99.com/telecom/addtariffplans.php')
    }); //fail

    it("text placeholder", () => {
        cy.get('input[type="text"]')
            .each(($input) => {
                cy.wrap($input)
            })
            .should('be.visible')
            .should('have.attr', 'placeholder').and('not.be.empty')
    });


    it("Button reset clear field on frontend", () => {
        cy.fixture('fieldTariffPlansFalse').then((user) => {
            cy.get('[name="rental"]').type(user.rental)
            cy.get('[name="local_minutes"]').type(user.local_minutes)
            cy.get('[name="inter_minutes"]').type(user.inter_minutes)
            cy.get('[name="sms_pack"]').type(user.sms_pack)
            cy.get('[name="minutes_charges"]').type(minutes_charges)
            cy.get('[name="inter_charges"]').type(user.inter_charges)
            cy.get('[name="sms_charges"]').type(user.sms_charges);

            cy.get('[type="reset"]')
                .should('be.visible')
                .click()
            cy.get('[type="submit"]')
                .click();
            cy.xpath('//*[@id="main"]/div/h2')
                .should('be.visible');
            cy.get('selector-pop-up')
                .should('have.text', 'incorrect input');
        })
    })


    it("Input field notice: message Invalid characters", () => {
        const fields = [
            {selector: '[name="rental"]', value: '/-/', id: 'Special characters are not allowed'},
            {selector: '[name="rental"]', value: 'bob', id: 'Characters are not allowed'},
            {selector: '[name="sms_pack"]', value: '@#', id: 'Special characters are not allowed'},
            {selector: '[name="sms_pack"]', value: 'hot', id: 'Characters are not allowed'},
            {selector: '[name="sms_charges"]', value: ';|;;', id: 'Special characters are not allowed'},
            {selector: '[name="sms_charges"]', value: 'bob', id: 'Characters are not allowed'},
            {selector: '[name="local_minutes"]', value: '/*-', id: 'Special characters are not allowed'},
            {selector: '[name="local_minutes"]', value: 'job', id: 'Characters are not allowed'},
            {selector: '[name="inter_minutes"]', value: '*^%', id: 'Special characters are not allowed'},
            {selector: '[name="inter_minutes"]', value: 'yyy', id: 'Characters are not allowed'},
            {selector: '[name="inter_charges"]', value: '&', id: 'Special characters are not allowed'},
            {selector: '[name="inter_charges"]', value: 'bob', id: 'Characters are not allowed'},
            {selector: '[name="minutes_charges"]', value: '<>>/', id: 'Special characters are not allowed'},
            {selector: '[name="minutes_charges"]', value: 'bob', id: 'Characters are not allowed'}
        ];
        fields.forEach((field) => {
            cy.get(field.selector).clear();
            cy.get(field.selector)
                .type(field.value)
            cy.contains(field.id).should('be.visible');
        })
    })

    it("Coordinates page,element Reset, win size 890/961", () => {
        cy.viewport(890, 961)
        cy.log('Checking button RESET  coordinates')
        cy.get('[type="reset"]').each(($element) => {
            const elementCoordinates = $element[0].getBoundingClientRect();
            const X = elementCoordinates.x;
            const Y = elementCoordinates.y;
            expect(Y).to.equal(1109.53125);
            expect(X).to.equal(460.328125); //fail  width and height
        })
    })


    it("Coordinates page, element Free sms pack, win size 890/961", () => {
        cy.viewport(890, 961)
        cy.log('Checking coordinates left name field: Free sms pack')
        cy.xpath('//*[@id="main"]/div/form/div/div[16]/h3').each(($element) => {
            const elementCoordinates = $element[0].getBoundingClientRect();
            const X = elementCoordinates.x; //height
            const Y = fieldCoordinates.y; //width
            expect(Y).to.equal(713.28125);
            expect(X).to.equal(137.953125); // fail width
        })
    })


    it("Coordinates page, element Local Per Minutes, win size 890/961", () => {
        cy.viewport(890, 961)
        cy.log('ElementCoordinates')
        cy.log('Checking coordinates left name field:Local Per Minutes Charges')
        cy.xpath('//*[@id="main"]/div/form/div/div[21]/h3').each(($element) => {
            const elementCoordinates = $element[0].getBoundingClientRect();
            const X = elementCoordinates.x; //height
            const Y = elementCoordinates.y; //width
            expect(Y).to.equal(836.84375);
            expect(X).to.equal(137.953125);
        })
    })
})