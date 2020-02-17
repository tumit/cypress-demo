import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open {string}", url => {
    cy.visit(url);
});

Then("Should redirect to {string}", url => {
    cy.url().should('eq', url);
});