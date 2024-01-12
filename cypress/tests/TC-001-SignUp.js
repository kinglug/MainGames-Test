
describe('Sign Up In The Page', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const numberRandom = randomNumber(100, 1000)

    beforeEach(() => {
        cy.visit('/')
        cy.title().should("eq", "Eklipse - Convert Your Twitch Stream & Share It To TikTok, Reels, & Shorts")
        cy.get('.header-main__col--right > .btn-register').click()
        cy.clearLocalStorage()
        cy.reload()
    });

    it('Sign Up Account', function () {
        cy.visit('/')
        cy.wait(2000)
        cy.get('.header-main__col--right > .btn-register').click()
        cy.get('#name').click().type('Test' + numberRandom)
        cy.get('#email').click().type('test123' + '+' + numberRandom + "@yopmail.com")
        cy.get('#password').click().type("test123456")
        cy.get('#password_confirmation').click().type("test123456")
        cy.title().should("eq","Eklipse")
        cy.get('.my-4 > .btn').click()
        cy.get(':nth-child(3) > .dropdown > .ek-custom-dropdown-list').click();
        cy.get('.menu-container > :nth-child(1)').click();
        cy.get(':nth-child(4) > .dropdown > .ek-custom-dropdown-list').click();
        cy.get(':nth-child(4) > .dropdown > .ek-custom-dropdown-menu > .menu-container > :nth-child(1)').click()
        cy.get(':nth-child(2) > .ek-radio-label').click()
        cy.get('.ek-primary-button').click()
        cy.get('[style="color: rgb(255, 204, 22); background: transparent; border: none; outline: none;"]').click()
        cy.get('.btn-close-modal').click()
        cy.get(':nth-child(7) > .dropdown > .nav-link > .ic-user').should("be.visible")
        cy.url().should('eq', 'https://app.eklipse.gg/home')
    });
});