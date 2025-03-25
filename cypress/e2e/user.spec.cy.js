// <reference types="cypress" />
import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";
import MyInfoPage from "../pages/myInfoPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it("User Info Update(Orange) - Sucess", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.accessDashboardPage();
    menuPage.accessMyInfoPage();
    cy.get(selectorsList.firstNameField).clear().type("Cleydson");
    cy.get(selectorsList.middleNameField).clear().type("Guimaraes");
    cy.get(selectorsList.lastNameField).clear().type("Silva");
    cy.get(selectorsList.gerericField).eq(3).clear().type("4002");
    cy.get(selectorsList.gerericField).eq(4).clear().type("8922");
    cy.get(selectorsList.gerericField).eq(5).clear().type("110710");
    cy.get(selectorsList.dateOrangeField).eq(0).clear().type("2025-05-17");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.selectListField).eq(0).click();
    cy.get(selectorsList.listField).contains("Brazilian").click();
    cy.get(selectorsList.selectListField).eq(1).click();
    cy.get(selectorsList.listField).contains("Married").click();
    cy.get(selectorsList.dateOrangeField).eq(1).clear().type("2026-10-17");
    cy.get(selectorsList.sexField).contains("Male").click();
    myInfoPage.saveUpdate();
  });
  it.only("User Info Update(Green) - Sucess", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.accessDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.employeeName("Cleydson", "Guimaraes", "Silva");
    myInfoPage.employeeData("4002","8922","110710", "2025-05-17");
    myInfoPage.otherEmployeeData("Brazilian", "Married", "2026-10-17","Male");
    myInfoPage.savePersonalDetails();
  });
  it("Login - Fail", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.usernameFail.username,
      usernameFail.userSuccess.password
    );
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
