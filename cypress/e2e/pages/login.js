class LoginPage {
    getSingInButton() {
        return  cy.contains('Sign In')
    }
}
export default LoginPage;