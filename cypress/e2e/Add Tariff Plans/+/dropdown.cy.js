describe("Ui check Navbar", () => {

    it("Navigation Navbar Element check", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Navigation bar links')
        cy.getNavbarElement('Insurance Project', 'https://demo.guru99.com/insurance/v1/index.php')
        cy.getNavbarElement('Agile Project', 'https://demo.guru99.com/Agile_Project/Agi_V1/')
        cy.getNavbarElement('Bank Project', 'https://demo.guru99.com/V1/index.php')
        cy.getNavbarElement('Security Project', 'https://demo.guru99.com/Security/SEC_V1/index.php')
        cy.getNavbarElement('Telecom Project', 'https://demo.guru99.com/telecom/index.html')
        cy.getNavbarElement('Payment Gateway Project', 'https://demo.guru99.com/payment-gateway/index.php')
        cy.getNavbarElement('New Tours', 'https://demo.guru99.com/test/newtours/')
        cy.getNavbarElement('Payment Gateway Project', 'https://demo.guru99.com/payment-gateway/index.php')

    })
});


describe("Check Selenium Navbar Dropdown", () => {

    it("Selenium NavbarDropdown", () => {
        cy.log("Home page open ");
        cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
        cy.log('Navigation bar links')
        cy.getDropdown('Selenium', 'Flash Movie Demo', '../../test/flash-testing.html', 'https://demo.guru99.com/test/flash-testing.html')
        cy.getDropdown('Selenium', 'Radio & Checkbox Demo', '../../test/radio.html', 'https://demo.guru99.com/test/radio.html')
        cy.getDropdown('Selenium', 'Table Demo', '../../test/table.html', 'https://demo.guru99.com/test/table.html')
        cy.getDropdown('Selenium', 'Ajax Demo', '../../test/ajax.html', 'https://demo.guru99.com/test/ajax.html')
        cy.getDropdown('Selenium', 'Accessing Link', '../../test/link.html', 'https://demo.guru99.com/test/link.html')
        cy.getDropdown('Selenium', 'Inside & Outside Block Level Tag', '../../test/block.html', 'https://demo.guru99.com/test/block.html')
        cy.getDropdown('Selenium', 'Delete Customer Form', '../../test/delete_customer.php', 'https://demo.guru99.com/test/delete_customer.php')
        cy.getDropdown('Selenium', 'Yahoo', '../../test/yahoo.html', 'https://demo.guru99.com/test/yahoo.html')
        cy.getDropdown('Selenium', 'Tooltip', '../../test/tooltip.html', 'https://demo.guru99.com/test/tooltip.html')
        cy.getDropdown('Selenium', 'File Upload', '../../test/upload/', 'https://demo.guru99.com/test/upload/')
        cy.getDropdown('Selenium', 'Login', '../../test/login.html', 'https://demo.guru99.com/test/login.html')
        cy.getDropdown('Selenium', 'Social Icon', '../../test/social-icon.html', 'https://demo.guru99.com/test/social-icon.html')
        cy.getDropdown('Selenium', 'Selenium Auto IT', '../../test/autoit.html','https://demo.guru99.com/test/autoit.html')
        cy.getDropdown('Selenium', 'Selenium IDE Test', '../../test/facebook.html', 'https://demo.guru99.com/test/facebook.html')
        cy.getDropdown('Selenium', 'Guru99 Demo Page', '../../test/guru99home/', 'https://demo.guru99.com/test/guru99home/')
        cy.getDropdown('Selenium', 'Scrollbar Demo', '../../test/guru99home/scrolling.html', 'https://demo.guru99.com/test/guru99home/scrolling.html')
        cy.getDropdown('Selenium', 'File Upload using Sikuli Demo', '../../test/image_upload/', 'https://demo.guru99.com/test/image_upload/')
        cy.getDropdown('Selenium', 'Cookie Handling Demo', '../../test/cookie/selenium_aut.php', 'https://demo.guru99.com/test/cookie/selenium_aut.php')
        cy.getDropdown('Selenium', 'Drag and Drop Action', '../../test/drag_drop.html', 'https://demo.guru99.com/test/drag_drop.html')
        cy.getDropdown('Selenium', 'Selenium DatePicker Demo', '../../test/', 'https://demo.guru99.com/test/')

    })
});

    describe("Check SEO Navbar Dropdown", () => {

        it("SEO NavbarDropdown", () => {
            cy.log("Home page open ");
            cy.visit("https://demo.guru99.com/telecom/addtariffplans.php");
            cy.log('SEO dropdown')
            cy.SEONavbarDropdown('SEO', 'Page-1', 'http://demo.guru99.com/seo/page-1.html', 'https://demo.guru99.com/seo/page-1.html')
            cy.SEONavbarDropdown('SEO', 'Page-2', 'http://demo.guru99.com/seo/page-2.html', 'https://demo.guru99.com/seo/page-2.html')
            cy.SEONavbarDropdown('SEO', 'Page-3', 'http://demo.guru99.com/seo/page-3.html', 'https://demo.guru99.com/seo/page-3.html')
            cy.SEONavbarDropdown('SEO', 'Page-4', 'http://demo.guru99.com/seo/page-4.html', 'https://demo.guru99.com/seo/page-4.html')
            cy.SEONavbarDropdown('SEO', 'Page-5', 'http://demo.guru99.com/seo/page-5.html', 'https://demo.guru99.com/seo/page-5.html')
            cy.SEONavbarDropdown('SEO', 'Page-6', 'http://demo.guru99.com/seo/page-6.html', 'https://demo.guru99.com/seo/page-6.html')
        })
    });