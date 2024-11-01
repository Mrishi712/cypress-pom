/// <reference types="cypress" />

describe('Orange HRM [LOGIN]', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.navigateTo()
  })

  it('@regression @sanity [LOGIN] - with valid creds', () => {
    cy.title('eq', 'OrangeHRM')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
  })

  it('@regression [LOGIN] - with invalid creds', () => {
    cy.navigateTo()
    cy.title('eq', 'OrangeHRM')
    cy.wait(5000)
    cy.get('input[name="username"]').type('Test')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
  })

})
