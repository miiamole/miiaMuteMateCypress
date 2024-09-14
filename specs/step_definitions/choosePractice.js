import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
  cy.visit("/");
});

When("I click on the get started button", () => {
  cy.get(".button").click();
});

Then("I can see two buttons to choose from", () => {
  cy.get(":nth-child(1) > .nav-link > .img-inner > .img-front").should(
    "be.visible"
  );
  cy.get(":nth-child(2) > .nav-link > .img-inner > .img-front").should(
    "be.visible"
  );
});

When("I Click on the Practice button", () => {
  cy.get(":nth-child(2) > .nav-link > .img-inner > .img-front").click();
});

Then("I see tree pictures", () => {
  cy.get(":nth-child(1) > .option-img").should("be.visible");
cy.get(":nth-child(2) > .img-inner > .img-front > .option-img").should(
  "be.visible"
);
  cy.get(":nth-child(3) > .img-inner > .img-front > .option-img").should(
    "be.visible"
  );
});

When("I click on ABC", () => {
  cy.get(":nth-child(2) > .img-inner > .img-front > .option-img").click();
});

Then("I can practice", () => {
  cy.get(".abc-image").should("be.visible");
});

