import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open {string}", url => {
    cy.visit(url);
});

Then("Should has text {string}", expected => {
    cy.contains(expected);
});

Then("Should found logo", () => {
    cy.get('img[alt="Cypress.io"]').should('be.visible');
});
