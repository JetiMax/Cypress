Cypress.Commands.add('addcustomer',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="main"]/div/form/div/div[1]/label')
        .should('be.visible')
        .click({force:true})

    cy.xpath('//*[@id="fname"]')
        .type('Jekson')

    cy.xpath('//*[@id="lname"]')
        .type('Pollock')

    cy.xpath('//*[@id="email"]')
        .type('Jekpoll@yahoo.com')

    cy.xpath('//*[@id="main"]/div/form/div/div[7]')
        .type('47 Horatio Street ')

    cy.xpath('//*[@id="telephoneno"]')
        .type('+54929821234')

    cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
        .should('be.visible')
        .click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('done',(elementName,pageName,pageLink) => {
    cy.get('[type="radio"]').as('DoneBtn');
    cy.get('@DoneBtn').should('be.checked');
})

Cypress.Commands.add('len',(elementName, pageLink) => {
    const fields = [
        {
            selector: '[name="fname"]',
            minLength: 3,
            maxLenght: 10
        },
        {
            selector: '[name="lname"]',
            minLength: 3,
            maxLenght: 10
        },
        {
            selector: '[name="emailid"]',
            minLength: 5,
            maxLenght: 25
        },
        {
            selector: '[id="message"]',
            minLength: 5,
            maxLenght: 25
        },
        {
            selector: '[name="telephoneno"]',
            minLength: 8,
            maxLenght: 14
        }
    ];

    fields.forEach((field) => {
        cy.get(field.selector)
            .should('be.visible')
            .clear()
            .type('a'.repeat(field.minLength -1))
            .should('not.have.value', 'aaa'
                .repeat(field.minLength -1))

        fields.forEach((field) => {
            cy.get(field.selector)
                .should('be.visible')
                .clear()
                .type('a'.repeat(field.minLength + 1))
                .should('not.have.value', 'aaa'.repeat(field.minLength + 1))
        })
    })
});

