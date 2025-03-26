class MyInfoPage {
  selectorsList() {
    const selectors = {
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

  employeeName(firstname, middlename, lastname) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstname);
    cy.get(this.selectorsList().middleNameField).clear().type(middlename);
    cy.get(this.selectorsList().lastNameField).clear().type(lastname);
    //cy.get(this.selectorsList().gerericField).eq(3).clear().type("CGS");
  }
  employeeData(employeeid, otherid, driverlicense, licensedate) {
    cy.get(this.selectorsList().gerericField).eq(3).clear().type(employeeid);
    cy.get(this.selectorsList().gerericField).eq(4).clear().type(otherid);
    cy.get(this.selectorsList().gerericField).eq(5).clear().type(driverlicense);
    cy.get(this.selectorsList().dateField).eq(0).clear().type(licensedate);
    cy.get(this.selectorsList().dateCloseButton).click();
  }
  otherEmployeeData(nacionality, maritalstatus, dateofbirth, sex) {
    cy.get(this.selectorsList().selectListField).eq(0).click();
    cy.get(this.selectorsList().listField).contains(nacionality).click();
    cy.get(this.selectorsList().selectListField).eq(1).click();
    cy.get(this.selectorsList().listField).contains(maritalstatus).click();
    cy.get(this.selectorsList().dateField).eq(1).clear().type(dateofbirth);
    cy.get(this.selectorsList().sexField).contains(sex).click();
  }
  savePersonalDetails() {
    cy.get(this.selectorsList().saveButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(this.selectorsList().saveCloseButton).click();
  }
}
export default MyInfoPage;
