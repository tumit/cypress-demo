import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open {string}", url => {
    cy.visit(url);
});

Then("Should has text {string}", expected => {
    cy.contains(expected);
});