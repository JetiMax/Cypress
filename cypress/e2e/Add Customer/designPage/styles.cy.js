describe("Styles", () => {

    it("Checking color,font-size, font-weight, line-height, font-family", () => {
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
        cy.xpath('/html/body/div[1]/div[1]/div[1]/div[1]/a/img')
            .should('have.css', 'font-size', '14px')
            .should('have.css', 'line-height', '20px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

        cy.log('Demo Site')
        cy.xpath('//*[@id="site-name"]/a')
            .should('have.css', 'font-size', '32px')
            .should('have.css', 'line-height', '45.7143px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(51, 51, 51)');

        cy.log('GURU99 telekom')
        cy.xpath('//*[@id="header"]/nav/a[2]')
            .should('have.css', 'font-size', '37px')
            .should('have.css', 'line-height', '88px')
            .should('have.css', 'font-family', 'Pacifico, cursive')
            .should('have.css', 'border-bottom-color', 'rgb(246, 117, 94)');

        cy.log('Add Customer')
        cy.xpath('//*[@id="main"]/div/header/h1')
            .should('have.css', 'font-size', '29px')
            .should('have.css', 'line-height', '38px')
            .should('have.css', 'font-family', 'Montserrat, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

        cy.log('Background Check')
        cy.xpath('//*[@id="main"]/div/form/h3')
            .should('have.css', 'font-size', '18px')
            .should('have.css', 'line-height', '27px')
            .should('have.css', 'font-family', 'Montserrat, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

        cy.log('Billing address')
        cy.xpath('//*[@id="main"]/div/form/div/div[3]/h3')
            .should('have.css', 'font-size', '18px')
            .should('have.css', 'line-height', '27px')
            .should('have.css', 'font-family', 'Montserrat, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(37, 162, 195)');

        cy.log('dropdown')
        cy.get('li[class="dropdown"]')
            .each(($li) => {
                cy.wrap($li)
            })
            .should('have.css', 'font-size', '14px')
            .should('have.css', 'line-height', '20px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(118, 125, 133)');

        cy.log('Testing')
        cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[1]/a[2]')
            .should('have.css', 'font-size', '18px')
            .should('have.css', 'line-height', '25.7143px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

        cy.log('Selenium')
        cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[2]/a[2]')
            .should('have.css', 'font-size', '18px')
            .should('have.css', 'line-height', '25.7143px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

        cy.log('Live Project')
        cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[3]/a[2]')
            .should('have.css', 'font-size', '18px')
            .should('have.css', 'line-height', '25.7143px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

        cy.log('Java')
        cy.xpath('/html/body/div[1]/div[1]/div[2]/table/tbody/tr/td[4]/a[2]')
            .should('have.css', 'font-size', '18px')
            .should('have.css', 'line-height', '25.7143px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(51, 122, 183)');

        cy.log('Left menu')
        cy.xpath('//*[@id="header"]/nav/a[1]')
            .should('have.css', 'font-size', '28px')
            .should('have.css', 'line-height', '84px')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(222, 225, 227)');

        cy.log('radiobutton Done')
        cy.xpath('//*[@id="done"]')
            .should('have.css', 'font-size', '15px')
            .should('have.css', 'line-height', 'normal')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(118, 125, 133)');

        cy.log('radiobutton Pending')
        cy.xpath('//*[@id="pending"]')
            .should('have.css', 'font-size', '15px')
            .should('have.css', 'line-height', 'normal')
            .should('have.css', 'font-family', '"Open Sans", Arial, Helvetica, sans-serif')
            .should('have.css', 'border-bottom-color', 'rgb(118, 125, 133)');

        cy.log('button Reset')
        cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[2]/input')
            .should('have.css', 'font-size', '15px')
            .should('have.css', 'line-height', '52.5px')
            .should('have.css', 'font-family', 'Montserrat, sans-serif')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .should('have.css', 'border-bottom-color', 'rgb(114, 122, 130)');


        cy.log('button SUBMIT')
        cy.xpath('//*[@id="main"]/div/form/div/div[9]/ul/li[1]/input')
            .should('have.css', 'font-size', '15px')
            .should('have.css', 'line-height', '52.5px')
            .should('have.css', 'font-family', 'Montserrat, sans-serif')
            .should('have.css', 'background-color', 'rgb(246, 117, 94)')
            .should('have.css', 'border-bottom-color', 'rgb(255, 255, 255)')


        cy.log('color fields')
        cy.get('input[type="text"]')
            .each(($input) => {
                cy.wrap($input)
                    .should('have.css', 'border-top-color', 'rgb(222, 225, 227)')
                    .should('have.css', 'background-color', 'rgba(144, 144, 144, 0.075)');
            })
       })
});
