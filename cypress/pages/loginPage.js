class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: ".oxd-button",
      wrongCredentialAlert: ".oxd-text",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }
  checkLoginInvaled() {
    cy.get(this.selectorsList().wrongCredentialAlert).contains(
      "Invalid credentials"
    );
  }
}
export default LoginPage;
