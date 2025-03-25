class MyInfoPage {
  selectorsList() {
    const selectors = {
      myInfoGrid: ".orangehrm-edit-employee-navigation",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      gerericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      saveButton: "[type='submit']",
      saveCloseButton: ".oxd-toast-close",
      selectListField: "div[clear='false']",
      listField: "div.oxd-select-dropdown",
      sexField: ".--gender-grouped-field",
    };
    return selectors;
  }

  accessMyInfoPage() {
    cy.get(this.selectorsList().myInfoButton).click();
    cy.location("pathname").should(
      "equal",
      "/web/index.php/pim/viewPersonalDetails/empNumber/7"
    );
    cy.get(this.selectorsList().myInfoGrid);
  }
  personalDetailsUpdate() {
    cy.get(this.selectorsList().firstNameField).clear().type("Cleydson");
    cy.get(this.selectorsList().middleNameField).clear().type("Guimaraes");
    cy.get(this.selectorsList().lastNameField).clear().type("Silva");
    cy.get(this.selectorsList().gerericField).eq(3).clear().type("CGS");
    cy.get(this.selectorsList().gerericField).eq(4).clear().type("4002");
    cy.get(this.selectorsList().gerericField).eq(5).clear().type("8922");
    cy.get(this.selectorsList().gerericField).eq(6).clear().type("110710");
    cy.get(this.selectorsList().dateField).eq(0).clear().type("2025-05-17");
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().selectListField).eq(0).click();
    cy.get(this.selectorsList().listField).contains("Brazilian").click();
    cy.get(this.selectorsList().selectListField).eq(1).click();
    cy.get(this.selectorsList().listField).contains("Married").click();
    cy.get(this.selectorsList().dateField).eq(1).clear().type("2026-10-17");
    cy.get(this.selectorsList().sexField).contains("Male").click();
  }
  saveUpdate() {
    cy.get(this.selectorsList().saveButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(this.selectorsList().saveCloseButton).click();
  }
}
export default MyInfoPage;
