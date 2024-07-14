import LoginPage from './pages/login'
import SignInPage from './pages/signin'
import Homepage from './pages/home'

const signInPageElement = new SignInPage()
const logInPageElement = new LoginPage()
const homePageElement = new Homepage()


describe('login-suite', () => {
    let testData;

    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.fixture('login_details').then((data) => {
            testData = data;
        });
    });

    it('Login', () => {
        cy.visit(Cypress.env('url'))
        logInPageElement.getSingInButton().click()
        signInPageElement.getLoginPageHeading().contains('Customer Login')
        signInPageElement.getEmailTextBox().type(testData.email)
        signInPageElement.getPasswordTextBox().type(testData.password)
        signInPageElement.getSubmitButton().click()
        cy.wait(5000)
        cy.fetchAndCompareText( homePageElement.getFullName(),'Welcome, ' + testData.first_name + ' ' + testData.last_name + '!')
        cy.fetchAndCompareText( homePageElement.getHomePageContentInfo(),'New Luma Yoga Collection')
        cy.fetchAndCompareText( homePageElement.getHomePageContentTitle(),'Get fit and look fab in new seasonal styles')
        cy.fetchAndCompareText( homePageElement.getShowNewYogaButton(),'Shop New Yoga') 
        cy.checkElementExists(homePageElement.getShowNewYogaButton())
        cy.checkTextExists('New Luma Yoga Collection')
        cy.checkTextNotExists('World')
    });
});
