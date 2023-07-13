require('@cypress/xpath');

Cypress.Commands.add('getCorrectPP',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('4532375619520872')
    cy.xpath('//*[@id="cvv_code"]')
        .type('754')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
 })

Cypress.Commands.add('expiration',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="month"]').select('Month')
        .should('not.be.selected', 'Month')
    cy.xpath('//*[@id="year"]').select('Year')
        .should('not.be.selected', 'Year')
})

Cypress.Commands.add('wrongCardValue',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('4532375619520872')
    cy.xpath('//*[@id="cvv_code"]')
        .type('167')
    cy.xpath('//*[@id="month"]').select('11')
        .should('have.value', '11')
    cy.xpath('//*[@id="year"]').select('2022')
        .should('have.value', '2022')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('americanExpress',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('375987654321001')
    cy.xpath('//*[@id="cvv_code"]')
        .type('754')
    cy.xpath('//*[@id="month"]').select('01')
        .should('have.value', '1')
    cy.xpath('//*[@id="year"]').select('2024')
        .should('have.value', '2024')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('letters&SpecialCharacters',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('gkkpsf-/-')
    cy.xpath('//*[@id="cvv_code"]')
        .type('*+/-')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('fieldLen(max+1)',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('37598765432100100')
    cy.xpath('//*[@id="cvv_code"]')
        .type('9784')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})

Cypress.Commands.add('fieldLen(min)',(elementName,pageName,pageLink) => {
    cy.xpath('//*[@id="card_nmuber"]').click({force:true})
        .type('3')
    cy.xpath('//*[@id="cvv_code"]')
        .type('9')
    cy.xpath('//*[@id="month"]').select('10')
        .should('have.value', '10')
    cy.xpath('//*[@id="year"]').select('2028')
        .should('have.value', '2028')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('be.visible').click()
    cy.url().should('include','uid')
})


Cypress.Commands.add('stylePP',(elementName, pageLink) => {

    cy.log('Logo GURU99')
    cy.xpath('/html/body/div[1]/div[1]/div[1]/div[1]/a/img')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '26.4px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif');

    cy.log('Demo Site')
    cy.xpath('//*[@id="site-name"]/a')
        .should('have.css', 'font-size', '32px')
        .should('have.css', 'font-weight', '900')
        .should('have.css', 'line-height', '52.8px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif');

    cy.log('Payment Process')
    cy.xpath('//*[@id="three"]/div/header/h2')
        .should('have.css', 'font-size', '44px')
        .should('have.css', 'font-weight', '300')
        .should('have.css', 'line-height', '66px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(85, 85, 85)');

    cy.log('Pay Ammount')
    cy.xpath('//*[@id="three"]/div/form/div[1]/div/font[1]')
        .should('have.css', 'font-size', '32px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '52.8px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(154, 154, 154)');

    cy.log('$ Value')
    cy.xpath('//*[@id="three"]/div/form/div[1]/div/font[2]')
        .should('have.css', 'font-size', '32px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '52.8px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(255, 0, 0)');

    cy.log('left name fields: We accept,Card Number,Expiration Month,Expiration Year,CVV Code')
    cy.get('h4[style="text-align:center;font-size:24px;font-weight:400;color:#555;line-height:36px;"]')
        .each(($h4) => {
            cy.wrap($h4)
                .should('have.css', 'font-size', '24px')
                .should('have.css', 'font-weight', '400')
                .should('have.css', 'line-height', '36px')
                .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
                .should('have.css', 'border-bottom-color', 'rgb(85, 85, 85)');
        })

    cy.log('button PAY')
    cy.xpath('//*[@id="three"]/div/form/div[2]/div/ul/li/input')
        .should('have.css', 'font-size', '19.2px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '73.92px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgb(108, 192, 145)');

    cy.log('dropdown')
    cy.get('li[class="dropdown"]')
        .each(($li) => {
            cy.wrap($li)
        })
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '26.4px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(154, 154, 154)');

    cy.log('accept Card')
    cy.get('div[class="6u$ 12u$(xsmall)"]')
        .each(($div) => {
            cy.wrap($div)
        })
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '26.4px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(154, 154, 154)');

    cy.log('Testing')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[1]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '29.7px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Selenium')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[2]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '29.7px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Live Project')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[3]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '29.7px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Java')
    cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[4]/a[2]')
        .should('have.css', 'font-size', '18px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '29.7px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

    cy.log('Check Credit Card Limit')
    cy.xpath('//*[@id="nav"]/a[3]')
        .should('be.visible')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '44px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)');

    cy.log('Generate Card Number')
    cy.xpath('//*[@id="nav"]/a[2]')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '44px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)');

    cy.log('Cart')
    cy.xpath('//*[@id="nav"]/a[1]')
        .should('be.visible')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '44px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)');

    cy.log('Guru99 Payment Gateway')
    cy.xpath('//*[@id="header"]/div/a[1]')
        .should('be.visible')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-weight', '400')
        .should('have.css', 'line-height', '44px')
        .should('have.css', 'font-family', '"Source Sans Pro", Arial, Helvetica, sans-serif')
        .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)');

    cy.log('Input fields')
    cy.get('input[type="text"]')
        .each(($input) => {
            cy.wrap($input)
                .should('have.css', 'color', 'rgb(255, 255, 255)')
                .should('have.css', 'background-color', 'rgb(108, 192, 145)');
        })


});