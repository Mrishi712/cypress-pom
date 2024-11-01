/// <reference types="cypress" />

describe('Orange HRM [LOGIN]', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('[LOGIN] - with valid creds', () => {
    cy.title('eq', 'OrangeHRM')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
  })

})
