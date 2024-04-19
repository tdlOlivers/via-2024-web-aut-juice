import { BasePage } from "../pageObjects/BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("[id='email']");
  }

  static get passwordField() {
    return cy.get("[id='password']");
  }

  static get loginButton(){
    return cy.get("[id='loginButton']");
  }
}
