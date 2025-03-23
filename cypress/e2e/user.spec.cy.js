// <reference types="cypress" />
import userData from '../fixtures/userData.json'
describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-text--h6',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-text',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.usernameFail.username)
    cy.get(selectorsList.passwordField).type(userData.usernameFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})