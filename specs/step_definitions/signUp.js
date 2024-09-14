import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the register page", () => {
  cy.visit("/register");
});

When("I Type {string} in the register email field", (email) => {
  cy.get("#email").type(email);
});

When("I type {string} in the register username field", (username) => {
  cy.get("#userName").type(username);
});

When("I type {string} in the password field", (password) => {
  cy.get("#password").type(password);
});

When("I type {string} in the confirm password field", (password) => {
  cy.get("#confirmPassword").type(password);
});

When("I click the register button", () => {
  cy.get(".register-button").click();
});

Then("I should see an error message", () => {
  cy.get(".register-error").should("be.visible");
});
