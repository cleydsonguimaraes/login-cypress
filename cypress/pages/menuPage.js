class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      myInfoGrid: ".orangehrm-edit-employee-navigation",
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
}
export default MenuPage;
