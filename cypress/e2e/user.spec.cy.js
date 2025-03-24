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
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    gerericField: ".oxd-input--active",
    dateField:"[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    saveCloseButton: ".oxd-toast-close",
    selectListField: "div[clear='false']",
    listField: "div.oxd-select-dropdown",
    sexField: ".--gender-grouped-field",
  }

  it.skip('User Info Update(Orange) - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Cleydson")
    cy.get(selectorsList.middleNameField).clear().type("Guimaraes")
    cy.get(selectorsList.lastNameField).clear().type("Silva")
    cy.get(selectorsList.gerericField).eq(3).clear().type("4002")
    cy.get(selectorsList.gerericField).eq(4).clear().type("8922")
    cy.get(selectorsList.gerericField).eq(5).clear().type("110710")
    cy.get(selectorsList.dateField).eq(0).clear().type("2025-05-17")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectListField).eq(0).click()
    cy.get(selectorsList.listField).contains('Brazilian').click()
    cy.get(selectorsList.selectListField).eq(1).click()
    cy.get(selectorsList.listField).contains('Married').click()
    cy.get(selectorsList.dateField).eq(1).clear().type("2026-10-17")
    cy.get(selectorsList.sexField).contains('Male').click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.saveCloseButton).click()
  })
  it.only('User Info Update(Green) - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Cleydson")
    cy.get(selectorsList.middleNameField).clear().type("Guimaraes")
    cy.get(selectorsList.lastNameField).clear().type("Silva")
    cy.get(selectorsList.gerericField).eq(3).clear().type("CGS")
    cy.get(selectorsList.gerericField).eq(4).clear().type("4002")
    cy.get(selectorsList.gerericField).eq(5).clear().type("8922")
    cy.get(selectorsList.gerericField).eq(6).clear().type("110710")
    cy.get(selectorsList.dateField).eq(0).clear().type("2025-05-17")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.gerericField).eq(8).clear().type("SSN")
    cy.get(selectorsList.gerericField).eq(9).clear().type("SIN")
    cy.get(selectorsList.selectListField).eq(0).click()
    cy.get(selectorsList.listField).contains('Canadian').click()
    cy.get(selectorsList.selectListField).eq(1).click()
    cy.get(selectorsList.listField).contains('Married').click()
    cy.get(selectorsList.dateField).eq(1).clear().type("2026-10-17")
    cy.get(selectorsList.sexField).contains('Male').click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorsList.saveCloseButton).click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.usernameFail.username)
    cy.get(selectorsList.passwordField).type(userData.usernameFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})