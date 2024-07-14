class SignInPage {
    getLoginPageHeading() {
        return cy.get('h1[class="page-title"]')
    }

    getEmailTextBox(){
        return cy.get('#email')
    }

    getPasswordTextBox(){
        return cy.get('#pass')
    }

    getSubmitButton(){
        return cy.get("#send2")
    }

}
export default SignInPage;