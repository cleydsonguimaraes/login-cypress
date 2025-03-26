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
    myInfoPage.employeeName("Cleydson", "Guimaraes", "Silva");
    myInfoPage.employeeData("4002", "8922", "110710", "2025-05-17");
    myInfoPage.otherEmployeeData("Brazilian", "Married", "2026-10-17", "Male");
    myInfoPage.savePersonalDetails();
  });
  it("User Info Update(Green) - Sucess", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.accessDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.employeeName("Cleydson", "Guimaraes", "Silva");
    myInfoPage.employeeData("4002", "8922", "110710", "2025-05-17");
    myInfoPage.otherEmployeeData("Brazilian", "Married", "2026-10-17", "Male");
    myInfoPage.savePersonalDetails();
  });
});
