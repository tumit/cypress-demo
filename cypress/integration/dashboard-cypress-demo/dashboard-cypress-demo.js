import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open {string}", url => {
    cy.visit(url);
});

Then("Should found logo", () => {
    cy.get('div[class="login-img-wrapper"]').find("img").should('be.visible');
});
