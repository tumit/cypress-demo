Feature: Cypress Home Page

    I want enter to Cypress home page

    Scenario: Opening a Cypress home page
        Given I open "https://dashboard.cypress.io"
        Then Should redirect to "https://dashboard.cypress.io/login"
